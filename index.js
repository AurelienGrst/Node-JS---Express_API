import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);

// Root endpoint
app.get('/', (req, res) =>
    res.send(`Serveur node et express sur le port ${PORT}`)
);

// Start server
app.listen(PORT, () =>
    console.log(`Votre serveur est sur le port ${PORT}`)
);
