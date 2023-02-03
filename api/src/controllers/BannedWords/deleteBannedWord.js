import BannedWords from '../../models/BannedWords.js'

const deleteBannedWord = async (req, res) => {
  try {
    const { id } = req.params

    await BannedWords.findByIdAndDelete(id)

    res.send('delete Words')
  } catch (error) {
    res.send(error.message)
  }
}

export default deleteBannedWord
