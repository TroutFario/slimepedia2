import React, { useRef, useState } from "react";
import { GLSection, GLSectionTimecodes, Ranch, Region } from "../data/regions";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const playAudio = (
  audioRef: React.MutableRefObject<HTMLAudioElement | null>,
  currentAudio: HTMLAudioElement | null,
  setCurrentAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>,
) => {
  if (currentAudio)
    if (currentAudio !== audioRef.current) {
      currentAudio.pause();
      if (currentAudio) currentAudio.currentTime = 0;
    } else if (currentAudio === audioRef.current) {
      audioRef.current.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      return;
    }
  setCurrentAudio(audioRef.current);
  if (audioRef.current) {
    audioRef.current.volume = 0.1;
    audioRef.current.play();
  }
};

const getAudioName = (currentAudio: HTMLAudioElement | null) => {
  if (!currentAudio?.src) return "";
  return currentAudio.src.split("/").at(-1)?.split(".")[0];
};

const audioLabyRefsNames = Object.values(GLSection).flatMap((section) => [
  `laby-${section}-day-theme`,
  `laby-${section}-day-ambient`,
  `laby-${section}-night-theme`,
  `laby-${section}-night-ambient`,
]);

enum MusicType {
  THEME = "Theme",
  RELAX = "Relax",
  AMBIENT = "Ambient",
}

enum MusicTime {
  DAY = "Day",
  NIGHT = "Night",
}

const regionCaption = (region: Ranch | Region, time: MusicTime, type: MusicType) => {
  return `data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:10.000%0AMusic%20from%20${region.replaceAll(
    "-",
    " ",
  )}%20${time}%20${type}`;
};

export const MusicRefs: React.FC<{
  region: Ranch | Region;
  videoRef: React.RefObject<HTMLVideoElement> | null;
}> = ({ region: regionName, videoRef }) => {
  const region = Object.values(Ranch).includes(regionName as Ranch) ? Ranch.Conservatory : regionName;
  const [musicMenu, setMusicMenu] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const themeDayRef = useRef<HTMLAudioElement | null>(null);
  const relaxDayRef = useRef<HTMLAudioElement | null>(null);
  const ambientDayRef = useRef<HTMLAudioElement | null>(null);
  const themeNightRef = useRef<HTMLAudioElement | null>(null);
  const relaxNightRef = useRef<HTMLAudioElement | null>(null);
  const ambientNightRef = useRef<HTMLAudioElement | null>(null);

  if (region === "sea") return <></>;

  return (
    <>
      <audio ref={themeDayRef} src={`/assets/music/${region}-day-theme.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Day Theme Captions"
          default
          src={regionCaption(region, MusicTime.DAY, MusicType.THEME)}
        />
      </audio>
      <audio ref={relaxDayRef} src={`/assets/music/${region}-day-relax.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Day Relax Captions"
          default
          src={regionCaption(region, MusicTime.DAY, MusicType.RELAX)}
        />
      </audio>
      <audio ref={ambientDayRef} src={`/assets/music/${region}-day-ambient.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Day Ambient Captions"
          default
          src={regionCaption(region, MusicTime.DAY, MusicType.AMBIENT)}
        />
      </audio>
      <audio ref={themeNightRef} src={`/assets/music/${region}-night-theme.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Night Theme Captions"
          default
          src={regionCaption(region, MusicTime.NIGHT, MusicType.THEME)}
        />
      </audio>
      <audio ref={relaxNightRef} src={`/assets/music/${region}-night-relax.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Night Relax Captions"
          default
          src={regionCaption(region, MusicTime.NIGHT, MusicType.RELAX)}
        />
      </audio>
      <audio ref={ambientNightRef} src={`/assets/music/${region}-night-ambient.ogg`}>
        <track
          kind="captions"
          srcLang="en"
          label="Night Ambient Captions"
          default
          src={regionCaption(region, MusicTime.NIGHT, MusicType.AMBIENT)}
        />
      </audio>
      <div className={`region-music-player ${musicMenu ? "" : "disabled"}`}>
        <button className="music-player-icon" onClick={() => setMusicMenu(!musicMenu)}>
          <img src="/assets/misc/audio.png" alt="Open music list" />
        </button>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "move",
              autoHideDelay: 500,
            },
          }}
          defer
        >
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-night-ambient` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(ambientNightRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 50, currentAudio !== ambientNightRef.current);
            }}
          >
            <img src="/assets/deco/cheerfulstatue.png" alt="Cheerful Statue" />
          </button>
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-night-relax` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(relaxNightRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 40, currentAudio !== relaxNightRef.current);
            }}
          >
            <img src="/assets/deco/happystatue.png" alt="Happy Statue" />
          </button>
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-night-theme` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(themeNightRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 30, currentAudio !== themeNightRef.current);
            }}
          >
            <img src="/assets/deco/overjoyedstatue.png" alt="Overjoyed Statue" />
          </button>
          <img src="/assets/misc/moon.png" className="music-time" alt="Night Music" />
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-day-ambient` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(ambientDayRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 20, currentAudio !== ambientDayRef.current);
            }}
          >
            <img src="/assets/deco/cheerfulstatue.png" alt="Cheerful Statue" />
          </button>
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-day-relax` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(relaxDayRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 10, currentAudio !== relaxDayRef.current);
            }}
          >
            <img src="/assets/deco/happystatue.png" alt="Happy Statue" />
          </button>
          <button
            className={`music-element-icon ${
              getAudioName(currentAudio) === `${region}-day-theme` ? "music-current" : ""
            }`}
            onClick={() => {
              playAudio(themeDayRef, currentAudio, setCurrentAudio);
              setVideoTime(videoRef, 0, currentAudio !== themeDayRef.current);
            }}
          >
            <img src="/assets/deco/overjoyedstatue.png" alt="Overjoyed Statue" />
          </button>
          <img src="/assets/misc/sun.png" className="music-time" alt="Day Music" />
        </OverlayScrollbarsComponent>
      </div>
    </>
  );
};

