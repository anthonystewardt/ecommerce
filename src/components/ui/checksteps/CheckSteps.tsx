
interface Props {
  step2: boolean;
  step3: boolean;
}


const CheckSteps = ({ step2, step3 }: Props) => {
  return (
    <div className="flex items-center gap-10 mt-5 mb-10">
      <div className="flex items-center gap-2">
        <span className="text-2xl bg-slate-950  w-[40px] h-[40px] flex items-center justify-center font-bold text-white rounded-full">
          1
        </span>
        <span className="text-lg text-zinc-700">Carro de la compra</span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`text-2xl   w-[40px] h-[40px] flex items-center justify-center font-bold text-white rounded-full ${
            step2 ? "bg-slate-950 " : "bg-slate-300"
          } `}
        >
          2
        </span>
        <span className="text-lg text-zinc-700">Detalles de pago</span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`text-2xl   w-[40px] h-[40px] flex items-center justify-center font-bold text-white rounded-full ${
            step3 ? "bg-slate-950 " : "bg-slate-300"
          } `}
        >
          3
        </span>
        <span className="text-lg text-zinc-700">Orden completada</span>
      </div>
    </div>
  );
}

export default CheckSteps;
