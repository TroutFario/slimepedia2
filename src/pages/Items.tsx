import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { NavButton } from "../components/NavButton";
import { Biomes, MixedRegion } from "../components/Biomes";
import { Tab } from "../components/Tab";
import { Resource, resourceList, resourcePedia } from "../data/resources";
import { Toy, toyList } from "../data/toys";
import { Slime, slimesList } from "../data/slimes";
import "../css/Pedia.css";
import PediaInfo, { PediaBoxLayout } from "../components/PediaInfo";
import { LittleBoxProps } from "../components/shared/LittleBox";

enum ItemType {
  Resource = "resources",
  Toy = "toys",
}

const slimePerToy: (toy: Toy) => Slime | null = (toy) => {
  if (toy === null) return null;
  for (const [slime, slimeInfos] of Object.entries(slimesList)) {
    if (slimeInfos[4] === toy) return slime as Slime;
  }
  return null;
};

type Item = Resource | Toy;

const ItemList: React.FC<{
  tab: ItemType;
  item: Item | null;
  setTab: (item: ItemType) => void;
}> = ({ tab, item, setTab }) => (
  <div className="list-container">
    <div className="items-tabs">
      <Tab
        title="Resources"
        icon="misc/res"
        selected={tab === ItemType.Resource}
        action={() => setTab(ItemType.Resource)}
      />
      <Tab
        title="Toys"
        icon="misc/toys"
        selected={tab === ItemType.Toy}
        action={() => setTab(ItemType.Toy)}
      />
    </div>
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: "move",
          autoHideDelay: 500,
        },
      }}
      className={
        "list-food " +
        (tab === Object.values(ItemType)[0]
          ? "list-food-first"
          : "list-food-last")
      }
      defer
    >
      {tab === ItemType.Toy
        ? Object.values(Toy).map((toy) => (
            <NavLink
              key={toy + "-item"}
              to={"/items/toys/" + toy}
              style={{ textDecoration: "none" }}
            >
              <NavButton
                icon={"toys/" + toy}
                name={toyList[toy][0]}
                size={1.25}
                selected={toy === item}
              />
            </NavLink>
          ))
        : Object.values(Resource).map((resource) => (
            <NavLink
              key={resource + "-item"}
              to={`/items/${tab}/${resource}`}
              style={{ textDecoration: "none" }}
            >
              <NavButton
                icon={tab + "/" + resource}
                name={resourceList[resource][0]}
                size={1.25}
                selected={resource === item}
              />
            </NavLink>
          ))}
    </OverlayScrollbarsComponent>
  </div>
);

interface ItemInfosProps {
  item: Item | null;
  category: ItemType;
}

const ItemInfos: React.FC<ItemInfosProps> = ({ item, category }) => {
  let title = "No resource selected";
  let subtitle = "Select a resource to get its information";
  let icon: string | null = null;
  let biomeList: MixedRegion[] = [];
  let layout = PediaBoxLayout.OneByOne;
  const littleBoxList: LittleBoxProps[] = [];
  littleBoxList.push({
    image: "/assets/misc/pediatut.png",
    alt: "Pedia Informations Icon",
    title: null,
    subtitle: null,
    link: null,
  });
  if (
    category === ItemType.Resource &&
    Object.values(Resource).includes(item as Resource)
  ) {
    icon = `/assets/resources/${item}.png`;
    title = resourceList[item as Resource][0];
    subtitle = resourceList[item as Resource][1];
    biomeList = resourceList[item as Resource][2];
    littleBoxList.pop();
    littleBoxList.push({
      image: "/assets/misc/pediatut.png",
      alt: "Pedia Informations Icon",
      subtitle: resourcePedia[item as Resource],
    });
  } else if (
    category === ItemType.Toy &&
    Object.values(Toy).includes(item as Toy)
  ) {
    littleBoxList.pop();
    littleBoxList.push(
      {
        image: "/assets/misc/pediatut.png",
        alt: "Pedia Informations Icon",
        subtitle: toyList[item as Toy][1],
      },
      {
        image: `/assets/misc/buck.png`,
        alt: "Newbuck Icon",
        title: "Price",
        subtitle: "500",
        link: null,
      }
    );
    const slime = slimePerToy(item as Toy);
    if (slime === null) {
      littleBoxList.push({
        image: "/assets/misc/none.png",
        alt: "None",
        title: "Favorite of",
        subtitle: "Nobody",
        link: null,
      });
    } else {
      littleBoxList.push({
        image: `/assets/slimes/${slime}.png`,
        alt: slimesList[slime][0],
        title: "Favorite of",
        subtitle: slimesList[slime][0],
        link: `/slimes/${slime}`,
      });
    }
    icon = `/assets/toys/${item}.png`;
    title = toyList[item as Toy][0];
    subtitle = "Playtime gets the wiggles out.";
    biomeList = ["pm"];
    layout = PediaBoxLayout.OneThenTwo;
  }
  return (
    <div className={"box-presentation"}>
      <PediaInfo
        layout={layout}
        title={title}
        subtitle={subtitle}
        icon={icon}
        littleBoxList={littleBoxList}
        BiomeComponent={<Biomes spawnList={biomeList} />}
      />
    </div>
  );
};

export const Items = () => {
  const { tab: tabName, item: itemName } = useParams();
  const category = (() => {
    if (Object.values(Resource).includes(itemName as Resource))
      return ItemType.Resource;
    if (Object.values(Toy).includes(itemName as Toy)) return ItemType.Toy;
    return Object.values(ItemType).includes(tabName as ItemType)
      ? (tabName as ItemType)
      : null;
  })();
  const item: Item | null = (() => {
    if (Object.values(Resource).includes(itemName as Resource))
      return itemName as Resource;
    return Object.values(Toy).includes(itemName as Toy)
      ? (itemName as Toy)
      : null;
  })();
  const [tab, setTab] = useState<ItemType>(category ?? ItemType.Resource);

  useEffect(() => {
    if (category !== null) setTab(category);
  }, [category]);

  if (category === null) {
    if (Object.values(Resource).includes(tabName as Resource))
      return <Navigate to={`/items/resources/${tabName}`} replace />;
    if (Object.values(Toy).includes(tabName as Toy))
      return <Navigate to={`/items/toys/${tabName}`} replace />;
    return <Navigate to="/items/resources" replace />;
  }
  if (item === null) {
    return (
      <div>
        <ItemList tab={tab} item={null} setTab={setTab} />
        <ItemInfos item={item} category={ItemType.Resource} />
      </div>
    );
  }
  if (
    tabName === ItemType.Resource &&
    !Object.values(Resource).includes(item as Resource)
  )
    return <Navigate to={`/items/toys/${item}`} replace />;
  if (tabName === ItemType.Toy && !Object.values(Toy).includes(item as Toy))
    return <Navigate to={`/items/resources/${item}`} replace />;

  const title = (() => {
    if (item !== null)
      return category === ItemType.Resource
        ? resourceList[item as Resource][0].toString()
        : toyList[item as Toy][0].toString();
    if (category !== null) return category.toString();
    return "Items";
  })();
  document.title = title + " - Slimepedia 2";

  return (
    <div>
      <ItemList tab={tab} item={item} setTab={setTab} />
      <ItemInfos item={item} category={category} />
    </div>
  );
};

export default Items;
