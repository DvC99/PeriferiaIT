COMANDO PRA CORRER CONTENEDOR CON LA IMAGEN
docker run --env-file=./.env -p 3001:3001 periferiait:latest


COMANDO PARA LEVANTAR docker-compouse
docker compose up

COMANDO PARA BAJAR EL CONTENEDOR
docker compose down

COMANDO APRA SUBIR CON LOS CAMBIOS 
docker compose up --build
