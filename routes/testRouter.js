import  { Router} from 'express'
const router = Router()

import { getAllTests, createTest, getTest } from '../controllers/testController.js'


//router.get('/', getAllJobs)
//router.post

router.route('/').get(getAllTests).post( createTest)
router.route('/:id').get(getTest)

export default router;