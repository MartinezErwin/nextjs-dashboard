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

type Pokemon = {
  name: string;
  id: number;
  types: string;
  sprite: string;
};

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type User = {
  name: string;
  gender: string;
  email: string;
  picture: string;
};

const MAX_CHARACTERS = 826;

export default function RickAndMortyPage() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [cat, setCat] = useState<Cat | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const fetchCharacter = (id: number) => {
    console.log("Consultando personaje con ID:", id);
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      console.log("Respuesta de la API rickandmorty:", res.data);
      setCharacter(res.data);
    });
  };

  const fetchPokemon = (id: number) => {
    console.log("Consultando Pokémon con ID:", id);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      console.log("Respuesta de la API pokemon:", res.data);
      const data = res.data;
      setPokemon({
        name: data.name,
        id: data.id,
        types: data.types.map((t: any) => t.type.name).join(", "),
        sprite: data.sprites.front_default,
      });
    });
  };

  const fetchCat = () => {
    console.log("Consultando gato...");
    axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
      console.log("Respuesta de la API cat:", res.data);
      const data = res.data[0];
      setCat({
        id: data.id,
        url: data.url,
        width: data.width,
        height: data.height,
      });
    });
  };
  const fetchUser = () => {
    console.log("Consultando usuario aleatorio...");
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log("Respuesta de la API randomuser:", res.data);
      const data = res.data.results[0];
      setUser({
        name: `${data.name.first} ${data.name.last}`,
        gender: data.gender,
        email: data.email,
        picture: data.picture.large,
      });
    });
  };

  useEffect(() => {
    fetchCharacter(1);
    fetchPokemon(1);
    fetchCat();
    fetchUser();
  }, []);

  if (!character || !pokemon || !cat || !user) return <div>Loading...</div>;

  return (
    <main>
      <h1 className="mb-8 text-2xl">APIs públicas - 4 bloques</h1>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Rick and Morty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Name" value="" type="customers">
            <div className="flex items-center justify-center h-32 text-2xl">
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
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Pokémon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Name" value="" type="customers">
            <div className="flex items-center justify-center h-32 text-2xl">
              {pokemon.name}
            </div>
          </Card>
          <Card title="ID" value="" type="pending">
            <div className="flex items-center justify-center h-32 text-2xl">
              {pokemon.id}
            </div>
          </Card>
          <Card title="Types" value="" type="invoices">
            <div className="flex items-center justify-center h-32 text-2xl">
              {pokemon.types}
            </div>
          </Card>
          <Card title="Sprite" value="" type="collected">
            <div className="flex items-center justify-center h-32">
              <img src={pokemon.sprite} alt={pokemon.name} className="h-24" />
            </div>
          </Card>
        </div>
        <h2 className="mb-4 text-xl font-bold">Cat API</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Cat ID" value="" type="customers">
            <div className="flex items-center justify-center h-32 text-2xl">
              {cat?.id}
            </div>
          </Card>
          <Card title="Image" value="" type="collected">
            <div className="flex items-center justify-center h-32">
              <img src={cat?.url} alt={cat?.id} className="h-24 rounded-lg" />
            </div>
          </Card>
          <Card title="Width" value="" type="invoices">
            <div className="flex items-center justify-center h-32 text-2xl">
              {cat?.width}
            </div>
          </Card>
          <Card title="Height" value="" type="pending">
            <div className="flex items-center justify-center h-32 text-2xl">
              {cat?.height}
            </div>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Random User API</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Name" value="" type="customers">
            <div className="flex items-center justify-center h-32 text-2xl">
              {user?.name}
            </div>
          </Card>
          <Card title="Gender" value="" type="pending">
            <div className="flex items-center justify-center h-32 text-2xl">
              {user?.gender}
            </div>
          </Card>
          <Card title="Email" value="" type="invoices">
            <div className="flex items-center justify-center h-32 text-sm text-center">
              {user?.email}
            </div>
          </Card>
          <Card title="Picture" value="" type="collected">
            <div className="flex items-center justify-center h-32">
              <img
                src={user?.picture}
                alt={user?.name}
                className="h-24 rounded-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
