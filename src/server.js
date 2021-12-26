import express, { json, urlencoded } from 'express';
import path from 'path';
import listEndpoints from 'express-list-routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import { paymentRouter } from './Routes/index.js';

if (process.env.NODE_ENV !== 'production') dotenv.config();
const PORT = process.env.PORT || 5000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
	apiVersion: '2020-08-27'
});

const app = express();

const stripeMiddleware = (req, _res, next) => {
	req.stripe = stripe;
	next();
};

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (_, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use('/api/payment', stripeMiddleware, paymentRouter);

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI || '');
		app.listen(PORT, () => {
			if (process.env.NODE_ENV !== 'production') listEndpoints(app);
			console.log(`Server started on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
})();
