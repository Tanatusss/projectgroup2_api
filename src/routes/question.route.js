import express from 'express'
import { authCheck } from '../middlewares/authCheck.js'


const router = express.Router()

// POST /companyanswers/expected
router.post('/companyanswers/expected', authCheck, setExpectedAnswers)
router.get('/companyanswers/:jobpostId/expected', authCheck, getExpectedAnswers)

router.post('/jobapplies/:jobApplyId/answers', authCheck, submitAnswers)
router.get('/jobapplies/:jobApplyId/answers', authCheck, getAnswers)

router.get('/jobposts/:jobpostId/questions', getQuestionsByJobpost)
export default router