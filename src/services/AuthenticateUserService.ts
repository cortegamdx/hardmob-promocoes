import {Request,Response} from 'express'
import usuariosDB from '../data/usuarios'

export default class AuthenticateUserService{

  public execute(req :Request, res : Response): Promise<any>{
    if(req.body.user){
      const usuarios = usuariosDB.usuarios.data;
       usuarios.forEach(usuario => {
           if(usuario.usuario === req.body.user){
            return res.status(200).json({message:"Bem vindo: " + usuario.usuario});
           }
       });
       throw new Error("Usuario: " + req.body.user + " não encontrado");
   }else{
       throw new Error("Usuario não informado");
   }
  }

}

