export class Vinyl{
    id!:string;
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    artist!: string[]; //origin
    albumLength!: string; //cook time
}