"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/app/ui/dashboard/CardClient";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

const MAX_CHARACTERS = 826;

export default function RickAndMortyPage() {
  const [character, setCharacter] = useState<Character | null>(null);

  const fetchCharacter = (id: number) => {
    console.log("Consultando personaje con ID:", id);
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      console.log("Respuesta de la API:", res.data);
      setCharacter(res.data);
    });
  };

  useEffect(() => {
    fetchCharacter(1);
  }, []);

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * MAX_CHARACTERS) + 1;
    console.log("ID aleatorio generado:", randomId);
    fetchCharacter(randomId);
  };

  if (!character) return <div>Loading...</div>;

  return (
    <main>
      <h1 className="mb-8 text-2xl">Api de Rick and Morty</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Name" value="" type="customers">
          <div className="flex items-center  justify-center h-32 text-2xl">
            {character.name}
          </div>
        </Card>
        <Card title="Status" value="" type="pending">
          <div className="flex items-center justify-center h-32 text-2xl">
            {character.status}
          </div>
        </Card>
        <Card title="Species" value="" type="invoices">
          <div className="flex items-center justify-center h-32 text-2xl">
            {character.species}
          </div>
        </Card>
        <Card title="Image" value="" type="collected">
          <div className="flex items-center justify-center h-32">
            <img
              src={character.image}
              alt={character.name}
              className="h-24 rounded-lg"
            />
          </div>
        </Card>
      </div>
      <button
        onClick={handleRandom}
        className="mb-6 px-4 items-center py-2 w-full bg-blue-600 mt-10  text-white rounded hover:bg-blue-700 transition"
      >
        Cambiar el personaje
      </button>
    </main>
  );
}
