# Exchange-microservice API

API consturida con la arquitectura basada en microservicios con conexion TCP, para la conversion de monedas construida en Nest.js

![image](https://github.com/user-attachments/assets/053d9dd2-c2bc-4adf-9b83-896298e28006)


## client-gateway

este es el gateway encargado de recibir las peticiones, validarlas y enviarlas al microservicio para luego recibir una respuesta

## currency-exchange

este es el microservicio encargado de recibir las peticiones, procesarlas y retornar respuesta al gateway.
