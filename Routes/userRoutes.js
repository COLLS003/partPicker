const express = require("express");
const userRouter = express.Router();

const usersController = require("../controllers/usersController")

// Route for user registration
userRouter.post("/", usersController.create);

router.get("/", usersController.index);

//* POST /api/users/ (sign up)
router.post("/", usersController.create);

//* POST /api/users/login (log in )
router.post('/login', usersController.login);

//* GET /api/users/check-token  (check token)
router.get('/check-token', usersController.checkToken);



module.exports = userRouter;