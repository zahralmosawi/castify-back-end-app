const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const imageStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'podcasts-app/images',
        resource_type: 'image',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 300, height: 300, crop: 'limit' }]
    }
});

const uploadImage = multer({storage: imageStorage});

const audioStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'podcasts-app/episodes',
        resource_type: 'video',
        allowed_formats: ['mp3', 'm4a', 'aac', 'wav', 'ogg']
    }
});

const uploadAudio = multer({storage: audioStorage});

const avatarStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'podcasts-app/avatars',
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 300, height: 300, crop: 'thumb', gravity: 'face' }]
    }
});

const uploadAvatar = multer({storage: avatarStorage});

module.exports = {cloudinary, uploadImage, uploadAudio};