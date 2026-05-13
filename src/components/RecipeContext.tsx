import React from "react";
import { RecipeContext, RecipeContextType } from "./RecipeContext.shared";
import { useRecipeContextState } from "./RecipeContextState";

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contextValue = useRecipeContextState();

  return <RecipeContext.Provider value={contextValue}>{children}</RecipeContext.Provider>;
};

export type { RecipeContextType };
