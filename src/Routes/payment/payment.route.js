import { Router } from 'express';

import { handlePayment } from './payment.controller.js';

const paymentRouter = Router();

paymentRouter.route('/').post(handlePayment);

export default paymentRouter;
