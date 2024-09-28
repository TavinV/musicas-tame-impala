const contents = document.querySelector('.contents')

let dados = `[
    {
      "titulo": "The Less I Know the Better",
      "album": "Currents",
      "duracao": "3:36",
      "genero": "Psychedelic Pop, Funk",
      "img": "img/currents.jpg",
      "link": "https://open.spotify.com/intl-pt/track/6K4t31amVTZDgR3sKmwUJJ?si=a0a2291ce6424161"
      },
      {
      "titulo": "'Cause I'm a Man",
      "album": "Currents",
      "duracao": "4:02",
      "genero": "Psychedelic Pop, R&B",
      "img": "img/currents.jpg",
      "link": "https://open.spotify.com/intl-pt/track/2O99aywAVBhaPrsiJ6zbSS?si=09383fddc55649ff"
    },
    {
      "titulo": "New Person, Same Old Mistakes",
      "album": "Currents",
      "duracao": "6:03",
      "genero": "Psychedelic Pop, Synthpop",
      "img": "img/currents.jpg",
      "link": "https://open.spotify.com/intl-pt/track/52ojopYMUzeNcudsoz7O9D?si=affc3fdb718944cb"
    },
    {
      "titulo": "Borderline",
      "album": "The Slow Rush",
      "duracao": "4:34",
      "genero": "Psychedelic Pop, Disco",
      "img": "img/the slow rush.jpeg",
      "link": "https://open.spotify.com/intl-pt/track/5hM5arv9KDbCHS0k9uqwjr?si=9c74938057c44d46"
    },
    {
      "titulo": "Elephant",
      "album": "Lonerism",
      "duracao": "3:31",
      "genero": "Psychedelic Rock",
      "img": "img/lonerism.jpeg",
      "link": "https://open.spotify.com/intl-pt/track/6qZjm61s6u8Ead9sWxCDro?si=a2e8049dce854ae7"
    },
    {
      "titulo": "Feels Like We Only Go Backwards",
      "album": "Lonerism",
      "duracao": "3:12",
      "genero": "Psychedelic Pop",
      "img": "img/lonerism.jpeg",
      "link": "https://open.spotify.com/intl-pt/track/0LtOwyZoSNZKJWHqjzADpW?si=1a4c5f6da0244c8b"
    }
  ]`

let musicas_JSON = JSON.parse(dados)

function criarElementoHtml(html) {
  const template = document.createElement("template")
  template.innerHTML = html.trim()

  return template.content.childNodes
}

function renderizar_musica(musica) {

  contents.innerHTML = ''
  let elemento = criarElementoHtml(`
    
    <div class="image-container">
      <img id="img" src="${musica.img}" />
    </div>
    <div class="informacao-musica">
      <span>
        <h2 id="titulo">${musica.titulo}</h2>
        <h3 id="genero">${musica.genero}</h3>
      </span>
      <span>
        <h3 id="album"><strong>Album: </strong> ${musica.album}</h3>
        <h3 id="duracao"><strong>Duracao: </strong>${musica.duracao}</h3>
      </span>
      <a target="_blank" href="${musica.link}">Escutar</a>
    </div>
  `)

  elemento.forEach(node => {
    contents.append(node)
  });

}

function mudar_musica(id_musica) {
  renderizar_musica(musicas_JSON[id_musica])
}
