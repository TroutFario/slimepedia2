export const CONSTANTS = {
  NONE_IMAGE_PATH: "/assets/misc/none.png",
  ANIMATION_SPEED: "var(--animation-speed)",
  ANIMATION_FUNCTION: "var(--animation-function)",
} as const;

export const getImagePath = (folder: string, item: string | null) => {
  if (item === null) return CONSTANTS.NONE_IMAGE_PATH;
  return `/assets/${folder}/${item}.png`;
};

export const getDisplayName = (item: unknown, fallback: string = "None") => {
  if (!item) return fallback;
  if (Array.isArray(item)) return item[0] || fallback;
  return typeof item === 'string' ? item : fallback;
};