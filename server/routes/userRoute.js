const express = require("express");
const router = express.Router();


//import controller
const {signup , login , updateUser , deleteUser , getAllUsers} = require("../controllers/User")



router.post("/signup", signup);
router.post("/login", login);
router.put("/update-users", updateUser);
router.delete("/delete-user", deleteUser);
router.get("/all-user", getAllUsers);


module.exports = router;



