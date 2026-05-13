import React, { createContext } from "react";
import { BlueprintItem, BlueprintType } from "../data/blueprints/blueprints";
import { BlueprintList, CraftList } from "./RecipeContextState";

export interface RecipeContextType {
  blueprintList: BlueprintList;
  craftList: CraftList;
  increaseBlueprint: (item: BlueprintItem, type: BlueprintType, qtty: number) => void;
  decreaseBlueprint: (item: BlueprintItem, qtty: number) => void;
  resetList: () => void;
  deleteBlueprint: (item: BlueprintItem) => void;
  triggerAnimation: (elementRef: React.MutableRefObject<HTMLButtonElement | null>, animation: string) => void;
  currentElementRef: React.MutableRefObject<HTMLButtonElement | null>;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);