export const removal = () => {
  const div2 = document.querySelector('.background')

  if (div2) {
      div2.remove();
  }

  const div1 = document.querySelector('.backGround')

  if (div1) {
      while (div1.firstChild) div1.removeChild(div1.firstChild);
  }
}