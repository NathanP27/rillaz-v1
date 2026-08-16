from celery import Celery
from app.config import settings
import logging
import httpx

logger = logging.getLogger(__name__)

celery_app = Celery(
    "gymrillaz_tasks",
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND,
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
)


@celery_app.task(name="tasks.send_contact_notification_email", bind=True, max_retries=3)
def send_contact_notification_email(self, name: str, email: str, phone: str, inquiry_type: str, message: str = ""):
    logger.info(f"Processing email notification for submission: {name} ({email})")

    if not settings.RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not configured. Skipping email delivery.")
        return {"status": "skipped", "reason": "no_api_key"}

    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {settings.RESEND_API_KEY}",
        "Content-Type": "application/json",
    }
    html_body = f"""
    <div style="font-family: Arial, sans-serif; background: #0b0c0e; color: #f8fafc; padding: 32px; border-radius: 12px; max-width: 560px;">
        <h2 style="color: #eab308; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 24px;">New Gym Inquiry — {inquiry_type}</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Name:</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
            <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Email:</td><td style="padding: 8px 0;">{email}</td></tr>
            <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Phone:</td><td style="padding: 8px 0;">{phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Inquiry Type:</td><td style="padding: 8px 0;">{inquiry_type}</td></tr>
            <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; vertical-align: top;">Notes:</td><td style="padding: 8px 0;">{message or "—"}</td></tr>
        </table>
    </div>
    """

    payload = {
        "from": "Gymrillaz Leads <noreply@gymrillaz.com>",
        "to": [settings.CONTACT_RECEIVER_EMAIL],
        "subject": f"[GYMRILLAZ] New {inquiry_type} Inquiry from {name}",
        "html": html_body,
    }

    try:
        with httpx.Client(timeout=10.0) as client:
            response = client.post(url, json=payload, headers=headers)
            response.raise_for_status()
            logger.info(f"Email successfully dispatched to {settings.CONTACT_RECEIVER_EMAIL}")
            return {"status": "sent", "response": response.json()}
    except Exception as exc:
        logger.error(f"Failed to send email: {exc}. Retrying...")
        raise self.retry(exc=exc, countdown=60)
