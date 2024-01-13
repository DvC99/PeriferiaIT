# pruebatecnica

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

### Installing

COMANDO PRA CORRER CONTENEDOR CON LA IMAGEN
docker run --env-file=./.env -p 3001:3001 periferiait:latest

COMANDO PARA LEVANTAR docker-compouse
docker compose up

COMANDO PARA BAJAR EL CONTENEDOR
docker compose down

COMANDO APRA SUBIR CON LOS CAMBIOS
docker compose up --build
