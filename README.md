# -back-end_motos

criando uma api para estudos 
<!-- #  Front end da Arplicaçao 
See [Repositorio front end](https://github.com). -->


## Instale as dependencias
```bash
yarn
npm install nodemon -D
```
## inicie o banco de dados
crie o arquivo Knexfile.js comforme exemplo e conect com o seu banco de dados 
precisara de um arquivo na pasta src/database/conectDB.js
sequindo exemplo
## rode as migrations 
```bash
npx knex migrate:latest
```
### crie um arquivo auth.json na pasta src/config/auth comforme o exemplo que esta na pasta 

### inicie o funcionamento da API
```bash
npm rum dev
```
### utilizaçao da API  api com Insominia 

### baixe o sorfitware Insominia para verificar o funcionamento da API 
See [insomnia](https://insomnia.rest/)

#### rotas para utilizaçao 

base_url http://localhost:3001/api/ 

metod post base_url/user criar um usuario enviando dados em Json 

metod post base_url/login para authenticar um usuario enviando dados em Json


<!-- ### Repositorio font end -->
<!-- See [Repositorio front end](https://github.com/Goncalves-Rafael/megahack3_grupo13_front). -->
