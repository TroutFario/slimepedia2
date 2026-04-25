import React, {useState, useEffect} from "react";
import {Slime, SlimePediaProps, slimes, specialSlimes} from "../data/slimes";
import NavButton from "../components/NavButton";
import {Biomes} from "../components/Biomes";
import {foodList, dietBlacklist, dietList} from "../data/food";
import {toyList} from "../data/toys";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {FaAngleDown} from "react-icons/fa6";
import "../css/Pedia.css";
import {Region, regionElements} from "../data/regions";
import {Weather, weatherList} from "../data/weather";
import {LittleBoxProps} from "../components/shared/LittleBox";
import PediaInfo from "../components/PediaInfo";
import {PediaBoxLayout} from "../data/enums";

const nonePath = "/assets/misc/none.png";
const nonPlortSlimes = new Set([null, Slime.Lucky, Slime.Tarr]);

const getSlimeSpawnList = (slime: Slime | null): (Region | Weather)[] => {
    if (slime === null) return [];
    if (specialSlimes.includes(slime))
        return [Region.Fields, Region.Strand, Region.Valley, Region.Bluffs, Region.Labyrinth];
    const spawnList: (Region | Weather)[] = [];
    for (const [region, regionElement] of Object.entries(regionElements))
        if (regionElement[0].includes(slime)) spawnList.push(region as Region);
    for (const [weather, weatherElement] of Object.entries(weatherList))
        if (weatherElement[4].includes(slime)) spawnList.push(weather as Weather);
    return spawnList;
};

const defaultSlimeDetails = () => (
    <PediaInfo
        layout={PediaBoxLayout.TwoByTwo}
        title="Select a slime"
        subtitle="Click on a slime on the list to get their information"
        icon="/assets/misc/empty.png"
        plortIcon={undefined}
        littleBoxList={[
            {title: "Diet"},
            {title: "Favorite Food"},
            {title: "Largoable"},
            {title: "Favorite Toy"},
        ]}
        BiomeComponent={<Biomes/>}
    />
);

const SlimeDetails: React.FC<{selectedSlime: Slime | null}> = ({selectedSlime}) => {
    const [radiantSlime, setRadiantSlime] = useState<boolean>(false);

    const slime = selectedSlime && slimes[selectedSlime];
    useEffect(() => {
        if (!slime?.radiantable) {
            setRadiantSlime(false);
        }
    }, [selectedSlime]);

    if (!slime)
        return defaultSlimeDetails();


    const littleBoxList: LittleBoxProps[] = [
        {
            image: slime.diet ? `/assets/food/${slime.diet}.png` : nonePath,
            alt: slime.diet ? slime.diet : nonePath,
            title: "Diet",
            subtitle: slime.diet ? dietList[slime.diet].plural : "None",
            link: slime.diet && !dietBlacklist.slice(1).includes(slime.diet) ? `/food/${slime.diet}` : null,
        },
        {
            image: slime.food ? `/assets/food/${slime.food}.png` : nonePath,
            alt: slime.food ? foodList[slime.food].name : "None",
            title: "Favorite Food",
            subtitle: slime.food ? foodList[slime.food].name : "None",
            link: slime.food && `/food/${slime.food}`,
        },
        {
            image: `/assets/misc/${slime.largoable ? "largo" : "none"}.png`,
            alt: slime.largoable ? "Largo-able" : "Non largo-able",
            title: "Largo-able",
            subtitle: slime.largoable ? "Yes" : "No",
        },
        {
            image: slime.toy ? `/assets/toys/${slime.toy}.png` : nonePath,
            alt: slime.toy ? toyList[slime.toy].name : "None",
            title: "Favorite Toy",
            subtitle: slime.toy ? toyList[slime.toy].name : "None",
            link: slime.toy && `/items/toys/${slime.toy}`,
        },
    ];

    return (
        <PediaInfo
            layout={PediaBoxLayout.TwoByTwo}
            title={slime.name}
            subtitle={slime.desc}
            icon={`/assets/${radiantSlime ? "radiant" : "slimes"}/${selectedSlime}.png`}
            plortIcon={nonPlortSlimes.has(selectedSlime) ? undefined : selectedSlime}
            botLeftBtn={
                slime?.radiantable && (
                    <button onClick={() => setRadiantSlime(!radiantSlime)} className="btn-radiant">
                        <img src="/assets/misc/radiant.png" alt="Switch to Radiant Slime"/>
                    </button>
                )
            }
            radiant={radiantSlime}
            littleBoxList={littleBoxList}
            BiomeComponent={<Biomes spawnList={getSlimeSpawnList(selectedSlime)}/>}
        />
    );
};

interface SlimeDescriptionProps {
    slime: Slime | null;
    topBtn: boolean;
}

const SlimeDescription: React.FC<SlimeDescriptionProps> = ({slime, topBtn}) => {
    const slimepedia: SlimePediaProps = slime ? slimes[slime].pedia : {slimeology: "", risks: "", plortonomics: ""};
    return (
        <div className={"desc " + (topBtn ? "shown-desc" : "hidden-desc")}>
            <div className="desc-title">
                <img src="/assets/misc/pediaslime.png" alt="Slimeology"/>
                <h3>Slimeology</h3>
            </div>
            <p>{slimepedia.slimeology}</p>
            <div className="desc-title">
                <img src="/assets/misc/pediarisks.png" alt="Rancher Risks"/>
                <h3>Rancher Risks</h3>
            </div>
            <p>{slimepedia.risks}</p>
            <div className="desc-title">
                <img src="/assets/misc/pediaplort.png" alt="Plortonomics"/>
                <h3>Plortonomics</h3>
            </div>
            <p>{slimepedia?.plortonomics}</p>
        </div>
    )
};

const Slimes = () => {
    const {slime: slimeName} = useParams();

    const slime = Object.values(Slime).includes(slimeName as Slime) ? (slimeName as Slime) : null;
    const [topBtn, setTopBtn] = useState(false);
    useEffect(() => setTopBtn(false), [slime]);
    if (slime === null && slimeName !== undefined) {
        return <Navigate to="/slimes" replace/>;
    }

    document.title = (slime ? slimes[slime].name : "Slimes") + " - Slimepedia 2";

    return (
        <div>
            <OverlayScrollbarsComponent
                className="list-slime"
                options={{
                    scrollbars: {
                        autoHide: "move",
                        autoHideDelay: 500,
                    },
                }}
                defer
            >
                {Object.values(Slime).map((slimeName) => (
                    <NavLink to={`/slimes/${slimeName}`} style={{textDecoration: "none"}} key={slimeName}>
                        <NavButton
                            key={slimeName}
                            icon={`slimes/${slimeName}`}
                            size={1.25}
                            name={slimes[slimeName].name}
                            wiggle={false}
                            selected={slimeName === slime}
                        />
                    </NavLink>
                ))}
            </OverlayScrollbarsComponent>
            <div className={"box-presentation" + (topBtn ? " hidden-infos" : "")}>
                <SlimeDetails selectedSlime={slime}/>
                <button
                    className={"arrow-btn " + (topBtn ? "top-btn" : "bot-btn")}
                    onClick={() => setTopBtn(!topBtn)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setTopBtn(!topBtn);
                        }
                    }}
                    tabIndex={0}
                >
                    <FaAngleDown/>
                </button>
                <SlimeDescription slime={slime} topBtn={topBtn}/>
            </div>
        </div>
    );
};

export default Slimes;
