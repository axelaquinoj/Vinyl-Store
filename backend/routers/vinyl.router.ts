 
import { sample_tags, sample_vinyls } from "../src/data";
import { Router } from "express";
const vinylRouter = Router();

import asyncHandler from 'express-async-handler';
import { VinylModel, VinylSchema } from "../src/models/vinyl.model";

vinylRouter.get('/', asyncHandler(
    async (req,res)=>{
        const vinyls = await VinylModel.find();
        res.send(vinyls);
    }
))

vinylRouter.get('/seed', asyncHandler(
     async (req,res)=>{
        const vinylsCount = await VinylModel.countDocuments();
        if (vinylsCount > 0){
            res.send('Seed is already done');
            return;
        }
        await VinylModel.create(sample_vinyls);
        res.send('Seed is Done');
    })
)
 
vinylRouter.get('/search/:search', asyncHandler( async(req,res)=>
{
    const searchRegex =  new RegExp(req.params['search'],'i');
    const vinyl = await VinylModel.find({name: {$regex:searchRegex}})
    const searchTerm = req.params.search;
    const vinyls =  sample_vinyls.filter(vinyl => vinyl.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    res.send(vinyls);
}))
vinylRouter.get('/tags', asyncHandler(

async (req,res)=>{
    const tags = await VinylModel.aggregate([
        {
            $unwind: '$tags'
    },
    {
        $group:{
            _id: '$tags',
            count:{$sum: 1}
        }
    },
    {
        $project:{
            _id: 0,
            name: '$_id',
            count: '$count'
        }
    }
]).sort({count: -1});

const all ={
    name: 'All',
    count: await VinylModel.countDocuments()
};
    tags.unshift(all);
    res.send(tags);
}))
vinylRouter.get('/tag/:tag', asyncHandler(
    async (req,res)=>{
        const tag = await VinylModel.find({tags: req.params['tag']});
        res.send(tag);
     })
)

 vinylRouter.get('/:vinylId', asyncHandler(
    async (req,res)=>{
        const vinyl = await VinylModel.findById(req.params['vinylId']);
        res.send(vinyl);
    })
 )

 export default  vinylRouter;
