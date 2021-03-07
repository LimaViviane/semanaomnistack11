const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
    
        await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
     /* console.log(data); /** Para garantir que esta chegando tudo ali dentro */
     /*console.log(body);  /** Para mostrar no terminal */
    return response.json({ id
         /** evento: 'Semana Omnistack 11.0',
        aluna: 'Viviane da Conceição Lima' */  });
    }
};