import React from "react";

interface DescriptionPanelProps {
  visible: boolean;
  sections: Array<{
    icon: string;
    title: string;
    content: string;
    iconAlt?: string;
  }>;
}

export const DescriptionPanel: React.FC<DescriptionPanelProps> = ({
  visible,
  sections,
}) => (
  <div className={`desc ${visible ? "shown-desc" : "hidden-desc"}`}>
    {sections.map((section, index) => (
      <React.Fragment key={index}>
        <div className="desc-title">
          <img 
            src={section.icon} 
            alt={section.iconAlt || section.title} 
          />
          <h3>{section.title}</h3>
        </div>
        <p>{section.content}</p>
      </React.Fragment>
    ))}
  </div>
);