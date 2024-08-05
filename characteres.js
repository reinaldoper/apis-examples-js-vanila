const characters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await response.json();
  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.justifyContent = 'center';
  ul.style.listStyle = 'none';
  results.forEach(cat => {
    const li = document.createElement('li');

    li.style.margin = 'auto';
    const img = document.createElement('img');
    img.src = cat.image;
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.borderRadius = '10%';
    img.style.transition = 'transform 0.3s';

    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.5)';
    });

    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
    li.appendChild(img);
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  return ul;
}

export default characters;