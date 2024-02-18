import { Router } from "express";

const router = Router()



import { createDiscuss, getAllDiscuss, updateDiscuss, getDiscuss } from "../controllers/discussController.js";



router.route('/').get(getAllDiscuss).post(createDiscuss)
router.route('/:id').patch(updateDiscuss).get(getDiscuss)

export default router;