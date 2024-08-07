import { removal } from "./removal.js";

export const apiProdutos = async () => {

  removal();
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/produtos/geociencias');
  const data = await response.json();

  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.justifyContent = 'center';
  ul.style.listStyle = 'none';
  ul.style.marginTop = '10px';

  data.forEach(produto => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const h2 = document.createElement('h2');

    h2.innerText = produto.catTitle;
    h2.style.textAlign = 'center';
    h2.style.cssText = 'font-size: 18px; font-weight: bold; color: brown;';
    p.innerText = produto.tipo;

    p.style.overflow = 'hidden';
    p.style.textOverflow = 'ellipsis';
    p.style.whiteSpace = 'nowrap';
    p.style.width = '100%';
    p.style.boxSizing = 'border-box';
    p.style.transition = 'transform 0.3s';
    p.style.textShadow = '0 0 10px black';

    li.style.display = 'flex';
    li.style.flexDirection = 'column';
    li.style.justifyContent = 'center';
    li.style.alignItems = 'center';
    li.style.width = '200px';
    li.style.backgroundColor = 'lightgray';
    li.style.flexWrap = 'wrap';
    li.style.listStyle = 'none';
    li.style.marginBottom = '10px';
    li.style.border = '1px solid black';
    li.style.padding = '10px';
    li.style.borderRadius = '10px';
    li.style.marginLeft = '5px';
    li.style.marginRight = '5px';
    li.style.boxShadow = '0 0 10px black';
    li.style.cursor = 'pointer';
    li.addEventListener('mouseover', () => {
      li.style.transform = 'scale(1.5)';
    });
    li.addEventListener('mouseout', () => {
      li.style.transform = 'scale(1)';
    });

    li.addEventListener('click', () => {
      const modal = document.createElement('div');
      const modalContent = document.createElement('div');
      const p = document.createElement('p');
      const h2 = document.createElement('h2');
      const content = data.find(item => item.catTitle === produto.catTitle);
      
    
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      
      
      modalContent.style.backgroundColor = 'white';
      modalContent.style.padding = '20px';
      modalContent.style.borderRadius = '10px';
      modalContent.style.boxShadow = '0 0 10px black';
    
     
      h2.classList.add('text-danger');
      h2.innerText = content.tipo;
      h2.style.marginBottom = '10px';
      p.classList.add('text-primary');
      p.style.marginBottom = '10px';
      p.innerText = content.catTitle;
      
      
      const closeButton = document.createElement('button');
      closeButton.classList.add('btn', 'btn-danger');
      closeButton.style.marginTop = '10px';
      closeButton.style.width = '100%';
      closeButton.style.padding = '10px';
      closeButton.style.borderRadius = '5px';
      closeButton.style.border = 'none';
      closeButton.innerText = 'Fechar';
      closeButton.addEventListener('click', () => {
        modal.remove();
      });
    
      
      modalContent.appendChild(h2);
      modalContent.appendChild(p);
      modalContent.appendChild(closeButton);
      modal.appendChild(modalContent);
    
      document.body.appendChild(modal);
    });
    
    li.appendChild(p);
    li.appendChild(h2);

    ul.appendChild(li);
  });

  document.body.appendChild(ul);
  return ul;
}
