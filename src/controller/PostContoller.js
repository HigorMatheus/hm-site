const DB = require('../database/conectDB')

const PostController = {
  // visualizar todos os usuarios 
  async index (req,res){
    const photos =  await DB.select( 'id','user_id','imagem','description').table('posts')
    const seriarizePhotos= photos.map(photo=>{
      return{
        ...photo,
        image_url: `http://localhost:3333/api/temp/uploads/${photo.imagem}`
      }
    })
        return res.json({photos:seriarizePhotos})
      
  },
  async show(req,res){
   const  id = req.params
  //  console.log(id);
    const photo = await DB.table('posts').select('id','user_id', 'imagem', "description").where( id)
    const post= photo[0]
    const seriarizePhoto= {
        ...post,
        image_url: `http://localhost:3333/api/uploads/${post.imagem}`
    }
    
    res.json({post:seriarizePhoto})
  },
  async create (req, res){
    // const {imagem} = req.body
    // console.log(imagem);

    // try {
      const {id} = req.params
        // return res.json({ data: req.body })
    // return console.log(req.body);
      const{ filename, location:image_url=''}= req.file

     console.log({ filename,image_url});
    const {
        description,
      imagem
    } = req.body

    // const {} = imagem

    // console.log(req.file);
     const post= await DB.table('posts').insert({
        user_id: id,
      imagem: filename,
      description
    });
    const data={
      id: post,
      imagem: filename,
      description,
      image_url
    }

    return res.json({ data })
    // } catch (error) {
    //   return res.status(506).json({error})
    // }
  
  },
  async destroy(req,res){
    // selecionando um usuario 
    const {id} = req.params
    console.log(id);
    // delerando um usuario
    await DB.table('posts').where({id}).del()

    return res.json({mensagem: "postagem deletada com sucesso"})
  }
}
module.exports = PostController


