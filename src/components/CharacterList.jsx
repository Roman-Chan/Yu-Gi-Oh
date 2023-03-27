import React, { useState } from "react";
import Modal from "./Modal";

function CharacterList({ data }) {
  const [modal, setModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
    setModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
    setModal(false);
  };

  return (
    <div className="pt-28 px-8 mx-auto max-w-8xl py-12">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((character, index) => (
          <div className="" key={index}>
            <div className="my-2 rounded shadow-lg shadow-gray-200 dark:shadow-gray-400 bg-white dark:bg-blue-900   ">
              <a onClick={() => handleOpenModal(character)}>
                <img
                  src={character.card_images[0].image_url}
                  className="rounded-t h-auto w-full object-cover"
                  alt={character.name}
                />
              </a>
            </div>
          </div>
        ))}
        {selectedCharacter && (
          <Modal
            character={selectedCharacter}
            setModal={setModal}
            openModal={modal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default CharacterList;
