const createButton = (text, onClick) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = text;
  button.addEventListener('click', onClick);
  return button;
}


export default createButton;