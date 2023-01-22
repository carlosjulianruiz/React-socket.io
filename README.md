# React-socket.io
carpeta de cliente, carpeta del servidor.  Servidor con rutas usando express.Routes. Enviando socket io desde las rutas.

# REACT - SOCKET IO - EXPRESS.ROUTES EXAMPLE

there are 2 folders, "front" for the client side and "Server-React-socket-io" for the server side.

you must start the server and the client side.

to star the server:

```
cd Server-React-socket-io
npm run dev

```

this will start the server with nodemon.


To start the client side:

```
cd ..
cd front
npm start

```


now open the client side open the following url in your browser:

```
http://localhost/3000

```


now open the server side url, this will simulate a get request if your server is an api and uses espress and express.routes


```
http://localhost/3001/comandas

```


Once you open the url "http://localhost/3001/comandas" you will see in the client side the line "documento actualizado" in all the clients side open, this was sent from the server.



