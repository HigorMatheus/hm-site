const DB = require('../database/conectDB')
const bcrypt = require('bcryptjs')

//inportando function de token 
const generateToken = require('../config/auth/generateToken');

const UserController = {

    async index(req,res){
        
        const users =  await DB.select( 'id','name','email').table('users')
        // const seriarizePhotos= photos.map(photo=>{
        //   return{
        //     ...photo,
        //     avatar_url: `http://localhost:3333/api/uploads/${photo.avatar}`
        //   }
        // })
            return res.json({users})
    },

    async show(req,res){
        const  id = req.params
        //  console.log(id);
        const users = await DB.table('users').select('id', 'name', "email").where( id)
        const user= users[0]
        if(!user){
            res.json({mensagem:'usuario nao existe'})
        }
        // const seriarizePhoto= {
        //     ...user,
        //     avatar_url: `http://localhost:3333/api/uploads/${user.avatar}`
        // }
        res.json({user})
    },

    async create(req, res){
        // return res.json({ data: req.body })
        try {
            const {
                name,
                email,
                password,
                confirma_password
            } = req.body
    
            if (password != confirma_password) {
                return  res.json({mensagem: 'as senhas nao batem'});
            }
        
            bcrypt.genSalt(10,(error,salt)=>{
                bcrypt.hash(password,salt, async (error,hash)=>{
                    if(error){
                        req.json('erro ao salvar usuario')
                        res.redirect("/")
                    }
                    const user = await DB.table('users').insert({
                        name,
                        email,
                        password: hash
                    })
                    const data = {
                        id:user[0],
                        name : name,
                        email : email,
                        token : generateToken({ id: user[0]})
                    }
                    return res.status(201).json( data )
                })
            })
            
        } catch (error) {
            return res.status(400).json({ error })
        }
    },

    async auth(req,res){
       //  return  res.json({ola })
        // recebendo parametros do formulario
        const{ email, password}= await req.body;
        // buscando os email no banco de dados 
        const user = await DB.table('users').where({email});
        //informado que o email não esta cadastrado 
        if(!user || (user && user.length == 0)){
          return  res.status(401).json({mensagem: 'Email ou senha estao incorretos '})
        }
        //verificando se a password esta correta 
        const ispassword = await bcrypt.compare( password, user[0].password);
        //informando que a password esta incorreta 
        if(!ispassword){
          return res.status(401).json({mensagem: 'Email ou senha estao incorretos '})
        }

        const data = {
          user: user[0].id,
          name: user[0].name,
          telephone: user[0].telephone,
          email: user[0].email,
          token : generateToken({ id: user[0].id})
        }
        return res.status(200).json(data);
    },

    async update(req,res){
        const{ name, email, password } = req.body;
        const id = req.params
    
       const user = await DB.table('users').update({
            name,
            email,
            password,
        }).where(id)

        const dateuser={
            id: user,
            name : name,
            email : email
        }
        return res.json(dateuser)
    },
    
    async destroy(req,res){
        const id = req.params
        // console.log(id);
        // delerando um usuario
        await DB.table('users').where(id).del()
        return res.json({mensagem: "usuario deletado com sucesso"})
    }
}
module.exports = UserController


