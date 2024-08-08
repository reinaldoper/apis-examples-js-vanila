import { pokeApi } from "./pokeApi.js";
import { removal } from "./removal.js";

export const handlePoke = async (poke) => {
  removal();
  const div = document.createElement('div');
  div.innerText = 'Loading...';
  div.style.color = 'gray';
  div.style.textAlign = 'center';
  div.style.fontSize = '2rem';
  div.style.marginTop = '2rem';
  document.body.appendChild(div);

  
  const pok = await pokeApi(poke);

  
  div.remove();

  if (pok === 'Not found') {
    const errorDiv = document.createElement('div');
    errorDiv.innerText = 'Pokemon não encontrado';
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.fontSize = '2rem';
    errorDiv.style.marginTop = '2rem';
    document.body.appendChild(errorDiv);
  } else {
    const img = document.createElement('img');
    const img1 = document.createElement('img');
    img.src = pok.sprites.front_default;
    img1.src = pok.sprites.back_default;
    
    img.style.width = '400px';
    img1.style.width = '400px';
    img.style.height = '400px';
    img1.style.height = '400px';
    img.style.cursor = 'pointer';
    img1.style.cursor = 'pointer';
    img.style.borderRadius = '50%';
    img1.style.borderRadius = '50%';

    
    const pokeDiv = document.createElement('div');
    pokeDiv.style.display = 'flex';
    pokeDiv.style.justifyContent = 'center';
    pokeDiv.appendChild(img);
    pokeDiv.appendChild(img1);
    
    document.body.appendChild(pokeDiv);
  }
}
