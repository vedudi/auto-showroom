import { motion } from "framer-motion";
import Button from "./Button";
import { RefObject } from "react";

type Props = {
  catalogRef: RefObject<HTMLDivElement>;
};

const Hero = ({ catalogRef }: Props) => {
  const handleClick = () => {
    catalogRef.current?.scrollIntoView({behavior:"smooth"});
  };
  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">özgürlüğü hisseti yolculuğa başla</h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <Button
          title="arabaları keşfet"
          designs="mt-10"
          handleClick={handleClick}
        />
        <div className="flex justify-center">
          <motion.img
            initial={{ translateX: 200, scale: 0.5 }}
            animate={{ translateX: 0, scale: 1 }}
            transition={{ duration: 1 }}
            src="/hero.png"
            alt="bmw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
