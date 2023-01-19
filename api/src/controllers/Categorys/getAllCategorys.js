import Categorys from '../../models/Category.js'
const getAllCategorys = async (req, res) => {
  const category = await Categorys.find()

  res.json(category)
}

export default getAllCategorys
