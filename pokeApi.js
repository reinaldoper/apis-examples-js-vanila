export const pokeApi = async (poke) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    

    if (!response.ok) {
      return 'Not found';
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return 'Not found';  
  }
}
