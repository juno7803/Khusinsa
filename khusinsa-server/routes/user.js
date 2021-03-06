const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const AuthMiddleware = require('../middlewares/auth');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.get('/cloth', UserController.getClothAll);
router.get('/cloth/:id',UserController.getClothById);
router.post('/cloth',UserController.createCloth);
router.put('/cloth/:id', UserController.updateCloth);
router.delete('/cloth/:id', UserController.deleteCloth);

/* 
    ✔️ update profile
    METHOD : POST
    URI : localhost:3000/user/profile
    REQUEST HEADER : JWT
    REQUEST BODY : ⭐️image file ⭐️
    RESPONSE DATA : user profile
*/
// checkToken middleware를 거쳐서 token이 유효한지 확인(로그인 이후엔 계속)
// router.post('/profile', AuthMiddleware.checkToken, UserController.updateProfile);

module.exports = router;