import express from 'express';
import cors from 'cors';
import { sample_tags, sample_users, sample_vinyls } from './data';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors({
    credentials:true,
    origin: ['http://localhost:4200']
}));
app.use(express.json())
app.get('/api/vinyls',(req,res)=>{
    res.send(sample_vinyls);
})
app.get('/api/vinyls/search/:search', (req,res)=>
{
    const searchTerm = req.params.search;
    const vinyls =  sample_vinyls.filter(vinyl => vinyl.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    res.send(vinyls);
})
app.get('/api/vinyls/tags',(req,res)=>{
    res.send(sample_tags);
})
 app.get('/api/vinyls/tag/:tag',(req,res)=>{
    const tagName = req.params.tag;
    const vinyls = sample_vinyls.filter(vinyl => vinyl.tags?.includes(tagName));
    res.send(vinyls);
 })
 app.get('/api/vinyls/:vinylId',(req,res)=>{
    const vinylID = req.params.vinylId;
    const vinyl = sample_vinyls.find(vinyl => vinyl.id == vinylID);
    res.send(vinyl);
 })

 app.post("/api/users/login",(req,res)=>{
    const{email,password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password );

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
