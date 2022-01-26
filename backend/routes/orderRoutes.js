import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleWare.js';

route.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
route.route('/:id').get(protect, getOrderById);
route.route('/:id/pay').put(protect, updateOrderToPaid);
route.route('/myorders').get(protect, getMyOrders);

export default router;
