export const handleClickDark = () => {
  const light = document.querySelector('#title')
  if (light.style.background === 'black') {
    light.style.background = 'white';
    light.style.textAlign = 'start';
    light.style.color = 'black';
  } else {
    light.style.background = 'black'
    light.style.color = 'white';
    light.style.textAlign = 'end';
  }
  const currentColor = document.body.style.background;
  if (currentColor === 'gray' || currentColor === '') {
      document.body.style.background = 'green';
  } else {
      document.body.style.background = 'gray';
  }
}