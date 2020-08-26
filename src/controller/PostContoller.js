const DB = require('../database/db')
const { destroy } = require('../database/db')

const PostController = {
  // visualizar todos os usuarios 
  async index (req,res){
    const photos =  await DB.select( 'id','avatar','description').table('users')
    const seriarizePhotos= photos.map(photo=>{
      return{
        ...photo,
        avatar_url: `http://localhost:3333/api/uploads/${photo.avatar}`
      }
    })
        return res.json({photos:seriarizePhotos})
      
  },
  async show(req,res){
   const  id = req.params
  //  console.log(id);
    const photo = await DB.table('users').select('id', 'avatar', "description").where( id)
    const post= photo[0]
    const seriarizePhoto= {
        ...post,
        avatar_url: `http://localhost:3333/api/uploads/${post.avatar}`
    }
    
    res.json({post:seriarizePhoto})
  },

  async create (req, res){
    // return res.json({ data: req.body })
    const {
      name,
        email,
        description
    } = req.body
    const user={
      name,
      email,
      avatar: req.file.filename,
      description
    }
    await DB.table('users').insert(user);

    const data = user

      return res.status(201).json({ data })
  },
  async destroy(req,res){
    // selecionando um usuario 
    const {id} = req.params
    console.log(id);
    // delerando um usuario
    await DB.table('users').where({id}).del()

    return res.json({mensagem: "usuario deletado com sucesso"})
  }
}
module.exports = PostController


