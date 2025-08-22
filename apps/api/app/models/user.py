"""
User Model - Core user entity for FinGenius platform
"""

from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base
from datetime import datetime
from typing import Optional, Dict, Any

class User(Base):
    """User model representing platform users"""
    
    __tablename__ = "users"
    
    # Primary key
    id = Column(Integer, primary_key=True, index=True)
    
    # Basic information
    email = Column(String(255), unique=True, index=True, nullable=False)
    username = Column(String(100), unique=True, index=True, nullable=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    
    # Authentication
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    is_superuser = Column(Boolean, default=False)
    
    # Profile information
    phone = Column(String(20), nullable=True)
    date_of_birth = Column(DateTime, nullable=True)
    address = Column(Text, nullable=True)
    profile_picture_url = Column(String(500), nullable=True)
    
    # Financial profile
    risk_tolerance = Column(String(50), nullable=True)  # conservative, moderate, aggressive
    investment_goals = Column(JSON, nullable=True)  # retirement, education, etc.
    annual_income = Column(Integer, nullable=True)
    net_worth = Column(Integer, nullable=True)
    
    # KYC/AML information
    kyc_status = Column(String(50), default="pending")  # pending, approved, rejected
    kyc_documents = Column(JSON, nullable=True)
    aml_check_status = Column(String(50), default="pending")
    
    # Preferences
    notification_preferences = Column(JSON, default=dict)
    privacy_settings = Column(JSON, default=dict)
    theme_preference = Column(String(20), default="system")  # light, dark, system
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_login = Column(DateTime(timezone=True), nullable=True)
    
    # Relationships
    portfolios = relationship("Portfolio", back_populates="user")
    accounts = relationship("Account", back_populates="user")
    transactions = relationship("Transaction", back_populates="user")
    advice_logs = relationship("AdviceLog", back_populates="user")
    
    def __repr__(self):
        return f"<User(id={self.id}, email='{self.email}', name='{self.first_name} {self.last_name}')>"
    
    @property
    def full_name(self) -> str:
        """Get user's full name"""
        return f"{self.first_name} {self.last_name}"
    
    @property
    def is_kyc_approved(self) -> bool:
        """Check if user's KYC is approved"""
        return self.kyc_status == "approved"
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert user to dictionary representation"""
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "full_name": self.full_name,
            "is_active": self.is_active,
            "is_verified": self.is_verified,
            "risk_tolerance": self.risk_tolerance,
            "kyc_status": self.kyc_status,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "last_login": self.last_login.isoformat() if self.last_login else None,
        }
