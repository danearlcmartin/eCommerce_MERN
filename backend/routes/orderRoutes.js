import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';

router.route('/').post(protect, addOrderItems);
route.route('/:id').get(protect, getOrderById);
route.route('/:id/pay').put(protect, updateOrderToPaid);
route.route('/myorders').get(protect, getMyOrders);

export default router;
