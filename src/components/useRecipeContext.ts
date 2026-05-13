import { useContext } from "react";
import { RecipeContext, RecipeContextType } from "./RecipeContext.shared";

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};