import { useState } from "react";
import { CarType } from "../Types";
import Button from "./Button";
import Modal from "./Modal/Modal";
import genFoto from "../utils/genFoto";

interface Props {
  car: CarType;
}

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(genFoto(car))
  return (
    <div className="car-card group">
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <div className="flex mt-6 text-[32px]">
        <span className="font-semibold text-[19px]">$</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="font-semibold text-[19px]">/gün</span>
      </div>
      <div className="relative w-full h-40 my-3">
        <img className="w-full h-full object-contain" src={genFoto(car)} alt="" />
        <div className="w-full">
          <div className="flex w-full justify-between group-hover:hidden">
            <div className="flex-center flex-col">
              <img width={25} src="/steering-wheel.svg" alt="" />
              <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
            </div>
            <div className="flex-center flex-col">
              <img width={25} src="/tire.svg" alt="" />
              <p>{car.drive}</p>
            </div>
            <div className="flex-center flex-col">
              <img width={25} src="/gas.svg" alt="" />
              <p>{car.fuel_type}</p>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:flex">
          <Button
            handleClick={() => setIsOpen(true)}
            title="daha fazla"
            designs="w-full py-[16px]"
            icon="right-arrow.svg"
          />
        </div>
      </div>
      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Card;
