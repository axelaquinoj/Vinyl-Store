 
import { sample_tags, sample_vinyls } from "../src/data";
import { Router } from "express";
const vinylRouter = Router();

 
vinylRouter.get('/search/:search', (req,res)=>
{
    const searchTerm = req.params.search;
    const vinyls =  sample_vinyls.filter(vinyl => vinyl.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    res.send(vinyls);
})
vinylRouter.get('/tags',(req,res)=>{
    res.send(sample_tags);
})
vinylRouter.get('/tag/:tag',(req,res)=>{
    const tagName = req.params.tag;
    const vinyls = sample_vinyls.filter(vinyl => vinyl.tags?.includes(tagName));
    res.send(vinyls);
 })
 vinylRouter.get('/:vinylId',(req,res)=>{
    const vinylID = req.params.vinylId;
    const vinyl = sample_vinyls.find(vinyl => vinyl.id == vinylID);
    res.send(vinyl);
 })

 export default  vinylRouter;
