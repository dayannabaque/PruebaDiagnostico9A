const { Router } = require("express");
const { MembresiaController } = require("../controllers");


const router = Router();

router.get("/", MembresiaController.GetMembresias);
router.get("/:id", MembresiaController.GetMembresia);
router.post("/", MembresiaController.SaveMembresia);
router.put("/:id", MembresiaController.EditMembresia);
router.delete("/:id", MembresiaController.DeleteMembresia);


module.exports = router;