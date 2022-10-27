import React, { useContext } from "react";
import { CriptoContext } from "../CriptoProvider/CriptoProvider";

const Respuesta = () => {
  const {
    respuesta: { CHANGE24HOUR, HIGHDAY, LOWDAY, PRICE, LASTUPDATE, IMAGEURL },
  } = useContext(CriptoContext);
  console.log(IMAGEURL);
  return (
    <article className="mt-12 flex text-white gap-3 ">
      <div className="wrraper_img w-1/3 flex items-center">
        <img src={`https://www.cryptocompare.com${IMAGEURL}`} alt="" />
      </div>
      <div className="data flex flex-col gap-3 font-semibold">
        <h3 className="text-2xl font-bold">El precio es de: {PRICE}</h3>
        <p className="">Precio más alto del día: {HIGHDAY}</p>
        <p className="">Precio más bajo del día: {LOWDAY}</p>
        <p className="">Variación últimas 24 horas: {CHANGE24HOUR}</p>
        <p className="">Última actualización: {LASTUPDATE}</p>
      </div>
    </article>
  );
};

export default Respuesta;
