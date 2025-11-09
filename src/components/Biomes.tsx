import React, { useState, useRef, useEffect } from "react";
import {
  Ranch,
  ranchInfos,
  Region,
  regionInfos,
} from "../text/regions";
import { NavLink } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Weather, weatherID, weatherList } from "../text/weather";
import "../css/Biomes.css";

const light = true;
const animationDelay = 200;

type MixedRegion = Region | Ranch | Weather | "pm";

const biomeToElement: (biome: MixedRegion) => [string, string, string] | undefined = (
  biome
) => {
  if (Object.values(Region).includes(biome as Region))
    return [regionInfos[biome as Region][0], regionInfos[biome as Region][1], biome as string];
  if (Object.values(Ranch).includes(biome as Ranch))
    return [ranchInfos[biome as Ranch][0], ranchInfos[biome as Ranch][1], biome as string];
  if (Object.values(Weather).includes(biome as Weather))
    return [weatherList[biome as Weather][0], weatherList[biome as Weather][1], biome as string];
  if (biome === "pm") return ["Pronto Mart", "pm", "shop"];
  return undefined;
};

export const Biomes: React.FC<{ spawnList: MixedRegion[] }> = ({
  spawnList = [],
}) => {
  const [listHovered, setListHovered] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const biomeBlacklist: Set<MixedRegion> = new Set(["pm"]);

  useEffect(() => {
    videoRefs.current = spawnList.map((_, i) => videoRefs.current[i] ?? null);
  }, [spawnList]);

  const handleVideoLoadAndPlay = async (videoRef: HTMLVideoElement) => {
    try {
      if (videoRef.readyState < 3) {
        await new Promise<void>((resolve, reject) => {
          videoRef.onloadeddata = () => resolve();
          videoRef.onerror = () =>
            reject(new Error(`Failed to load video: ${videoRef.src}`));
        });
      }
      await videoRef.play();
    } catch (error) {
      console.error("Error loading and playing video:", error);
    }
  };

  const handleMouseEnter = async (videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      await handleVideoLoadAndPlay(videoRef);
    }
  };

  const handleMouseLeave = async (videoRef: HTMLVideoElement | null) => {
    setTimeout(async () => {
      if (videoRef) {
        try {
          videoRef.pause();
        } catch (error) {
          console.error("Error pausing video:", error);
        }
      }
    }, animationDelay);
  };

  const renderBiomeItem = (
    biome: [string, string, string] | undefined,
    index: number
  ) => {
    if (!biome) return null;
    const videoRef = videoRefs.current[index];
    const content = (
      <>
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className="biome-list-video"
          src={`/assets/videos/${biome[1]}${light && ".light"}.webm`}
          preload="auto"
          loop
          muted
          disablePictureInPicture
        />
        <div className="biome-list-overlay">
          <img
            className="biome-image"
            src={`/assets/world/${biome[2]}.png`}
            alt={biome[0]}
          />
          <h4 className="biome-name">{biome[0]}</h4>
        </div>
      </>
    );

    const containerProps = {
      className: "biome-item",
      onMouseEnter: () => handleMouseEnter(videoRef),
      onMouseLeave: () => handleMouseLeave(videoRef),
    };

    if (biomeBlacklist.has(biome[1] as MixedRegion)) {
      return (
        <div key={biome[1]} {...containerProps}>
          {content}
        </div>
      );
    }

    return (
      <NavLink
        key={biome[1]}
        to={`/${weatherID.includes(biome[1]) ? "weather" : "regions"}/${
          biome[0]
        }`}
        style={{ textDecoration: "none" }}
      >
        <div {...containerProps}>{content}</div>
      </NavLink>
    );
  };

  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: "move",
          autoHideDelay: 500,
        },
      }}
      className="spawn-list-container"
      defer
    >
      <h3 className={listHovered ? "hidden-title" : ""}>Found in</h3>
      <button
        className="spawn-list-hover"
        onMouseEnter={() => setListHovered(true)}
        onMouseLeave={() => setListHovered(false)}
        onClick={(e) => {
          setListHovered((prev) => !prev);
          e.preventDefault();
        }}
      >
        {spawnList.map((biome, index) =>
          renderBiomeItem(biomeToElement(biome), index)
        )}
      </button>
    </OverlayScrollbarsComponent>
  );
};
