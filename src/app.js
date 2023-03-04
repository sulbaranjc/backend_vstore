console.log("hola mundo soy una API de imagenes de JC")
import express, { query } from "express"
import cors from "cors"
import indexRoutes from   "./routes/index.routes.js";
import imagesRoutes from  "./routes/images.routes.js";
import fs from 'fs';
//import path from 'path';
 

// Verificar si la carpeta ya existe
function crearCarpeta(folderName) {
  // Verificar si la carpeta ya existe
  if (!fs.existsSync(folderName)) {
    // Crear la carpeta si no existe
    fs.mkdir(folderName, (err) => {
      if (err) throw err;
      console.log(`Carpeta ${folderName} creada correctamente.`);
    });
  } else {
    console.log(`La carpeta ${folderName} ya existe.`);
  }
}

crearCarpeta('uploads');
crearCarpeta('dbimages');

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('./dbimages'))


app.use("/images",imagesRoutes)

app.use(indexRoutes)


app.use((req, res, next) => {
  res.status(404).json({ message : 'end point not found'})
})

export default app;