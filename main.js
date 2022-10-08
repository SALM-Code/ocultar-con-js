const hideButton = document.getElementById('hide-button');
// let hideImage = document.getElementById('hide-image');

/* Ocultando usando display */
hideButton.addEventListener('click', () => {
    let hideImage = document.getElementById('hide-image');
    currentDisplay = hideImage.style.display;

    if (currentDisplay === 'none') {
        hideImage.style.display = 'block';
    } else {
        hideImage.style.display = 'none';
    }
});

/* Ocultando cambiando el CSS */
// hideButton.addEventListener('click', () => {
//     let hideImage = document.getElementById('hide-image');
//     hideImage.classList.toggle('image-disappearing');
// });

/* Ocultando después de X tiempo */
// setTimeout(() => {
//     let hideImage = document.getElementById('hide-image');
//     hideImage.classList.toggle('image-disappearing');
// }, 3000);

/* Ocultando y mostrando el elemento cada X tiempo */
// setInterval(() => {
//     let hideImage = document.getElementById('hide-image');
//     hideImage.classList.toggle('image-disappearing');
// }, 3000);

/* Ocultando al pasar el mouse encima */
// hideImage.addEventListener('mouseover', () => {
//     let hideImage = document.getElementById('hide-image');
//     hideImage.classList.toggle('image-disappearing');
// });


