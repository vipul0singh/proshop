import express from 'express';
const router = express.Router();
import {  authUsers,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser } from '../controllers/userController.js';




router.route('/').get(getUsers).post(registerUser);

router.post('/logout', logoutUser);
router.post('/login', authUsers);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);


export default router;