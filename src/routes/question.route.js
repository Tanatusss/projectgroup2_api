import express from 'express'
import { authCheck } from '../middlewares/authCheck.js'
import * as questionController from "../controllers/question.controller.js"


const questionRouter = express.Router()

questionRouter.post('/companyanswers/expected', authCheck, questionController.setExpectedAnswers)
questionRouter.get('/companyanswers/:jobpostId/expected', authCheck, questionController.getExpectedAnswers)

// questionRouter.post('/jobapplies/:jobApplyId/answers', authCheck, questionController.submitAnswers)
// questionRouter.get('/jobapplies/:jobApplyId/answers', authCheck, questionController.getAnswers)

questionRouter.get('/jobposts/:jobpostId/questions', authCheck, questionController.getQuestionsByJobpost)
export default questionRouter