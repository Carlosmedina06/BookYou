import { Router } from 'express'

import addBannedWord from '../../controllers/BannedWords/addBannedWord.js'
import deleteBannedWord from '../../controllers/BannedWords/deleteBannedWord.js'
import getAllBannedWords from '../../controllers/BannedWords/getAllBannedWords.js'

const bannedWordsRouter = Router()

//= ======================Banned Words================================
bannedWordsRouter.get('/', getAllBannedWords)
bannedWordsRouter.post('/addword', addBannedWord)
bannedWordsRouter.delete('/delete/:id', deleteBannedWord)

export default bannedWordsRouter
