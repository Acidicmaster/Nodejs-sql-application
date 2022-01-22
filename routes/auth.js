const router = require("express").Router();
const {
    RegisterUser,LoginUser
   } = require("../controller/auth");

router.route("/register").post(RegisterUser);
router.route("/login").post(LoginUser);


module.exports = router;