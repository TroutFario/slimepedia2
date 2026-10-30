import type { Decoration } from "./decoration";
import type { UpgradeWithTier } from "./upgrades";
import type { Utility } from "./utilities";
import type { Warp } from "./warp";

export type BlueprintItem = UpgradeWithTier | Utility | Warp | Decoration;
