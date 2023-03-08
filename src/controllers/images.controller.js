import { pool } from "../db.js"
import fs from "fs";


export const listImage = async (req, res)=> {
  try{
    const [rows] = await pool.query("SELECT * FROM image")
    const images = [];
    rows.map(img => {
      const namefile='JC-'+img.id.toString().padStart(5, "0")+'.png'
      fs.writeFileSync('./dbimages/'+namefile,img.data)
      // namefiles.push(namefile)
      images.push({
        id : img.id,
        namefile : namefile,
        titulo : img.titulo,
        descripcion : img.descripcion,
        precio : img.precio,
        existencia : img.existencia
      })
    })
    // console.log(images);
    res.json(images) 
    
  }catch(error){
    return res.status(50).json({message : "Something goes wrong"})
  }

}

