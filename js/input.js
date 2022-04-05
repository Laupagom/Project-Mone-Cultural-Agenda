const text = 'Buscar artistas'
document.querySelector('search__input').placeholder = text;
let counter = text.length;
let modificador = -1
setInterval(function() {
    if (counter === 0) {
    modificador = 1;
    }
    if (counter === text.length) {
    modificador = -1;
    }
    counter = counter + modificador;
    document.querySelector('search__input').placeholder = text.substring(0, counter);
}, 200);