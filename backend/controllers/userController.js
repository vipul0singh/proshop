import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public
const authUsers = asyncHandler(async (req, res) => {
 res.send('authUsers');
});

// @desc    register users
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
 res.send('registerUser');
});


// @desc    logout users
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
 res.send('logoutUser');
});

// @desc    get user profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
 res.send('getUserProfile');
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
 res.send('updateUserProfile');
});

// @desc    get user 
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
 res.send('getUsers');
});

// @desc    get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
 res.send('getUserById');
});


// @desc    delete user 
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('deleteUser');
});

// @desc    update user 
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('updateUser');
});

export {
  authUsers,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser
};