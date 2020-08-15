const DB = require('../database/db')

const PostController = {
        // visualizar todos os usuarios 
        async index (req,res){
            await DB.select( 'avatar','description').table('users').then((results)=>{
              return res.json(results)
            });
        },

        async create (req, res){
          // return res.json({ data: req.body })
          const {
            name,
              email,
              avatar,
              description
          } = req.body
          
         const photo = await DB.table('users').insert({
            name,
            email,
            avatar,
            description
          });
          const data ={
            avatar: req.body.avatar,
            descripion: req.body.description
          }

            return res.status(201).json({ data })
        }
}
module.exports = PostController


