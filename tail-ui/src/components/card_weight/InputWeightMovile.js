function InputWeightMobile () {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center h-full w-96 bg-white p-10 text-center">
        <h1 className="w-64 h-9 text-indigo-700 font-medium text-3xl mb-2">Leishmaniasis</h1>
        <p className="font-normal text-sm text-[#525C7A]">Ingresa el peso del pasiente en kg, recuerda que no puede ser 0 kg</p>
        <div className="flex flex-row items-center justify-center">
          <input className="border-0 border-transparent outline-none w-64 h-[160px] text-9xl pr-14 text-center" type="text" placeholder="0.0" />
          <span className="text-gray-400 text-6xl -ml-14">kg</span>
        </div>
        <p className="mb-10 bg-[#FFD9D9] text-[#DC2626] text-sm font-normal">El peso  no puede ser menor a 0kg reingresa un dato valido</p>
        <button>Calcular</button>
      </div>
    </div>
  )
}

export default InputWeightMobile;
