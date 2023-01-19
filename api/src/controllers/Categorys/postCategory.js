import Categorys from '../../models/Category.js'
const postCategory = async (req, res) => {
  try {
    const { categorys } = req.body
    let cate

    categorys.forEach(async (category) => {
      cate = await new Categorys({ category })
      await cate.save()
    })
    res.send('add categorys')
  } catch (error) {
    res.send(error.message)
  }
}

export default postCategory
