import { removal } from "./removal.js";
import { data } from "./data.js";


export const renderProjects = () => {
  removal();

  const container = document.createElement('div');
  container.className = 'container';

 
  const leftArrow = document.createElement('span');
  leftArrow.className = 'arrow';
  leftArrow.id = 'left-arrow';
  leftArrow.innerHTML = '&#9664;';

  
  const scroller = document.createElement('div');
  scroller.className = 'scroller';
  scroller.id = 'scroller';

  const rightArrow = document.createElement('span');
  rightArrow.className = 'arrow';
  rightArrow.id = 'right-arrow';
  rightArrow.innerHTML = '&#9654;';

  container.appendChild(leftArrow);
  container.appendChild(scroller);
  container.appendChild(rightArrow);

  document.body.appendChild(container);

  const dataSort = data.sort((a, b) => a.title.localeCompare(b.title));

  function renderItems() {
    const scroller = document.getElementById('scroller');
    dataSort.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
      Object.assign(img.style, item.style);

      const title = document.createElement('h3');
      title.textContent = item.title;

      const link = document.createElement('a');
      link.href = item.link;
      link.target = '_blank';
      link.textContent = 'Ver Projeto';

      itemDiv.appendChild(img);
      itemDiv.appendChild(title);
      itemDiv.appendChild(link);
      scroller.appendChild(itemDiv);
    });
  }

  function scrollLeft() {
    document.getElementById('scroller').scrollBy({ left: -300, behavior: 'smooth' });
  }

  function scrollRight() {
    document.getElementById('scroller').scrollBy({ left: 300, behavior: 'smooth' });
  }

  document.getElementById('left-arrow').addEventListener('click', scrollLeft);
  document.getElementById('right-arrow').addEventListener('click', scrollRight);


  renderItems();
}