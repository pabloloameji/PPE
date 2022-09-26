const paginas = [];

window.onload = init;

function secciones() {
    paginas['seccion1'] = 'index.html';
    paginas['seccion2'] = 'tienda.html';
    paginas['seccion3'] = 'contacto.html';
    paginas['seccion4'] = 'acerca_de.html';
}

function init() {
    var seccion1 = document.getElementById('seccion1');
    var seccion2 = document.getElementById('seccion2');
    var seccion3 = document.getElementById('seccion3');
    var seccion4 = document.getElementById('seccion4');

    secciones();

    seccion1.addEventListener('click', enrutador);
    seccion2.addEventListener('click', enrutador);
    seccion3.addEventListener('click', enrutador);
    seccion4.addEventListener('click', enrutador);
}

function enrutador(event) {
    location.href = paginas[event.target.id];
}