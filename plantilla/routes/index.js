var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const plantilla = {
  "producto": {
      "titulo": "The Legend of Heroes",
      "precio": "59,99 €",
      "categorias": ["RPG", "Aventura", "Acción"],
      "imagenes": {
          "principal": "https://picsum.photos/400?random=10",
          "miniaturas": [
              "https://picsum.photos/400?random=1",
              "https://picsum.photos/400?random=2",
              "https://picsum.photos/400?random=3",
              "https://picsum.photos/400?random=4"
          ]
      },
      "descripcion": "Embárcate en una épica aventura donde cada decisión cuenta. The Legend of Heroes te transporta a un mundo lleno de magia, misterio y personajes inolvidables. Explora vastos territorios, combate contra criaturas legendarias y descubre secretos ancestrales que cambiarán el destino de todo un reino. Con más de 80 horas de contenido, gráficos impresionantes y una banda sonora orquestada, esta es la experiencia definitiva para los amantes de los RPG. Personaliza tu personaje, forma tu grupo de aventureros y enfrenta desafíos que pondrán a prueba tu estrategia y habilidad.",
      "opiniones": [
          {
              "usuario": "María García",
              "puntuacion": 5,
              "texto": "Increíble juego. La historia es absorbente y los gráficos son espectaculares. He invertido más de 60 horas y aún tengo mucho por descubrir. Totalmente recomendado."
          },
          {
              "usuario": "Carlos Ruiz",
              "puntuacion": 4,
              "texto": "Muy buen RPG con un sistema de combate sólido. La única pega es que a veces el ritmo se hace un poco lento. Aun así, merece totalmente la pena."
          },
          {
              "usuario": "Ana Martínez",
              "puntuacion": 5,
              "texto": "Los personajes son carismáticos y la banda sonora es simplemente maravillosa. Es de esos juegos que te dejan con ganas de más cuando terminas."
          }
      ]
  }
}

