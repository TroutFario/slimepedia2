import React, {useEffect, useRef, useState} from "react";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {
    Region,
    Ranch,
    regionElements,
    regionPedia,
    regionInfos,
    regionsResourcesInfos,
    regionsConnections,
    ranchSpecials,
    ranchInfos,
    ranchConnections,
    ranchPedia,
} from "../data/regions";
import {Tab} from "../components/Tab";
import {foodList} from "../data/food";
import {slimes} from "../data/slimes";
import {LabyMusicRefs, MusicRefs} from "../components/MusicPlayer";
import "../css/MusicPlayer.css";
import "../css/Regions.css";
import {FaAngleDown} from "react-icons/fa6";

const regionTypeMatcher: (region: Region | Ranch) => RegionType | null = (region) => {
    if (Object.values(Region).includes(region as Region)) return RegionType.Region;
    if (Object.values(Ranch).includes(region as Ranch)) return RegionType.Ranch;
    else return null;
};

const RegionConnections: React.FC<{ region: Region | Ranch }> = ({region}) => {
    const connections = (() => {
        if (regionTypeMatcher(region) === RegionType.Region) {
            return regionsConnections[region as Region];
        } else if (regionTypeMatcher(region) === RegionType.Ranch) {
            return ranchConnections[region as Ranch];
        } else return [[], []];
    })();
    return (
        <div className="region-connections">
            <h2 className="region-box-title">Region Connections</h2>
            <div className="region-from">
                {connections[0].length > 0 ? (
                    connections[0].map((regionName) => {
                        const currentType = regionTypeMatcher(regionName);
                        const region = currentType === RegionType.Region ? regionInfos[regionName as Region] : ranchInfos[regionName as Ranch];
                        if (!currentType)
                            return <img
                                key={"from-" + regionName}
                                className="no-hover"
                                src="/assets/misc/none.png"
                                alt="No Region"/>;
                        return (
                            <NavLink to={`/regions/${currentType.toString()}/${regionName}`}
                                     key={"from-" + regionName}>
                                <img
                                    src={`/assets/world/${regionName}.png`}
                                    alt={region[0]}
                                    title={region[0]}
                                />
                            </NavLink>
                        );

                    })
                ) : (
                    <img className="no-hover" src="/assets/misc/none.png" alt="No Region"/>
                )}
            </div>
            <div className="region-connection-separator">
                <FaAngleDown/>
            </div>
            <div>
                <img className="no-hover" src={`/assets/world/${region}.png`} alt="Current Biome"/>
            </div>
            <div className="region-connection-separator">
                <FaAngleDown/>
            </div>
            <div className="region-to">
                {connections[1].length > 0 ? (
                    connections[1].map((regionName) => {
                        if (regionTypeMatcher(regionName) === RegionType.Region)
                            return (
                                <NavLink to={`/regions/region/${regionName}`} key={"from-" + regionName}>
                                    <img
                                        src={`/assets/world/${regionName}.png`}
                                        alt={regionInfos[regionName as Region][0]}
                                        title={regionInfos[regionName as Region][0]}
                                    />
                                </NavLink>
                            );
                        if (regionTypeMatcher(regionName) === RegionType.Ranch)
                            return (
                                <NavLink to={`/regions/ranch/${regionName}`} key={"from-" + regionName}>
                                    <img
                                        src={`/assets/world/${regionName}.png`}
                                        alt={ranchInfos[regionName as Ranch][0]}
                                        title={ranchInfos[regionName as Ranch][0]}
                                    />
                                </NavLink>
                            );
                        return <img key={"from-" + regionName} className="no-hover" src="/assets/misc/none.png"
                                    alt="No Region"/>;
                    })
                ) : (
                    <img className="no-hover" src="/assets/misc/none.png" alt="No Region"/>
                )}
            </div>
        </div>
    );
};

