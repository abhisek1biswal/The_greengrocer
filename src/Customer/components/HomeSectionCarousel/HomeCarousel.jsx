import React, { useState } from "react";
import { HomeCardData } from "../HomeSectionCard/HomeCardData";
import Homesectioncard from "../HomeSectionCard/Homesectioncard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Data } from "../Data/Data";

export default function HomeCarousel({name,prod}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data,setData]=useState(prod);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
    1400: { items: 5 },
  };
  const slideprev = () => setActiveIndex(activeIndex - 1);
  const slidenext = () => setActiveIndex(activeIndex + 1);
  const syncactiveindex = ({ item }) => setActiveIndex(item);

  const items = data.map((item) => 
    <Homesectioncard key={item.id} item={item}/>
  );
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-grey-800 py-5">{name}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncactiveindex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidenext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex!==0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideprev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
}
