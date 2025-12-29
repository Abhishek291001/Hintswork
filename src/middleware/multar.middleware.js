import multer from "multer";
import path from "path";
import fs from "fs";

const tempDir = "./public/temp";
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname)); 
  }
});


const imageFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Only image files allowed!"), false);
  }
  cb(null, true);
};

export const uploadImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 3 * 1024 * 1024 }, 
});

const videoFilter = (req, file, cb) => {
  const allowed = ["video/mp4", "video/webm", "video/avi", "video/mov"];
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Only video files allowed!"), false);
  }
  cb(null, true);
};

export const uploadVideo = multer({
  storage,
  fileFilter: videoFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, 
});

export const uploadAnyFile = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, 
});