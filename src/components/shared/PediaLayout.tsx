import React, { useCallback } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { FaAngleDown } from "react-icons/fa6";

interface PediaLayoutProps {
  // Sidebar avec la liste
  listClassName?: string;
  listContainer?: React.ReactNode; // Pour les tabs (Food, Items)
  children: React.ReactNode; // NavButtons dans OverlayScrollbarsComponent
  
  // Contenu principal
  presentationClassName?: string;
  infosClassName?: string;
  selectedItemDetails: React.ReactNode;
  
  // Toggle description
  showDescription: boolean;
  onToggleDescription: () => void;
  descriptionPanel: React.ReactNode;
}

const useKeyboardNavigation = (action: () => void) => {
  return useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  }, [action]);
};

export const PediaLayout: React.FC<PediaLayoutProps> = ({
  listClassName = "list-generic",
  listContainer,
  children,
  presentationClassName = "generic-presentation",
  infosClassName = "pedia-infos generic-infos",
  selectedItemDetails,
  showDescription,
  onToggleDescription,
  descriptionPanel,
}) => {
  const handleKeyDown = useKeyboardNavigation(onToggleDescription);

  return (
    <div>
      {/* LISTE */}
      {listContainer ? (
        <div className="list-container">
          {listContainer}
          <OverlayScrollbarsComponent
            options={{
              scrollbars: {
                autoHide: "move",
                autoHideDelay: 500,
              },
            }}
            className={listClassName}
            defer
          >
            {children}
          </OverlayScrollbarsComponent>
        </div>
      ) : (
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "move",
              autoHideDelay: 500,
            },
          }}
          className={listClassName}
          defer
        >
          {children}
        </OverlayScrollbarsComponent>
      )}

      {/* CONTENU PRINCIPAL */}
      <div className={`${presentationClassName} box-layout-secondary`}>
        <div className={`${infosClassName}${showDescription ? " hidden-infos" : ""}`}>
          {selectedItemDetails}
        </div>
        
        <button
          role="link"
          className={`arrow-btn ${showDescription ? "top-btn" : "bot-btn"}`}
          onClick={onToggleDescription}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <FaAngleDown />
        </button>
        
        {descriptionPanel}
      </div>
    </div>
  );
};