const RegionDescription: React.FC<{ region: Region }> = ({region}) => (
    <div className="region-description" id="region-description">
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
            }}
            className="region-pedia"
            defer
        >
            <h2 className="region-box-title">Slimepedia Entry</h2>
            <p>
                {regionPedia[region].split("\n").map(function (item) {
                    return <span key={item}>{item}</span>;
                })}
            </p>
        </OverlayScrollbarsComponent>
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
            }}
            className="region-slimes"
            defer
        >
            <h2 className="region-box-title">Available Slimes</h2>
            {regionElements[region][0].map((slime, index) => (
                <NavLink to={`/slimes/${slime}`} style={{textDecoration: "none"}} key={`${slime}-${index}`}>
                    <div className="region-element" key={`${slime}-${index}`}>
                        <div className="region-element-content">
                            <img src={`/assets/slimes/${slime}.png`} alt={slimes[slime].name}
                                 title={slimes[slime].name}/>
                        </div>
                    </div>
                </NavLink>
            ))}
        </OverlayScrollbarsComponent>
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
            }}
            className="region-food"
            defer
        >
            <h2 className="region-box-title">Available Food</h2>
            {regionElements[region][1].map((food, index) => (
                <NavLink to={`/food/${food}`} style={{textDecoration: "none"}} key={`${food}-${index}`}>
                    <div className="region-element" key={`${food}-${index}`}>
                        <div className="region-element-content">
                            <img src={`/assets/food/${food}.png`} alt={foodList[food].name}
                                 title={foodList[food].name}/>
                        </div>
                    </div>
                </NavLink>
            ))}
        </OverlayScrollbarsComponent>
        <RegionConnections region={region}/>
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
                overflow: {
                    x: "scroll",
                    y: "hidden",
                },
            }}
            className="region-resources"
            defer
        >
            <h2 className="region-box-title">Available Resources</h2>
            {regionElements[region][2].map((resource) =>
                regionsResourcesInfos[resource][2].length === 0 ? (
                    <div className="region-element-resource" key={resource}>
                        <img
                            src={`/assets/${regionsResourcesInfos[resource][1]}.png`}
                            alt={regionsResourcesInfos[resource][0]}
                            title={regionsResourcesInfos[resource][0]}
                        />
                    </div>
                ) : (
                    <NavLink to={regionsResourcesInfos[resource][2]} style={{textDecoration: "none"}} key={resource}>
                        <div className="region-element-resource resource-hover" key={resource}>
                            <img
                                src={`/assets/${regionsResourcesInfos[resource][1]}.png`}
                                alt={regionsResourcesInfos[resource][0]}
                                title={regionsResourcesInfos[resource][0]}
                            />
                        </div>
                    </NavLink>
                ),
            )}
        </OverlayScrollbarsComponent>
        <div className="region-pods">
            <h2 className="region-box-title">{region === "labyrinth" ? "Ancient Vaults" : "Treasure Pods"}</h2>
            <img src={region === "labyrinth" ? "/assets/misc/door.png" : "/assets/misc/pod.png"} alt="Pods"/>
            <p>{regionInfos[region][3]}</p>
        </div>
    </div>
);

