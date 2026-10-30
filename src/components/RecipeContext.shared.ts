import { createContext } from "react";
import { BlueprintType } from "../data/blueprints/blueprints";
import type { BlueprintList, CraftList } from "./RecipeContextState";
import type { BlueprintItem } from "../data/blueprints/commons";

export interface RecipeContextType {
  blueprintList: BlueprintList;
  craftList: CraftList;
  increaseBlueprint: (item: BlueprintItem, type: BlueprintType, qtty: number) => void;
  decreaseBlueprint: (item: BlueprintItem, qtty: number) => void;
  resetList: () => void;
  deleteBlueprint: (item: BlueprintItem) => void;
  triggerAnimation: (
    elementRef: React.RefObject<HTMLButtonElement | null>,
    animation: string,
  ) => void;
  currentElementRef: React.RefObject<HTMLButtonElement | null>;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);
