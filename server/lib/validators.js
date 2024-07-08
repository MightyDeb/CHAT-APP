import {body,validationResult} from 'express-validator'
import { ErrorHandler } from '../utils/utility.js'

export const registerValidator=()=>[
  body(["name","username","password"],"Please fill in all details.").notEmpty()
]

export const validate=(req,res,next)=>{
  const errors= validationResult(req)
  const errorMessage= errors.array().map((error)=> error.msg).join(" ")
  return next(new ErrorHandler(errorMessage,400))
  if(errors.isEmpty()) return next()
}