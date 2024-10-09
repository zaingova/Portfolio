import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import userRoutes from './routes/user.routes.js'
import contactRoutes from './routes/contact.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(Template());
})

// selecting what middleware to use for the backend
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', userRoutes)
app.use('/', contactRoutes)
//app.use('/', authRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app