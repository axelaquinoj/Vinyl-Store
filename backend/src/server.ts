import express from 'express';
import cors from 'cors';
import { sample_tags, sample_users, sample_vinyls } from './data';
import jwt from 'jsonwebtoken';
import vinylRouter from '../routers/vinyl.router'

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:['http://localhost:42000']
}));

// may just be one slash / for path
app.use('/api/vinyls', vinylRouter)
 app.post("/api/users/login",(req,res)=>{
    const{email,password} = req.body;
    const user = sample_users.find((user) => user.email === email && user.password === password );

    if (user){
        res.send(generateTokenResponse(user))
    }
    else{
        res.status(400).send('User name or password is not valid');
    }

 })

const generateTokenResponse= (user:any)=>{
const token = jwt.sign({
    email: user.email, isAdmin:user.isAdmin
}, 'SomeRandomtext',{
    expiresIn: '30d'
});
user.token = token;
return user;
 }
const port = 5000;
app.listen(port,() =>{
    console.log('website served on http://localhost:'+ port);
    
})
