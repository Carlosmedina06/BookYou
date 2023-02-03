import { Router } from 'express'

import addFavorite from '../../controllers/Favorites/addtFavorite.js'
import deleteFavorite from '../../controllers/Favorites/deleteFavorite.js'
import getFavorite from '../../controllers/Favorites/getFavorite.js'

const favorites = Router()

favorites.post('/addfavorite/:id', addFavorite)
favorites.delete('/delete/:id', deleteFavorite)
favorites.get('/', getFavorite)

export default favorites
