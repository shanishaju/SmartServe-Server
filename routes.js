const express = require('express');
const menuController= require("./controller/menuController")
const router = new express.Router();




router.post("/addmenu",menuController.addmenuController);
router.get("/getmenus",menuController.getmenuController);
router.get("/getmenuitems/:id",menuController.getmenuItemByIdController);


module.exports = router;