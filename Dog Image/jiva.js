const button = document.querySelector('button');

const img = document.querySelector('img');



button.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')

    .then((response)  => response.json())
    .then((json) => {
        img.src = json.message
    })

})