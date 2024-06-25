import { useEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetcCars } from "../utils/fetchCars";
import { CarType } from "../Types";
import Warnings from "../components/Warnings";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../utils/constants";

const Home = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const catalogRef=useRef<HTMLDivElement>(null)
  const [params]=useSearchParams()
  useEffect(() => {
    const paramsObj=Object.fromEntries(params.entries())
    fetcCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);
  return (
    <div className="mb-40">
      <Hero catalogRef={catalogRef}/>
      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">araba kataloğu</h1>
          <p>beğenebileceğin arabaları keşfet</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <Filter options={fuels} name="fuel_type"/>
              <Filter options={years} name="year"/>
            </div>
          </div>
        </div>
        {!cars ? (
          <Warnings>Yükleniyor...</Warnings>
        ) : isError ? (
          <Warnings>üzgünüz bir hata oluştu</Warnings>
        ) : cars.length < 1 ? (
          <Warnings>aradığınız araç bulunamadı</Warnings>
        ) : (
          cars.length>1&&
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
            <ShowMore/>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
