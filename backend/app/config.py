from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    PROJECT_NAME: str = "Gymrillaz Backend API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://gymrillaz:gymrillaz_secret@postgres:5432/gymrillaz_db"

    # Redis
    REDIS_URL: str = "redis://redis:6379/0"

    # Celery
    CELERY_BROKER_URL: str = "redis://redis:6379/1"
    CELERY_RESULT_BACKEND: str = "redis://redis:6379/2"

    # Email / Resend
    RESEND_API_KEY: Optional[str] = None
    CONTACT_RECEIVER_EMAIL: str = "leads@gymrillaz.com"

    # CORS
    CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://gymrillaz.com",
        "https://www.gymrillaz.com",
    ]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
