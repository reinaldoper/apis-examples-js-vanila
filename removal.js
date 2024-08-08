export const removal = () => {
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
    if (imgPoke) {
        imgPoke.remove();
    }
    const div2 = document.querySelector('.background');
    if (div2) {
        div2.remove();
    }

    const h5 = document.querySelector('h5');
    if (h5) {
        console.log('h5 found and will be removed');
        h5.remove();
    } else {
        console.log('h5 not found');
    }
}
