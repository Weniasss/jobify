import { Router } from "express";
const router = Router()

import { createResult, getAllResults, getResultsById } from "../controllers/resultController.js";

router.route('/').post(createResult).get(getAllResults)
router.route('/:id').get(getResultsById)


export default router;