import React, { useCallback, useRef, useState } from "react";
import { BlueprintItem, BlueprintType, Recipe, RecipeElement } from "../data/blueprints/blueprints";
import { upgradesList, UpgradeWithTier } from "../data/blueprints/upgrades";
import { utilitiesList, Utility } from "../data/blueprints/utilities";
import { Warp, warpGadgets } from "../data/blueprints/warp";
import { Decoration, decorationList } from "../data/blueprints/decoration";

export type BlueprintList = Map<BlueprintItem, [BlueprintType, number]>;
export type CraftList = Map<RecipeElement, number>;

const getRecipeForItem = (item: BlueprintItem, type: BlueprintType): Recipe => {
  switch (type) {
    case BlueprintType.UPGRADE:
      return upgradesList[item as UpgradeWithTier].recipe;
    case BlueprintType.UTILITY:
      return utilitiesList[item as Utility].recipe;
    case BlueprintType.WARP:
      return warpGadgets[item as Warp].recipe;
    case BlueprintType.DECORATION:
      return decorationList[item as Decoration].recipe;
    default:
      throw new Error("Invalid blueprint type: " + type);
  }
};

const buildCraftList = (sourceBlueprints: BlueprintList): CraftList => {
  const newCraft = new Map<RecipeElement, number>();

  for (const [item, [type, qtty]] of sourceBlueprints) {
    const recipe = getRecipeForItem(item, type);
    for (const [ingredient, quantity] of recipe) {
      const requiredQtty = quantity * qtty;
      if (newCraft.has(ingredient)) {
        newCraft.set(ingredient, newCraft.get(ingredient)! + requiredQtty);
      } else {
        newCraft.set(ingredient, requiredQtty);
      }
    }
  }

  return newCraft;
};

export const useRecipeContextState = () => {
  const [blueprintList, setBlueprintList] = useState<BlueprintList>(new Map());
  const [craftList, setCraftList] = useState<CraftList>(new Map());
  const currentElementRef = useRef<HTMLButtonElement | null>(null);

  const updateCraftList = useCallback((sourceBlueprints: BlueprintList) => {
    setCraftList(buildCraftList(sourceBlueprints));
  }, []);

  const increaseBlueprint = useCallback((item: BlueprintItem, type: BlueprintType, qtty: number) => {
    setBlueprintList((previousBlueprints) => {
      const next = new Map(previousBlueprints);
      if (next.has(item)) next.get(item)![1] += qtty;
      else next.set(item, [type, qtty]);
      updateCraftList(next);
      return next;
    });
  }, [updateCraftList]);

  const decreaseBlueprint = useCallback((item: BlueprintItem, qtty: number) => {
    setBlueprintList((previousBlueprints) => {
      if (!previousBlueprints.has(item)) {
        console.error("Item not found in blueprint list: ", item);
        return previousBlueprints;
      }

      const next = new Map(previousBlueprints);
      if (next.get(item)![1] <= qtty) next.delete(item);
      else next.get(item)![1] -= qtty;
      updateCraftList(next);
      return next;
    });
  }, [updateCraftList]);

  const deleteBlueprint = useCallback((item: BlueprintItem) => {
    setBlueprintList((previousBlueprints) => {
      if (!previousBlueprints.has(item)) return previousBlueprints;

      const next = new Map(previousBlueprints);
      next.delete(item);
      updateCraftList(next);
      return next;
    });
  }, [updateCraftList]);

  const resetList = useCallback(() => {
    setBlueprintList(new Map());
    setCraftList(new Map());
  }, []);

  const triggerAnimation = useCallback((elementRef: React.MutableRefObject<HTMLButtonElement | null>, animation: string) => {
    if (elementRef.current) {
      elementRef.current.classList.remove(animation);
      void elementRef.current.offsetWidth;
      elementRef.current.classList.add(animation);
    }
  }, []);

  return {
    blueprintList,
    craftList,
    increaseBlueprint,
    decreaseBlueprint,
    resetList,
    deleteBlueprint,
    triggerAnimation,
    currentElementRef,
  };
};