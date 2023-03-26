import React from "react";

function Modal({ character, handleCloseModal }) {
  return (
    <div>
      <div className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0">
        <div className="bg-gray-800 rounded-xl shadow-2xl sm:w-11/12 mx-10">
          <div className="px-6 py-8 mx-auto">
            <div className="lg:mx-6 lg:flex lg:items-center ">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/4 rounded-xl sm:text-center"
                src={character.card_images[0].image_url}
                style={{ width: "15rem" }}
              />
              <div className="mt-6 lg:mt-0 lg:mx-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Tipo:
                  </p>
                  <p className="text font-semibold text-white">{character.type}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Tipo de cuadro:
                  </p>
                  <p className="text font-semibold text-white">{character.frameType}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Descripcion:
                  </p>
                  <p className="text font-semibold text-white">{character.desc}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Ataque:
                  </p>
                  <p className="text font-semibold text-white">{character.atk}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Definitivo:
                  </p>
                  <p className="text font-semibold text-white">{character.def}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Arquetipo:
                  </p>
                  <p className="text font-semibold text-white">{character.archetype}</p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Nivel:
                  </p>
                  <p className="text font-semibold text-white">
                    {character.level}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Raza:
                  </p>
                  <p className="text font-semibold text-white">
                    {character.race}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Atributo:
                  </p>
                  <p className="text font-semibold text-white">
                    {character.attribute}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Juego de cartas:
                  </p>
                  <p className="text font-semibold text-white">
                    {character.card_sets[0].set_name}
                  </p>
                </div>
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-white text-lg font-semibold dark:text-white">
                    Precio:
                    </p>
                    <p className="text font-semibold text-white">{character.card_prices[0].cardmarket_price}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Modal;