<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 1er Paso.

instala las dependecnias necesarias

```bash
$ npm install
```

## 2do Paso.

en el microservicio existe un archivo docker-compose, ejecuta el sigueinte comando para crear y correr la imagen de redis en docker

```bash
docker-compose up -d
```

## 3er Paso.

ejecuta el sigueinte comando para correr el servidor

```bash
# watch mode
$ npm run start:dev
```
