export const returnApi = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  const h3 = document.createElement('h3');
  h3.innerText = data.value;
  h3.style.textAlign = 'center';
  document.body.appendChild(h3);
  return h3;
}