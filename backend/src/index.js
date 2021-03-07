const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());   /** Informando que as requisições estão no formato jason. Assim ele vai conseguir entender */
app.use(routes);

app.listen(3333);

/** 
 * requeste : guarda todos os dados que vem através da nossa requisição
 * response: o responsável por retornar uma resposta ao usuário 
 * 
 */


/**
 * GET : quando quero buscar uma informação do back-end
 * POSt: Criar uma informação no back-end 
 * PUT: Alterar uam informação no back-end 
 * DELETE: Deletar uma informação 
 * 
 */

 /**
  * Tipos de parâmetros 
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos 
  * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /**
   * Banco de Dados 
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   */

   /**
    * Como fazer a comunicação:
    * 
    * Driver: SELECT * FROM users
    * Query Builder: table('users).selsct(*).where()
    */


    /** parei (02/02 ==> 35:00 ) */

    /**
     * Entidades: Tudo da aplicaçao que será salvo no banco de dados 
     *  1 - Ong 
     *  2 - Caso (incident)
     *  
     * Funcionalidades da aplicação
     *  1 - Login de ong
     *  2 - Cadastro de ong
     *  3 - Log out
     *  4 - Cadastrar casos 
     *  5 - Deletar casos
     *  6 - Listar casos específicos de uma ong
     *  7 - Listar todos os casos 
     *  8- Entrar em contato com a ong
     * 
     * Migrations --> histórico do banco de dados
     * 
     * 
     * Dia 05/03/2021 : parei no minuto 59:45
     */