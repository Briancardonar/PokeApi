import CardImage from './CardImage'
import { useCallback, useEffect, useState } from 'react';

const RenderData = () => {
  const [data, setData] = useState([]);

  const getDataPokemon = useCallback(async () => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await respuesta.json()
  }, [])

  useEffect(() => {
    const init = async () => {
      const response = await getDataPokemon();
      console.log(response);
      setData(response.results);
    }
    init();
  }, [getDataPokemon]);

  return (
    data.map((element, index) => (
      <CardImage
        key={String(index)}
        infoPokemon={element.name}
      />
    )
    ))
}

export default RenderData;
