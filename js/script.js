import peliculas from './peliculas.js'



const generoAccion = document.getElementById("genero-28");
const generoThriller = document.getElementById("genero-53");
const generoAventura = document.getElementById("genero-12");

const sonDeAccion = peliculas.filter((element) => element.genre_ids.includes(28));
const sonDeThriller = peliculas.filter((element) => element.genre_ids.includes(53));
const sonDeAventura = peliculas.filter((element) => element.genre_ids.includes(12));




console.log(`A continuacion las peliculas de accion.`);
console.log(sonDeAccion);

console.log(`A continuacion las peliculas de thriller.`);
console.log(sonDeThriller);

console.log(`A continuacion las peliculas de aventura.`);
console.log(sonDeAventura);




for (let i = 0; i < sonDeAccion.length; i++) {
    sonDeAccion[i].backdrop_path = `https://image.tmdb.org/t/p/w500${sonDeAccion[i].backdrop_path}`
    let imagen = document.createElement("img");
    imagen.src = sonDeAccion[i].backdrop_path;
    let titulo = document.createElement("h2");
    titulo.textContent = sonDeAccion[i].title;
    
    generoAccion.appendChild(imagen);
    generoAccion.appendChild(titulo);
}


for (let i = 0; i < sonDeThriller.length; i++) {
    sonDeThriller[i].backdrop_path = `https://image.tmdb.org/t/p/w500${sonDeThriller[i].backdrop_path}`
    let imagen = document.createElement("img");
    imagen.src = sonDeThriller[i].backdrop_path;
    let titulo = document.createElement("h2");
    titulo.textContent = sonDeThriller[i].title;

    generoThriller.appendChild(imagen);
    generoThriller.appendChild(titulo);
}


for (let i = 0; i < sonDeAventura.length; i++) {
    sonDeAventura[i].backdrop_path = `https://image.tmdb.org/t/p/w500${sonDeAventura[i].backdrop_path}`
    let imagen = document.createElement("img");
    imagen.src = sonDeAventura[i].backdrop_path;
    let titulo = document.createElement("h2");
    titulo.textContent = sonDeAventura[i].title;

    generoAventura.appendChild(imagen);
    generoAventura.appendChild(titulo);
}