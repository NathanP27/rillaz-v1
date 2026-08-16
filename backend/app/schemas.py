from pydantic import BaseModel, EmailStr, Field
import datetime
from typing import Optional
from app.models import InquiryStatus


class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=50)
    inquiryType: str = Field(..., alias="inquiryType")
    message: Optional[str] = None

    class Config:
        populate_by_name = True


class ContactSubmissionResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    inquiry_type: str
    message: Optional[str]
    status: InquiryStatus
    created_at: datetime.datetime

    class Config:
        from_attributes = True


class ProgramResponse(BaseModel):
    id: int
    slug: str
    name: str
    tagline: str
    description: str
    suitable_for: str
    is_active: bool

    class Config:
        from_attributes = True
