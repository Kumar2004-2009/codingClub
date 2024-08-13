import * as fs from 'fs';
export default async function handler(req,res){
    if(req.method === 'POST'){
        console.log(req.body);
        let data=await fs.promises.readdir('contactData');
        fs.writeFile(`contactData/${data.length+1}.json`,JSON.stringify(req.body),(err)=>{
            if(err){
                console.log(err);
            }
        })
        res.status(200).json(req.body)
    }
    else{
        res.status(200).json({"allBlogs":"hello"});
    }
}