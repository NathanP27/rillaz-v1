from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.db import get_db
from app.models import ContactSubmission, Program
from app.schemas import ContactSubmissionCreate, ContactSubmissionResponse, ProgramResponse
from app.worker import send_contact_notification_email

router = APIRouter()


@router.post("/contact", response_model=ContactSubmissionResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(payload: ContactSubmissionCreate, db: AsyncSession = Depends(get_db)):
    db_submission = ContactSubmission(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        inquiry_type=payload.inquiryType,
        message=payload.message,
    )
    db.add(db_submission)
    await db.commit()
    await db.refresh(db_submission)

    # Queue asynchronous email notification via Celery worker
    send_contact_notification_email.delay(
        name=db_submission.name,
        email=db_submission.email,
        phone=db_submission.phone,
        inquiry_type=db_submission.inquiry_type,
        message=db_submission.message or "",
    )

    return db_submission


@router.get("/programs", response_model=list[ProgramResponse])
async def get_programs(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Program).where(Program.is_active == True))
    programs = result.scalars().all()
    return programs
