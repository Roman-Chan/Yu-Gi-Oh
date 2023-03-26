import React from "react";

function Modal({ character, handleCloseModal }) {
  return (
    <div>
      <div className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
        <div className="bg-gray-800 rounded-xl shadow-2xl  sm:w-11/12 mx-10">
          <div className=" px-6 py-8 mx-auto">
            <div className="lg:mx-6 lg:flex lg:items-center ">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/4 rounded-xl sm:text-center"
                src={character.card_images[0].image_url}
                style={{ width: "15rem" }}
              />
              <div className="mt-6 lg:mt-0 lg:mx-6 ">
                <p className="text-white text-2xl font-semibold dark:text-white md:text-3xl">
                  Nombre: {character.name}
                </p>
                <p className="text font-semibold mt-4 text-white ">
                  Tipo: {character.type}
                </p>
                <p className="text font-semibold mt-4 text-white ">
                  Raza: {character.race}
                </p>
                <p className="text font-semibold mt-4 text-white ">
                  Descripción: {character.desc}
                </p>
                <p className="text font-semibold mt-4 text-white ">
                  Definitivo: {character.race}
                </p>
                <p className="text font-semibold mt-4 text-white ">
                  Arquetipo: {character.archetype}
                </p>
                <p className="text font-semibold mt-4 text-white">
                  Juego de cartas: {character.card_sets[0].set_name}
                </p>
                <p className="text font-semibold mt-4 text-white">
                  Precio: {character.card_prices[0].cardmarket_price}
                </p>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-sm bg-blue-700 text-white rounded-xl border transition-colors duration-150 ease-linear border-blue-600  focus:outline-none focus:ring-0 font-bold hover:bg-blue-500 focus:bg-indigo-50 focus:text-indigo"
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
