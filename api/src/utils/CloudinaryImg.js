import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
  cloud_name: process.env.IMG_NAME,
  api_key: process.env.IMG_API,
  api_secret: process.env.CLOUD_IMG_SECRET,
})

export default async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file)

    return res
  } catch (error) {
    return error
  }
}
