import { CarType } from "../../Types";
import genFoto from "../../utils/genFoto";

type Props = {
  car: CarType;
};

const Images = ({ car }: Props) => {
  return (
    <div className="flex-1 flex-col gap-3">
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img className="h-full mx-auto object-contain" src={genFoto(car)} alt="" />
      </div>
      <div className="flex gap-3">
        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[146px]"
            src={genFoto(car,"29")}
            alt=""
          />
        </div>
        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[146px]"
            src={genFoto(car,"33")}
            alt=""
          />
        </div>
        <div className="flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[146px]"
            src={genFoto(car,"13")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
