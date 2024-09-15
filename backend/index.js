import express from 'express';
import connectDB from './config/Db.js';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors'


connectDB()
const app=express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL of your frontend
  }));
app.use('/api/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("API is running...")
})


app.use(notFound);
app.use(errorHandler);
app.listen(5000,console.log("server is running at http://localhost:5000/"))