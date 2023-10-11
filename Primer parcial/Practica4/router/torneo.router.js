const { Router } = require("express");
const { TorneoController } = require("../controllers");


const router = Router();

router.get("/", TorneoController.GetTorneos);
router.get("/:id", TorneoController.GetTorneo);
router.post("/", TorneoController.SaveTorneo);
router.put("/:id", TorneoController.EditTorneo);
router.delete("/:id", TorneoController.DeleteTorneo);


module.exports = router;