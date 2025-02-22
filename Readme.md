# Exchange-microservice API

API consturida con la arquitectura basada en microservicios con conexion TCP, para la conversion de monedas construida en Nest.js

![image](https://github.com/user-attachments/assets/606c8df9-2ce5-4c1f-a9ee-15c7d9cc5127)

## client-gateway

este es el gateway encargado de recibir las peticiones, validarlas y enviarlas al microservicio para luego recibir una respuesta

## currency-exchange

este es el microservicio encargado de recibir las peticiones, procesarlas y retornar respuesta al gateway.
