function WeightCart () {
  //los kg deben ser dinamicos en base a la cantidad de digitos del peso :) 1 -> -m-36 -> para un maximo seguimiento y con el puntero centrado
  // sino solo con el siguiente enfoque deberia funcionar :)
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex text-center items-center justify-center h-8 w-36 bg-sky-400 rounded-full relative -mb-4">Resultados</div>
      <div className="flex flex-col items-center justify-center h-full w-96 bg-purple-400 p-10">
        <h1 className="flex flex-col items-center justify-center w-64 h-9 text-green-900 font-extrabold m-">Leishmaniasis</h1>
        <p>Ingresa el peso del pasiente en kg, recuerda que no puede ser 0 kg</p>
        <div className="flex flex-row items-center justify-center">
          <input className="border-0 border-transparent outline-none w-64 h-60 text-8xl pr-14 text-center" type="text" placeholder="0.0" />
          <span className="text-gray-400 text-6xl -ml-12">kg</span>
        </div>
        <button>Calcular</button>
      </div>
    </div>
  );

}

export default WeightCart;
