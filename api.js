export const apiCats = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  const data = await response.json();
  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.justifyContent = 'center';
  ul.style.listStyle = 'none';
  data.forEach(cat => {
      const li = document.createElement('li');
      
      li.style.margin = 'auto';
      const img = document.createElement('img');
      img.src = cat.url;
      img.style.width = '100px';
      img.style.height = '100px';
      li.appendChild(img);
      ul.appendChild(li);
  });
  document.body.appendChild(ul);
  return ul;
}