const RanchDescription: React.FC<{ region: Ranch }> = ({region}) => (
    <div className={`ranch-description${region === "conservatory" ? " ranch-conservatory" : ""}`}
         id="ranch-description">
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    autoHide: "move",
                    autoHideDelay: 500,
                },
            }}
            className="ranch-pedia"
            defer
        >
            <h2 className="region-box-title">Slimepedia Entry</h2>
            <p>
                {ranchPedia[region].split("\n").map(function (item) {
                    return <span key={item}>{item}</span>;
                })}
            </p>
        </OverlayScrollbarsComponent>
        <RegionConnections region={region}/>
        <div className="ranch-box ranch-cost">
            <h2 className="region-box-title">Expansion Cost</h2>
            <h3>{ranchInfos[region][5]}</h3>
            <img src="/assets/misc/buck.png" alt="Newbucks"/>
        </div>
        <div className="ranch-box ranch-slots">
            <h2 className="region-box-title">Available Slots</h2>
            <h3>{ranchInfos[region][4]}</h3>
            <img src="/assets/misc/patch.png" alt="Slots"/>
        </div>
        <div className="ranch-box ranch-pods">
            <h2 className="region-box-title">Pod in this Expansion</h2>
            <h3>{ranchInfos[region][3]}</h3>
            <img src="/assets/misc/pod.png" alt="Slots"/>
        </div>
        <div className="ranch-box ranch-special">
            <h2 className="region-box-title">Special Features</h2>
            {ranchSpecials[region].map((feature) => {
                const isDirectFeature = regionsResourcesInfos[feature][2] === "";
                return isDirectFeature ? (
                    <div className="ranch-special-feature" key={feature}>
                        <img src={`/assets/${regionsResourcesInfos[feature][1]}.png`}
                             alt={regionsResourcesInfos[feature][0]}/>
                        <h3>{regionsResourcesInfos[feature][0]}</h3>
                    </div>
                ) : (
                    <NavLink to={regionsResourcesInfos[feature][2]} style={{textDecoration: "none"}} key={feature}>
                        <div className="ranch-special-feature special-hover" key={feature}>
                            <img src={`/assets/${regionsResourcesInfos[feature][1]}.png`}
                                 alt={regionsResourcesInfos[feature][0]}/>
                            <h3>{regionsResourcesInfos[feature][0]}</h3>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    </div>
);

const animationDelay = 300;

enum RegionType {
    Region = "region",
    Ranch = "ranch",
}

const Regions: React.FC = () => {
    const {regionType: regionTypeName, region: regionName} = useParams();
    const regionType = Object.values(RegionType).includes(regionTypeName as RegionType)
        ? (regionTypeName as RegionType)
        : null;
    const region = (() => {
        if (Object.values(Region).includes(regionName as Region)) return regionName as Region;
        return Object.values(Ranch).includes(regionName as Ranch) ? (regionName as Ranch) : null;
    })();
    const [tab, setTab] = useState<RegionType>();

    const mainPlayer = useRef<HTMLVideoElement>(null);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
    const pauseTimers = useRef<Map<string, number>>(new Map());
    const playTokens = useRef<Map<string, number>>(new Map());
    const hoveredRegions = useRef<Set<string>>(new Set());
    const backgroundToken = useRef(0);


    const syncMainVideo = async () => {
        if (!region)
            return;
        const mainVideo = mainPlayer.current;
        if (!mainVideo) return;

        const token = ++backgroundToken.current;
        mainVideo.muted = true;
        (mainVideo as HTMLVideoElement & { playsInline?: boolean }).playsInline = true;

        const playable = await waitForPlayable(mainVideo);
        if (!playable || token !== backgroundToken.current) return;

        const selectedVideo = videoRefs.current[region];
        if (selectedVideo) {
            mainVideo.currentTime = selectedVideo.currentTime;
        }

        try {
            await mainVideo.play();
        } catch (error) {
            if (token === backgroundToken.current) {
                console.error("Error loading main video:", error);
            }
        }
    };

    useEffect(() => {
        if (regionType !== null) setTab(regionType);
    }, [regionType]);

    useEffect(() => {
        return () => {
            pauseTimers.current.forEach((timer) => globalThis.clearTimeout(timer));
            pauseTimers.current.clear();
        };
    }, []);

    useEffect(() => {
        void syncMainVideo();
    }, [region]);

    if (regionType === null) {
        if (Object.values(Region).includes(region as Region))
            return <Navigate to={`/regions/region/${regionName}`} replace/>;
        if (Object.values(Ranch).includes(region as Ranch)) return <Navigate to={`/regions/ranch/${regionName}`}
                                                                             replace/>;
        return <Navigate to="/regions/region/fields" replace/>;
    }
    if (region === null) return <Navigate to="/regions/region/fields" replace/>;
    if (regionTypeName === RegionType.Region && !Object.values(Region).includes(region as Region))
        return <Navigate to={`/regions/ranch/${region}`} replace/>;
    if (regionTypeName === RegionType.Ranch && !Object.values(Ranch).includes(region as Ranch))
        return <Navigate to={`/regions/region/${region}`} replace/>;

    const zoneList = (() => {
        if (regionType === RegionType.Region) {
            return regionInfos[region as Region];
        } else if (regionType === RegionType.Ranch) {
            return ranchInfos[region as Ranch];
        }
        return [[], [], []];
    })();

    const zoneName = zoneList[0] as string;
    const zoneCode = zoneList[1];
    const zoneDescription = zoneList[2];

    const clearPauseTimer = (regionKey: string) => {
        const timer = pauseTimers.current.get(regionKey);
        if (timer !== undefined) {
            globalThis.clearTimeout(timer);
            pauseTimers.current.delete(regionKey);
        }
    };

    const nextPlayToken = (regionKey: string) => {
        const token = (playTokens.current.get(regionKey) ?? 0) + 1;
        playTokens.current.set(regionKey, token);
        return token;
    };

    const isPlayTokenCurrent = (regionKey: string, token: number) => playTokens.current.get(regionKey) === token;

    const waitForPlayable = async (video: HTMLVideoElement, timeoutMs = 1200): Promise<boolean> => {
        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) return true;

        return await new Promise<boolean>((resolve) => {
            let done = false;
            const finish = (ok: boolean) => {
                if (done) return;
                done = true;
                video.removeEventListener("canplay", onReady);
                video.removeEventListener("loadeddata", onReady);
                globalThis.clearTimeout(timeoutId);
                resolve(ok);
            };
            const onReady = () => finish(true);
            const timeoutId = globalThis.setTimeout(() => finish(false), timeoutMs);

            video.addEventListener("canplay", onReady, {once: true});
            video.addEventListener("loadeddata", onReady, {once: true});
            video.load();
        });
    };

    const playVideoSafely = async (video: HTMLVideoElement, regionKey: string, token: number) => {
        video.muted = true;
        (video as HTMLVideoElement & { playsInline?: boolean }).playsInline = true;

        const playable = await waitForPlayable(video);
        if (!playable || !isPlayTokenCurrent(regionKey, token)) return;

        try {
            await video.play();
        } catch (error) {
            if (isPlayTokenCurrent(regionKey, token)) {
                console.error("Error playing video:", error);
            }
        }
    };

    const startRegionVideo = (regionKey: string) => {
        hoveredRegions.current.add(regionKey);
        clearPauseTimer(regionKey);

        const video = videoRefs.current[regionKey];
        if (!video) return;

        const token = nextPlayToken(regionKey);
        void playVideoSafely(video, regionKey, token);
    };

    const stopRegionVideoWithDelay = (regionKey: string) => {
        hoveredRegions.current.delete(regionKey);
        clearPauseTimer(regionKey);

        const timer = globalThis.setTimeout(() => {
            if (hoveredRegions.current.has(regionKey) || regionKey === region) return;

            const video = videoRefs.current[regionKey];
            if (!video) return;

            try {
                video.pause();
            } catch (error) {
                console.error("Error pausing video:", error);
            }
        }, animationDelay);

        pauseTimers.current.set(regionKey, timer);
    };

    const backgroundRegion = {
        backgroundImage: `url("/assets/wait/${region}.jpg")})`,
    };

    const regionList = tab === RegionType.Region ? Object.values(Region) : Object.values(Ranch);
    document.title =
        (regionType === RegionType.Region ? regionInfos[region as Region][0] : ranchInfos[region as Ranch][0]) +
        " - Slimepedia 2";

    return (
        <div>
            <div className="region-tab-list">
                <div className="regions-tabs">
                    <Tab
                        title="World Regions"
                        icon="misc/world"
                        selected={tab === "region"}
                        action={() => setTab(RegionType.Region)}
                    />
                    <Tab title="Ranch" icon="misc/patch" selected={tab === "ranch"}
                         action={() => setTab(RegionType.Ranch)}/>
                </div>
                <OverlayScrollbarsComponent
                    options={{
                        scrollbars: {
                            autoHide: "move",
                            autoHideDelay: 500,
                        },
                    }}
                    className={"regions-list" + (tab === "region" ? " regions-list-regions" : " regions-list-ranch")}
                    defer
                >
                    {regionList.map((regionItem) => (
                        <NavLink to={`/regions/${tab}/${regionItem}`} style={{textDecoration: "none"}} key={regionItem}>
                            <div
                                className={"region-tab" + (regionItem === region ? " region-selected" : "")}
                                key={
                                    tab === RegionType.Region ? regionInfos[regionItem as Region][0] : ranchInfos[regionItem as Ranch][0]
                                }
                            >
                                <video
                                    ref={(el) => (videoRefs.current[regionItem] = el)}
                                    className="region-video"
                                    src={`/assets/videos/${tab === RegionType.Region ? regionInfos[regionItem as Region][1] : ranchInfos[regionItem as Ranch][1]}.light.webm`}
                                    onMouseEnter={() => startRegionVideo(regionItem)}
                                    onMouseLeave={() => {
                                        if (regionItem !== region) stopRegionVideoWithDelay(regionItem);
                                    }}
                                    autoPlay={regionItem === region}
                                    disablePictureInPicture
                                    loop
                                    muted
                                >
                                    {tab === RegionType.Region
                                        ? regionInfos[regionItem as Region][0]
                                        : ranchInfos[regionItem as Ranch][0]}{" "}
                                    Video
                                </video>
                                <img
                                    className="region-icon"
                                    src={`/assets/world/${regionItem}.png`}
                                    alt={
                                        tab === RegionType.Region
                                            ? regionInfos[regionItem as Region][0]
                                            : ranchInfos[regionItem as Ranch][0]
                                    }
                                />
                                <h2 className="region-name">
                                    {tab === RegionType.Region
                                        ? regionInfos[regionItem as Region][0]
                                        : ranchInfos[regionItem as Ranch][0]}
                                </h2>
                            </div>
                        </NavLink>
                    ))}
                </OverlayScrollbarsComponent>
            </div>
            <div className="region-presentation">
                <div className="region-background" style={backgroundRegion}>
                    <video
                        ref={mainPlayer}
                        className="region-background-video"
                        src={`/assets/videos/${zoneCode}.webm`}
                        disablePictureInPicture
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => {
                            void syncMainVideo();
                        }}
                    >
                        Video Background
                    </video>
                </div>
                <div className="region-container">
                    <div className="region-main-page-frame">
                        {region === "labyrinth" ? (
                            <LabyMusicRefs video={mainPlayer}/>
                        ) : (
                            <MusicRefs region={region} videoRef={mainPlayer}/>
                        )}
                        <div className="region-main-page">
                            <img src={`/assets/world/${region}.png`} alt={zoneName}/>
                            <h1>{zoneName}</h1>
                            <h2>{zoneDescription}</h2>
                        </div>
                        <a className="arrow-down" href={`#${regionType}-description`}>
                            <FaAngleDown/>
                        </a>
                    </div>
                    {regionType === RegionType.Region && <RegionDescription region={region as Region}/>}
                    {regionType === RegionType.Ranch && <RanchDescription region={region as Ranch}/>}
                </div>
            </div>
        </div>
    );
};

export default Regions;
