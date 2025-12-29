import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const fixedPath = localFilePath.replace(/\\/g, "/");

    const response = await cloudinary.uploader.upload(fixedPath, {
      resource_type: "image",
      folder: "brands",    
    });

    
    fs.unlinkSync(localFilePath);

    return response;

  } catch (error) {
    console.log("Cloudinary upload error:", error);

    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};


export const deleteFromCloudinary = async (fileUrl) => {
  try {
    if (!fileUrl) return null;
    const publicId = extractPublicId(fileUrl);
    if (!publicId) return null;

    const result = await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    console.log("Cloudinary delete result:", result);  // useful for debugging
    return result;

  } catch (error) {
    console.log("Cloudinary delete error:", error);
    return null;
  }
};

const extractPublicId = (fileUrl) => {
  try {
    // fileUrl example:
    // https://res.cloudinary.com/invoicemodule/image/upload/v1765436220/brands/1765436220782-585785659.jpg

    const url = new URL(fileUrl);
    const parts = url.pathname.split("/"); 
    const filename = parts.pop();          
    const fileWithoutExt = filename.split(".")[0]; 

   
    const publicId = `brands/${fileWithoutExt}`;
    return publicId;

  } catch (err) {
    console.log("EXTRACT PUBLIC ID ERROR:", err);
    return null;
  }
};