const MusicSection: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement> | null;
  sectionName: GLSection;
  refsList: Record<string, React.RefObject<HTMLAudioElement>>;
  currentAudio: HTMLAudioElement | null;
  setCurrentAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
}> = ({ videoRef, sectionName, refsList, currentAudio, setCurrentAudio }) => {
  
  return (
    <div className={`music-section music-section-${sectionName}`}>
      <img src="/assets/misc/sun.png" className="music-time" alt="Day Music" />
      <button
        className={`music-element-icon ${
          getAudioName(currentAudio) === `laby-${sectionName}-day-theme` ? " music-current" : ""
        }`}
        onClick={() => {
          setVideoTime(
            videoRef,
            GLSectionTimecodes[sectionName][0],
            currentAudio !== refsList[`laby-${sectionName}-day-theme`].current,
          );
          playAudio(refsList[`laby-${sectionName}-day-theme`], currentAudio, setCurrentAudio);
        }}
      >
        <img src="/assets/deco/overjoyedstatue.png" alt="Overjoyed Statue" />
      </button>
      <button
        className={`music-element-icon${
          getAudioName(currentAudio) === `laby-${sectionName}-day-ambient` ? " music-current" : ""
        }`}
        onClick={() => {
          setVideoTime(
            videoRef,
            GLSectionTimecodes[sectionName][1],
            currentAudio !== refsList[`laby-${sectionName}-day-ambient`].current,
          );
          playAudio(refsList[`laby-${sectionName}-day-ambient`], currentAudio, setCurrentAudio);
        }}
      >
        <img src="/assets/deco/cheerfulstatue.png" alt="Cheerful Statue" />
      </button>
      <img src="/assets/misc/moon.png" className="music-time" alt="Night Music" />
      <button
        className={`music-element-icon ${
          getAudioName(currentAudio) === `laby-${sectionName}-night-theme` ? " music-current" : ""
        }`}
        onClick={() => {
          setVideoTime(
            videoRef,
            GLSectionTimecodes[sectionName][2],
            currentAudio !== refsList[`laby-${sectionName}-night-theme`].current,
          );
          playAudio(refsList[`laby-${sectionName}-night-theme`], currentAudio, setCurrentAudio);
        }}
      >
        <img src="/assets/deco/overjoyedstatue.png" alt="Overjoyed Statue" />
      </button>
      <button
        className={`music-element-icon ${
          getAudioName(currentAudio) === `laby-${sectionName}-night-ambient` ? " music-current" : ""
        }`}
        onClick={() => {
          setVideoTime(
            videoRef,
            GLSectionTimecodes[sectionName][3],
            currentAudio !== refsList[`laby-${sectionName}-night-ambient`].current,
          );
          playAudio(refsList[`laby-${sectionName}-night-ambient`], currentAudio, setCurrentAudio);
        }}
      >
        <img src="/assets/deco/cheerfulstatue.png" alt="Cheerful Statue" />
      </button>
    </div>
  );
};

const setVideoTime = (videoRef: React.RefObject<HTMLVideoElement> | null, time: number, played: boolean) => {
  if (videoRef?.current && played) {
    videoRef.current.currentTime = time;
    videoRef.current.play();
  }
};

export const LabyMusicRefs: React.FC<{
  video: React.RefObject<HTMLVideoElement> | null;
}> = ({ video }) => {
  const [musicMenu, setMusicMenu] = useState<boolean>(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const refsList = useRef(
    audioLabyRefsNames.reduce(
      (acc, name) => {
        acc[name] = React.createRef<HTMLAudioElement>();
        return acc;
      },
      {} as Record<string, React.RefObject<HTMLAudioElement>>,
    ),
  ).current;

  return (
    <>
      {audioLabyRefsNames.map((name) => (
        <audio key={name} ref={refsList[name]} src={`/assets/music/${name}.ogg`}>
          <track
            kind="captions"
            srcLang="en"
            label={`${name} Captions`}
            default
            src={`data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:00:10.000%0A${name.replaceAll(" ", " ")}`}
          />
        </audio>
      ))}
      <div className={`region-music-player region-labyrinth ${musicMenu ? "" : "disabled"}`}>
        <button className="music-player-icon" onClick={() => setMusicMenu(!musicMenu)}>
          <img src="/assets/misc/audio.png" alt="Open music list" />
        </button>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: {
              autoHide: "move",
              autoHideDelay: 500,
            },
          }}
          defer
        >
          {Object.values(GLSection).map((section) => (
            <MusicSection
              videoRef={video}
              key={section}
              sectionName={section}
              refsList={refsList}
              currentAudio={currentAudio}
              setCurrentAudio={setCurrentAudio}
            />
          ))}
        </OverlayScrollbarsComponent>
      </div>
    </>
  );
};
