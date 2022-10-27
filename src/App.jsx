import imgCripto from "./assets/img/imagen-criptos.png";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App flex w-1/2 mx-auto mt-24 gap-5">
      <div className="wrapper w-1/2 mx-auto ">
        <img className="h-full w-full" src={imgCripto} alt="" />
      </div>
      <Formulario />
    </div>
  );
}

export default App;
