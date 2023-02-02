import BannedWords from '../../models/BannedWords.js'

const addBannedWord = async (req, res) => {
  try {
    const { word } = req.body

    const cate = new BannedWords({ word })

    await cate.save()

    res.send('add Banned Words')
  } catch (error) {
    res.send(error.message)
  }
}

export default addBannedWord
