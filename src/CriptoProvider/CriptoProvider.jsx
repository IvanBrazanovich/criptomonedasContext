import React, { createContext, useContext, useEffect, useState } from "react";

const CriptoContext = createContext();

const CriptoProvider = ({ children }) => {
  //States
  const [criptomonedas, setCriptomonedas] = useState([]);
  const [respuesta, setRespuesta] = useState({});
  const [spinner, setSpinner] = useState(false);
  //Fetch Criptomonedas
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const resFirst = await fetch(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        );
        const resSec = await resFirst.json();
        if (!(resSec.Message = "Success")) throw new Error("Salió mal");

        //Transform data
        const criptoArray = resSec.Data.map((cripto) => {
          const {
            CoinInfo: { Name, FullName, Id },
          } = cripto;

          return {
            Name,
            FullName,
            Id,
          };
        });

        setCriptomonedas(criptoArray);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, []);

  const submitCotizar = async (moneda, criptomoneda) => {
    setSpinner(true);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const response = await fetch(url);
    const infoArr = await response.json();
    const {
      CHANGEDAY,
      CHANGE24HOUR,
      HIGHDAY,
      LOWDAY,
      PRICE,
      LASTUPDATE,
      IMAGEURL,
    } = infoArr.DISPLAY[criptomoneda][moneda];

    setRespuesta({
      CHANGEDAY,
      CHANGE24HOUR,
      HIGHDAY,
      LOWDAY,
      PRICE,
      LASTUPDATE,
      IMAGEURL,
    });

    setSpinner(false);
  };

  return (
    <CriptoContext.Provider
      value={{ criptomonedas, submitCotizar, respuesta, spinner, setRespuesta }}
    >
      {children}
    </CriptoContext.Provider>
  );
};

export default CriptoProvider;

export { CriptoContext };
