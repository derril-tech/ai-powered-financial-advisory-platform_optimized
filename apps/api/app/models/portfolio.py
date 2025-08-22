"""
Portfolio Model - Investment portfolio management
"""

from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base
from datetime import datetime
from typing import Optional, Dict, Any, List

class Portfolio(Base):
    """Portfolio model representing user investment portfolios"""
    
    __tablename__ = "portfolios"
    
    # Primary key
    id = Column(Integer, primary_key=True, index=True)
    
    # Foreign keys
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    # Portfolio information
    name = Column(String(200), nullable=False)
    description = Column(Text, nullable=True)
    portfolio_type = Column(String(50), default="individual")  # individual, joint, trust, etc.
    
    # Financial data
    total_value = Column(Float, default=0.0)
    cash_balance = Column(Float, default=0.0)
    invested_amount = Column(Float, default=0.0)
    
    # Risk and performance metrics
    risk_score = Column(Float, nullable=True)  # 1-10 scale
    sharpe_ratio = Column(Float, nullable=True)
    volatility = Column(Float, nullable=True)
    beta = Column(Float, nullable=True)
    
    # Asset allocation
    asset_allocation = Column(JSON, nullable=True)  # stocks, bonds, cash, etc.
    sector_allocation = Column(JSON, nullable=True)
    geographic_allocation = Column(JSON, nullable=True)
    
    # Performance tracking
    total_return = Column(Float, default=0.0)
    annualized_return = Column(Float, nullable=True)
    max_drawdown = Column(Float, nullable=True)
    
    # AI recommendations
    ai_fit_score = Column(Float, nullable=True)  # How well portfolio matches user profile
    last_rebalancing_date = Column(DateTime, nullable=True)
    next_rebalancing_date = Column(DateTime, nullable=True)
    
    # Status
    is_active = Column(Boolean, default=True)
    is_public = Column(Boolean, default=False)
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_updated = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    user = relationship("User", back_populates="portfolios")
    holdings = relationship("Holding", back_populates="portfolio")
    transactions = relationship("Transaction", back_populates="portfolio")
    simulations = relationship("Simulation", back_populates="portfolio")
    advice_logs = relationship("AdviceLog", back_populates="portfolio")
    
    def __repr__(self):
        return f"<Portfolio(id={self.id}, name='{self.name}', user_id={self.user_id})>"
    
    @property
    def total_holdings_value(self) -> float:
        """Calculate total value of all holdings"""
        return sum(holding.current_value for holding in self.holdings)
    
    @property
    def total_portfolio_value(self) -> float:
        """Calculate total portfolio value including cash"""
        return self.total_holdings_value + self.cash_balance
    
    def get_allocation_percentage(self, asset_type: str) -> float:
        """Get percentage allocation for a specific asset type"""
        if not self.asset_allocation or self.total_portfolio_value == 0:
            return 0.0
        
        allocation = self.asset_allocation.get(asset_type, 0)
        return (allocation / self.total_portfolio_value) * 100
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert portfolio to dictionary representation"""
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "portfolio_type": self.portfolio_type,
            "total_value": self.total_value,
            "cash_balance": self.cash_balance,
            "invested_amount": self.invested_amount,
            "risk_score": self.risk_score,
            "sharpe_ratio": self.sharpe_ratio,
            "total_return": self.total_return,
            "annualized_return": self.annualized_return,
            "asset_allocation": self.asset_allocation,
            "ai_fit_score": self.ai_fit_score,
            "is_active": self.is_active,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "last_updated": self.last_updated.isoformat() if self.last_updated else None,
        }

class Holding(Base):
    """Holding model representing individual securities in portfolios"""
    
    __tablename__ = "holdings"
    
    # Primary key
    id = Column(Integer, primary_key=True, index=True)
    
    # Foreign keys
    portfolio_id = Column(Integer, ForeignKey("portfolios.id"), nullable=False)
    
    # Security information
    symbol = Column(String(20), nullable=False)
    security_name = Column(String(200), nullable=False)
    security_type = Column(String(50), nullable=False)  # stock, bond, etf, mutual_fund, etc.
    isin = Column(String(12), nullable=True)
    cusip = Column(String(9), nullable=True)
    
    # Position data
    quantity = Column(Float, nullable=False)
    average_cost = Column(Float, nullable=False)
    current_price = Column(Float, nullable=True)
    current_value = Column(Float, nullable=True)
    
    # Performance metrics
    unrealized_gain_loss = Column(Float, default=0.0)
    unrealized_gain_loss_percent = Column(Float, default=0.0)
    total_return = Column(Float, default=0.0)
    
    # Metadata
    sector = Column(String(100), nullable=True)
    industry = Column(String(100), nullable=True)
    country = Column(String(100), nullable=True)
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    portfolio = relationship("Portfolio", back_populates="holdings")
    
    def __repr__(self):
        return f"<Holding(id={self.id}, symbol='{self.symbol}', quantity={self.quantity})>"
    
    @property
    def market_value(self) -> float:
        """Calculate current market value"""
        return self.quantity * (self.current_price or 0)
    
    @property
    def cost_basis(self) -> float:
        """Calculate total cost basis"""
        return self.quantity * self.average_cost
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert holding to dictionary representation"""
        return {
            "id": self.id,
            "symbol": self.symbol,
            "security_name": self.security_name,
            "security_type": self.security_type,
            "quantity": self.quantity,
            "average_cost": self.average_cost,
            "current_price": self.current_price,
            "current_value": self.current_value,
            "unrealized_gain_loss": self.unrealized_gain_loss,
            "unrealized_gain_loss_percent": self.unrealized_gain_loss_percent,
            "sector": self.sector,
            "industry": self.industry,
            "country": self.country,
        }
