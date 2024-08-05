const apiDigimons = async () => {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon');
  const results = await response.json();
  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.marginTop = '20px';
  ul.style.flexWrap = 'wrap';
  ul.style.justifyContent = 'center';
  ul.style.listStyle = 'none';

  results.forEach(cat => {
    const li = document.createElement('li');
    li.style.margin = 'auto';

    const img = document.createElement('img');
    img.src = cat.img;
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.borderRadius = '50%';
    img.style.transition = 'transform 0.3s';
    img.style.cursor = 'pointer';

    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.5)';
    });

    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
    img.addEventListener('click', () => {
      const digiomon = cat.name;
      const render = document.createElement('div');
      const nameDigimon = results.find((digimon) => digimon.name === digiomon);
      const style = 'border-radius: 50%;';
      render.innerHTML = `
        <h1>${nameDigimon.name}</h1>
        <img src="${nameDigimon.img}" style="${style}" alt="${nameDigimon.name}" title="${nameDigimon.name}">
        <p>${nameDigimon.level}</p>
      `;
      render.style.display = 'flex';
      render.style.flexDirection = 'column';
      render.style.alignItems = 'center';
      render.style.justifyContent = 'center';
      ul.remove();
      document.body.appendChild(render);
    })

    li.appendChild(img);
    ul.appendChild(li);
  });

  document.body.appendChild(ul);

  return ul;
}

export default apiDigimons;
