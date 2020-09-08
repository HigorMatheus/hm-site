const DB = require('../database/conectDB')

const PostController = {
  // visualizar todos os usuarios 
  async index (req,res){
    const photos =  await DB.select( 'id','user_id','imagem', 'imagem_url','description').table('posts')
    const seriarizePhotos= photos.map(photo=>{
      return{
        ...photo,
        image_url: `http://localhost:3333/api/tmp/uploads/${photo.imagem}`
      }
    })
        return res.json(seriarizePhotos)
      
  },
  async show(req,res){
   const  id = req.params
    const photo = await DB.table('posts').select('id', 'imagem','imagem_url', "description").where( id)
    const post= photo[0]
    res.json(post)
  },
  async create (req, res){
    try {
      const userId = req.userId
      const{ filename,  location:imagem_url=''}= req.file
      const {
          description,
      } = req.body
      if(imagem_url===''){
      const imagem_url = `http://127.0.0.1:3333/api/tmp/uploads/${filename}`

          //  return res.json(imagem_url)
          const post= await DB.table('posts').insert({
            user_id: userId,
          imagem: filename,
          description,
          imagem_url: imagem_url
        });
        const data={ id: post[0], imagem: filename, description, imagem_url }
        return res.json({ data })
      }
      const post= await DB.table('posts').insert({
          user_id: userId,
        imagem: filename,
        description,
        imagem_url: imagem_url
      });
      const data={ id: post[0], imagem: filename, description, imagem_url }
      return res.json({ data })
    } catch (error) {
      return res.status(506).json({error})
    }
  },
  async destroy(req,res){
    // selecionando um usuario 
    const {id} = req.params
    const userId = req.userId
    // console.log(id, userId);
    const post =await DB.table('posts').where({id, user_id: userId})
    if(!post[0]){
      return res.status(401).json({mensagem: "vc nao é o responsavel por este post "})
    }
    // delerando um usuario
    await DB.table('posts').where({id, user_id: userId}).del()

    return res.json({mensagem: "postagem deletada com sucesso"})
  }
}
module.exports = PostController


