import { Schema, model } from "mongoose";

export interface Vinyl{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favorite:boolean;
    stars:number;
    imageUrl:string;
    artist: string[]; //origin
    albumLength: string; //cook time
}

export const VinylSchema = new Schema<Vinyl>(
    {
            //id: {type:String, required:true, unique:true},
            name: {type: String, required:true},
            price: {type: Number, required:true},
            tags: {type: [String]},
            favorite: {type: Boolean, default:false},
            stars: {type: Number, required:true},
            imageUrl: {type: String, required:true},
            artist: {type: [String], required:true},
            albumLength: {type: String, required:true}

    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true

    }
);

export const VinylModel = model<Vinyl>('vinyl', VinylSchema);