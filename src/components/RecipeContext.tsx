import React, { createContext, useContext, useRef, useState, useCallback } from "react";
import {
  BlueprintItem,
  BlueprintType,
  Recipe,
  RecipeElement,
} from "../data/blueprints/blueprints";
import { upgradesList } from "../data/blueprints/upgrades";
import { utilitiesList, Utility } from "../data/blueprints/utilities";
import { Warp, warpGadgets } from "../data/blueprints/warp";
import { Decoration, decorationList } from "../data/blueprints/decoration";

type BlueprintList = Map<BlueprintItem, [BlueprintType, number]>;
type CraftList = Map<RecipeElement, number>;

interface RecipeContextType {
  blueprintList: BlueprintList;
  craftList: CraftList;
  increaseBlueprint: (
    item: BlueprintItem,
    type: BlueprintType,
    qtty: number
  ) => void;
  decreaseBlueprint: (item: BlueprintItem, qtty: number) => void;
  resetList: () => void;
  deleteBlueprint: (item: BlueprintItem) => void;
  triggerAnimation: (
    elementRef: React.MutableRefObject<HTMLButtonElement | null>,
    animation: string
  ) => void;
  currentElementRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

const getRecipeForItem: (item: BlueprintItem, type: BlueprintType) => Recipe = (
  item,
  type
) => {
  switch (type) {
    case BlueprintType.UPGRADE:
      return upgradesList[item as keyof typeof upgradesList][2];
    case BlueprintType.UTILITY:
      return utilitiesList[item as Utility][2];
    case BlueprintType.WARP:
      return warpGadgets[item as Warp][2];
    case BlueprintType.DECORATION:
      return decorationList[item as Decoration][2];
    default:
      throw new Error("Invalid blueprint type: " + type);
  }
};

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blueprintList, setBlueprintList] = useState<BlueprintList>(new Map());
  const [craftList, setCraftList] = useState<CraftList>(new Map());

  const updateCraftList = useCallback((sourceBlueprints: BlueprintList) => {
    const newCraft = new Map<RecipeElement, number>();
    for (const [item, [type, qtty]] of sourceBlueprints) {
      const recipe = getRecipeForItem(item, type);
      for (const [ingredient, quantity] of recipe) {
        const requiredQtty = quantity * qtty;
        if (newCraft.has(ingredient as RecipeElement)) {
          newCraft.set(ingredient as RecipeElement, newCraft.get(ingredient as RecipeElement)! + requiredQtty);
        } else {
          newCraft.set(ingredient as RecipeElement, requiredQtty);
        }
      }
    }
    setCraftList(newCraft);
  }, []);

  const increaseBlueprint = (item: BlueprintItem, type: BlueprintType, qtty: number) => {
    const next = new Map(blueprintList);
    if (!next.has(item)) next.set(item, [type, qtty]);
    else next.get(item)![1] += qtty;
    setBlueprintList(next);
    updateCraftList(next);
  };

  const decreaseBlueprint = (item: BlueprintItem, qtty: number) => {
    if (!blueprintList.has(item)) {
      console.error("Item not found in blueprint list: ", item);
      return;
    }
    const next = new Map(blueprintList);
    if (next.get(item)![1] <= qtty) next.delete(item);
    else next.get(item)![1] -= qtty;
    setBlueprintList(next);
    updateCraftList(next);
  };

  const deleteBlueprint = (item: BlueprintItem) => {
    if (!blueprintList.has(item)) return;
    const next = new Map(blueprintList);
    next.delete(item);
    setBlueprintList(next);
    updateCraftList(next);
  };

  const resetList = () => {
    setBlueprintList(new Map());
    setCraftList(new Map());
  };

  const currentElementRef = useRef<HTMLButtonElement | null>(null);

  const triggerAnimation = (
    elementRef: React.MutableRefObject<HTMLButtonElement | null>,
    animation: string
  ) => {
    if (elementRef.current) {
      elementRef.current.classList.remove(animation);
      void elementRef.current.offsetWidth;
      elementRef.current.classList.add(animation);
    }
  };

  const contextValue = React.useMemo(
    () => ({
      blueprintList,
      craftList,
      increaseBlueprint,
      decreaseBlueprint,
      resetList,
      deleteBlueprint,
      triggerAnimation,
      currentElementRef,
    }),
    [blueprintList, craftList]
  );

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};
