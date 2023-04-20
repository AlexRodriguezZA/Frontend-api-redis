import React from "react";
import star from "../assets/star.svg";
import reservarCapitulo from "../../utils/ReservarCapitulo";
import PagarCapitulo from "../../utils/PagarCapitulo";

const Card = ({ data_capitulo }) => {


  const handleReservaCap = async () => {
    const capitulo = data_capitulo.capitulo;
    const numero = parseInt(capitulo.match(/\d+/)[0]);

    await reservarCapitulo(numero);
    window.location.reload();
  };

  const handlePagarCap = async () => {
    const capitulo = data_capitulo.capitulo;
    const numero = parseInt(capitulo.match(/\d+/)[0]);

    await PagarCapitulo(numero);
    window.location.reload();
  };

  return (
    <div class="rounded overflow-hidden shadow-lg bg-stone-200 w-64 hover:cursor-pointer ">
      <img
        class="w-full"
        src={`http://localhost:3000/Imagenes/${data_capitulo.capitulo}.webp`}
      />
      <div class="px-6 py-4 flex flex-col">
        <div class="font-bold text-xl mb-2">{data_capitulo.nombre}</div>
        <div className="flex justify-center aling-center">
          <p className="text-gray-500 text-base mr-2">4.5</p>
          <img width={15} src={star} alt="" />
        </div>

        <p class="text-gray-700 text-base mt-4">{data_capitulo.capitulo}</p>
      </div>
      {data_capitulo.estado === "reservado" && (
        <p className="text-blue-600">Reservado</p>
      )}
      <div class="px-6 pt-4 pb-2 ">
        {data_capitulo.estado === "alquilado" && (
          <button
            onClick={handlePagarCap}
            className="bg-red-500
              hover:bg-green-700
               text-white 
               font-bold py-2 px-4 
               w-48 rounded"
          >
            Alquilado 24hrs
          </button>
        )}
        {data_capitulo.estado === "reservado" && (
          <button
            onClick={handlePagarCap}
            className="bg-green-500
              hover:bg-green-700
               text-white 
               font-bold py-2 px-4 
               w-48 rounded"
          >
            Pagar
          </button>
        )}

        {data_capitulo.estado === "disponible" && (
          <button
            onClick={handleReservaCap}
            className="bg-blue-500
                             hover:bg-blue-700
                              text-white 
                              font-bold py-2 px-4 
                              w-48 rounded"
          >
            ${data_capitulo.precio}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
