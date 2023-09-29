import { useContext } from "react";
import { StepperConterxt } from "../../Contexts/StepperContext";
import { HomeCardData } from "../../HomeSectionCard/HomeCardData";
import Homesectioncard from "../../HomeSectionCard/Homesectioncard";
import Card from "./Card";
export default function Order() {
  const { userData, setUserData } = useContext(StepperConterxt);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      {HomeCardData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
