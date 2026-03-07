import React from "react";

interface EmptyStateProps {
  title: string;
  subtitle: string;
  icon?: string;
  children?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle, icon, children }) => (
  <>
    <div className="image-title">
      <div className="info-title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="image-container">{icon && <img src={icon} className="img-main" alt={title} />}</div>
    </div>
    {children}
  </>
);
