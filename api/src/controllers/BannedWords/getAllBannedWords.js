import BannedWords from '../../models/BannedWords.js'

const getAllBannedWords = async (req, res) => {
  try {
    const { array } = req.query

    if (array) {
      const Words = await BannedWords.find()

      const array = Words.map((e) => e.word)

      return res.status(200).json(array)
    }

    const Words = await BannedWords.find()

    res.status(200).json(Words)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export default getAllBannedWords
