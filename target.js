export const target = () => {
  const ulRemove = document.querySelector('ul');
  if (ulRemove) {
    ulRemove.remove();
  }

  const existingDiv = document.querySelector('div');
  if (existingDiv) {
    existingDiv.remove();
  }

  const img = document.querySelectorAll('img');
  if (img.length >= 2) {
    img[0].remove();
    img[1].remove();
  }

  const imgPoke = document.querySelector('img');
  if(imgPoke){
    imgPoke.remove();
  }


  let COLOR = ''
  if (COLOR.length === 0) {
    COLOR = 'white'
  }
  const backGround = document.createElement('div');
  backGround.classList.add('background');
  backGround.style.display = 'flex';
  backGround.style.justifyContent = 'center';
  const target = document.createElement('p');
  target.style.width = '100px';
  target.style.height = '100px';
  target.style.backgroundColor = 'red';
  target.style.marginLeft = '10px';
  target.style.marginTop = '10px';
  target.style.borderRadius = '50%';
  target.style.border = 'none';
  target.style.cursor = 'pointer';
  target.addEventListener('click', () => {
    COLOR = 'red'
  })
  backGround.appendChild(target);

  const target1 = document.createElement('p');
  target1.style.width = '100px';
  target1.style.height = '100px';
  target1.style.backgroundColor = 'yellow';
  target1.style.marginLeft = '10px';
  target1.style.marginTop = '10px';
  target1.style.borderRadius = '50%';
  target1.style.border = 'none';
  target1.style.cursor = 'pointer';
  target1.addEventListener('click', () => {
    COLOR = 'yellow'
  })
  backGround.appendChild(target1);

  const target2 = document.createElement('p');
  target2.style.width = '100px';
  target2.style.height = '100px';
  target2.style.borderRadius = '50%';
  target2.style.backgroundColor = 'black';
  target2.style.marginLeft = '10px';
  target2.style.marginTop = '10px';
  target2.style.border = 'none';
  target2.style.cursor = 'pointer';
  target2.addEventListener('click', () => {
    COLOR = 'black'
  })
  backGround.appendChild(target2);

  const target3 = document.createElement('p');
  target3.style.width = '100px';
  target3.style.height = '100px';
  target3.style.backgroundColor = 'orange';
  target3.style.marginLeft = '10px';
  target3.style.marginTop = '10px';
  target3.style.borderRadius = '50%';
  target3.style.border = 'none';
  target3.style.cursor = 'pointer';
  target3.addEventListener('click', () => {
    COLOR = 'orange'
  })
  backGround.appendChild(target3);
  document.body.appendChild(backGround);


const backGroundTarget = document.createElement('div');
backGroundTarget.classList.add('backGround');
backGroundTarget.style.margin = '10px auto'; 
backGroundTarget.style.display = 'flex';
backGroundTarget.style.justifyContent = 'center';
backGroundTarget.style.flexWrap = 'wrap';
backGroundTarget.style.maxWidth = '500px'; 

for (let i = 0; i < 20; i++) {
  const backTarget = document.createElement('p');
  backTarget.style.width = '100px';
  backTarget.style.height = '100px';
  backTarget.style.backgroundColor = 'white';
  backTarget.style.margin = '10px';
  backTarget.style.border = 'none';
  backTarget.style.cursor = 'pointer';
  backTarget.addEventListener('click', () => {
    backTarget.style.backgroundColor = COLOR;
  })
  backGroundTarget.appendChild(backTarget);
}

document.body.appendChild(backGroundTarget);



}