import { cloudinary } from "../config/cloudinary.js";


export const uploadToCloudinary = async(file) => {
  try{
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "projectgroup",
      transformation: [{ width: 800, height: 600, crop: 'limit' }],
    });
    return result.secure_url; // Return the secure URL of the uploaded image
  }catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
}

export const deleteFromCloudinary = async(publicId) => {
  try{
    const result = await cloudinary.uploader.destroy(publicId)
    return result; 
  }catch(error){
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete image");
  }
}