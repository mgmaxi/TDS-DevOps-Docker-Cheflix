Ejecución del contenedor

Para ejecutar la aplicación Cheflix dentro de Docker, se deben seguir los siguientes pasos:

Comando para construir la imagen
docker build -t cheflix .

Comando para ejecutar el contenedor
docker run -p 8080:80 cheflix

Link para acceder a la app: http://localhost:8080

PROYECTO ORIGINAL:

<p align="center">
<img src="https://raw.githubusercontent.com/mgmaxi/cheflix/main/src/assets/images/logoCheflix.png" width="270" height="80" >
</p>

## 📄 <b> About the Application </b>

Cheflix is a Netflix clone that fetch data from [The Movie Database](https://www.themoviedb.org)
Features:

- List of movies
- Play trailer movies
- Like/Dislike movies
- Add movies to your list
- Remove movies from your list
- Dynamic header that randomly changes between netflix originals

## 🛠️ <b> Technologies </b>

- [React](https://es.reactjs.org/)
- [Axios](https://axios-http.com)

## 🚀 <b> Deploy</b>

- [Deploy](https://che-flix.web.app)

## 📷 <b> Preview </b>

<p align="center">
<img src="https://github.com/mgmaxi/cheflix/blob/main/public/preview.png" width="951" height="1098" >
</p>
