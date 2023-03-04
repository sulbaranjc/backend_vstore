import { listImage } from "../controllers/images.controller.js"
import {Router} from "express";
import multer from "multer";

const router = Router();

const diskstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+'-JC-'+file.originalname)
  }
})

const fileUpload = multer({
  storage: diskstorage
}).single('image')

router.get("/", listImage)


export default router