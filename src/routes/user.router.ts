//Routes to created new querys using entities structure

import {Router} from 'express'

const router= Router();

router.get('/hello',(req,res)=>res.send(('Hello World')))

export default router

