import 'express-async-errors';
import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';




// routers
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'
import testRouter from './routes/testRouter.js'
import discussRouter from './routes/discussRouter.js'
import resultRouter from './routes/resultRouter.js'
// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';


const app = express()

dotenv.config()

if(process.env.NODE_ENV=== 'development'){
    app.use(morgan('dev'))
}

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/v1/test', (req, res) => {
    res.json({msg :'test route'})
})



app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tests', testRouter);
app.use('/api/v1/discuss', discussRouter);
app.use('/api/v1/result', resultRouter);



app.use('*', (req, res) => {
    res.status(404).json({msg :'not found'})
})

app.use(errorHandlerMiddleware)



const port = process.env.PORT || 5100

try{

    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server running on PORT ${port}...`);
    })

}catch(err){
    console.log(err);
    process.exit(1);
}

