function WeightCart () {
  //los kg deben ser dinamicos en base a la cantidad de digitos del peso :) 1 -> -m-36 -> para un maximo seguimiento y con el puntero centrado
  // sino solo con el siguiente enfoque deberia funcionar :)
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Leishmaniasis</h1>
      <p>Ingresa el peso del pasiente en kg, recuerda que no puede ser 0 kg</p>
      <div className="flex flex-row items-center justify-center">
        <input className="border-0 border-transparent outline-none w-96 h-60 text-9xl pr-14 text-right" type="text" placeholder="0.0" /><span className="text-gray-400 text-7xl -ml-5">kg</span>
      </div>
      <button>Calcular</button>
    </div>
  );

}

export default WeightCart;
