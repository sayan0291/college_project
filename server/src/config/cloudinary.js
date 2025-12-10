const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async(localFilePath) => {
    if (!localFilePath) {
        return null;
    }

    try {
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        return response;
    } catch (error) {
        console.log("Cloudinary connection failed..", error.message);
    } finally {
        fs.existsSync(localFilePath) && fs.unlinkSync(localFilePath);
    }
}

module.exports = uploadToCloudinary;