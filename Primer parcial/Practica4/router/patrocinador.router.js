const { Router } = require("express");
const { PatrocinadorController } = require("../controllers");


const router = Router();

router.get("/", PatrocinadorController.GetPatrocinadors);
router.get("/:id", PatrocinadorController.GetPatrocinador);
router.post("/", PatrocinadorController.SavePatrocinador);
router.put("/:id", PatrocinadorController.EditPatrocinador);
router.delete("/:id", PatrocinadorController.DeletePatrocinador);


module.exports = router;