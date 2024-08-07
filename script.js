import { apiCats } from "./api.js";
import characters from "./characteres.js";
import createButton from "./createButton.js";
import { returnApi } from "./returnApi.js";
import apiDigimons from "./apiDigimons.js";
import { handleClickDark } from "./handleClickDark.js";
import { handleClickProducts } from "./handleClickProducts.js";
import { handlePoke } from "./handlePoke.js";
import { target } from "./target.js";
import { removal } from "./removal.js";


let POKE = ''
const button = createButton('Click me', () => handleClick('Check Norris', 'Cats'));
const button2 = createButton('Mode_Dark', () => handleClickDark());
const button3 = createButton('Products', () => handleClickProducts());
const button5 = createButton('Target', () => target());
const input = document.createElement('input');
const button4 = createButton('PokeApi', () => handlePoke(POKE));


const main = () => {
    const title = document.getElementById('title');
    title.style.color = 'red';
    title.style.backgroundColor = 'black';
    title.style.padding = '10px';
    title.style.borderRadius = '10px';
    title.style.textAlign = 'center';
    title.style.margin = '10px';
    title.style.fontSize = '50px';
    title.style.fontFamily = 'Arial';
    title.innerText = 'Api Examples';

    document.body.appendChild(button);
   
}


const handleClick = async (arg1, arg2) => {
    main();
    if (button) button.remove();
    if (button2) button2.remove();
    if (button3) button3.remove();
    if (input) input.remove();
    if (button4) button4.remove();
    if (button5) button5.remove();
    const ulRemove = document.querySelector('ul');
    if (ulRemove) {
        ulRemove.remove();
    }
    

    removal();

    const divRemove = document.querySelector('div');
    if (divRemove) {
        divRemove.remove();
    }

    
    
    const h2 = document.createElement('h2');
    h2.innerText = `Apis: ${arg1} ${arg2}`;
    h2.style.color = 'blue';
    h2.style.textAlign = 'center';
    document.body.appendChild(h2);

    
    const h3 = await returnApi();
    if (!h3) {
        const h4 = document.createElement('h4');
        h4.innerText = 'Loading...';
        document.body.appendChild(h4);
    } else {
        h3.style.color = 'red';
        document.body.appendChild(h3);
    }

    await new Promise(resolve => setTimeout(resolve, 3000));
    h2.remove();

    await new Promise(resolve => setTimeout(resolve, 3000));
    if (h3) h3.remove();

    
    const ul = await apiCats();
    if (!ul) {
        const h3 = document.createElement('h3');
        h3.innerText = 'Loading...';
        document.body.appendChild(h3);
    } else {
        document.body.appendChild(ul);
    }

    await new Promise(resolve => setTimeout(resolve, 10000));
    if (ul) ul.remove();

    
    const character = await characters();
    document.body.appendChild(character);

    await new Promise(resolve => setTimeout(resolve, 10000));
    if (character) character.remove();

    const h4 = document.createElement('h4');
    h4.style.display = 'flex';
    h4.appendChild(button);
    h4.appendChild(button2);
    h4.appendChild(button3);
    h4.appendChild(button5);
    h4.style.justifyContent = 'center';
    input.style.display = 'flex';
    input.placeholder = 'Digite o nome do Pokémon';
    input.style.justifyContent = 'center';
    input.style.padding = '10px';
    input.style.width = '200px';
    input.style.borderRadius = '10px';
    input.style.border = 'none';
    input.style.background = 'lightgray';
    input.addEventListener('change', (e) => {
        POKE = e.target.value;
    })
    const p = document.createElement('p');
    p.style.display = 'flex';
    p.appendChild(input)
    button4.style.marginLeft = '10px';
    button4.style.marginRight = '40px';
    p.appendChild(button4);
    h4.appendChild(p);
    h4.style.alignItems = 'center';
    document.body.appendChild(h4);

    const digimon = await apiDigimons();
    document.body.appendChild(digimon);

    await new Promise(resolve => setTimeout(resolve, 10000));
    
}

main();
