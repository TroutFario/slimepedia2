import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { upgradesList } from "../text/blueprints/upgrades";
import { utilitiesList, Utility } from "../text/blueprints/utilities";
import { Warp, warpGadgets } from "../text/blueprints/warp";
import { Decoration, decorationsList } from "../text/blueprints/decoration";
import { BlueprintItem, Recipe } from "../text/blueprints/blueprints";

enum BlueprintType {
  UPGRADES = "upgrades",
  UTILITIES = "utilities",
  WARP = "warp",
  DECORATIONS = "decorations",
}

// Type pour la liste des recettes (blueprint -> [type, quantity])
type RecipeList = { [key: string]: [BlueprintType, number] };

interface RecipeContextType {
  recipeList: React.MutableRefObject<RecipeList>;
  craftList: Recipe;
  addToRecipeList: (item: string, type: BlueprintType, qtty: number) => void;
  decreaseBlueprint: (item: string, type: BlueprintType, qtty: number) => void;
  resetList: () => void;
  resetBlueprint: (item: string) => void;
  craftRecipeMatcher: (
    item: BlueprintItem,
    type: BlueprintType
  ) => [string, Recipe];
  triggerAnimation: (
    elementRef: React.MutableRefObject<HTMLButtonElement | null>,
    animation: string
  ) => void;
  currentElementRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

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
  const blueprintList = useRef<RecipeList>({});
  const [craftList, setCraftList] = useState<Recipe>({});

  const addToRecipeList = (item: string, type: BlueprintType, qtty: number) => {
    if (blueprintList.current[item] === undefined)
      blueprintList.current[item] = [type, qtty];
    else blueprintList.current[item][1] += qtty;
    updateCraftList();
  };

  const decreaseBlueprint = (
    item: string,
    type: BlueprintType,
    qtty: number
  ) => {
    if (blueprintList.current[item] === undefined) {
      console.error("Item not found in blueprint list: ", item);
      return;
    } else if (blueprintList.current[item][1] <= qtty)
      delete blueprintList.current[item];
    else blueprintList.current[item][1] -= qtty;
    updateCraftList();
  };

  const resetBlueprint = (item: string) => {
    delete blueprintList.current[item];
    updateCraftList();
  };

  const resetList = () => {
    blueprintList.current = {};
    updateCraftList();
  };

  const craftRecipeMatcher: (
    item: BlueprintItem,
    type: BlueprintType
  ) => [string, Recipe] = (item: BlueprintItem, type: BlueprintType) => {
    switch (type) {
      case BlueprintType.UPGRADES:
        return [
          upgradesList[item as keyof typeof upgradesList][0],
          upgradesList[item as keyof typeof upgradesList][2],
        ];
      case BlueprintType.UTILITIES:
        return [
          utilitiesList[item as Utility][0],
          utilitiesList[item as Utility][2],
        ];
      case BlueprintType.WARP:
        return [warpGadgets[item as Warp][0], warpGadgets[item as Warp][2]];
      case BlueprintType.DECORATIONS:
        return [
          decorationsList[item as Decoration][0],
          decorationsList[item as Decoration][2],
        ];
      default:
        throw new Error("Invalid blueprint type");
    }
  };

  const updateCraftList = () => {
    const newCraftList: { [key: string]: number } = {};
    for (const [item, [type, qtty]] of Object.entries(blueprintList.current))
      for (const [craftItem, craftQtty] of Object.entries(
        craftRecipeMatcher(item as BlueprintItem, type)[1]
      )) {
        if (newCraftList[craftItem] === undefined)
          newCraftList[craftItem] = craftQtty * qtty;
        else newCraftList[craftItem] += craftQtty * qtty;
      }
    setCraftList(newCraftList);
  };

  useEffect(() => {
    updateCraftList();
  }, [blueprintList]);

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
      recipeList: blueprintList,
      craftList,
      addToRecipeList,
      decreaseBlueprint,
      resetList,
      craftRecipeMatcher,
      resetBlueprint,
      triggerAnimation,
      currentElementRef,
    }),
    [craftList]
  );

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};
