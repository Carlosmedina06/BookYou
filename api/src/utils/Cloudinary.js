import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: 'dmhvfzifr',
  api_key: '361419295531342',
  api_secret: 'vw3SryTpbVa5KlhRh_b8lDsOSXQ',
})

export default async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file)

    return res
  } catch (error) {
    return error
  }
}
