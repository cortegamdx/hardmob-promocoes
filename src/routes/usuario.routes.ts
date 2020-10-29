import {Router} from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService'


const usuarioRoutes = Router();
const authenticateUserService = new AuthenticateUserService();

usuarioRoutes.post('/',(req,res)=>{
try{

  const msg = authenticateUserService.execute(req,res);
 
}catch(err){

  return res.status(200).json({error: err.message});
}

})



export default usuarioRoutes;