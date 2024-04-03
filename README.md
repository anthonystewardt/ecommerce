This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Instalar Prisma client
``` npm rinstall @prisma/client```

## Generar un client
```npx prisma generate```

## Correr en dev
1. Clonar el repo.
2. Crear una copia de ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```.
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Correr Seed: ```npm run seed```
7. Correr el proyecto ```npm run dev```

## Instalación de prisma
-  ```npm install prisma --save-dev```
-  ```npx prisma init --datasource-provider PostgreSQL```
-  ```npx prisma migrate dev ProductCategory```

- Para crear un modulo tsconfig.json correr: ```npx tsc --init```


## Correr en prod.