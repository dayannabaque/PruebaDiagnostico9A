const { Router } = require("express");
const { ParticipacionController } = require("../controllers");


const router = Router();

router.get("/", ParticipacionController.GetParticipacions);
router.get("/:id", ParticipacionController.GetParticipacion);
router.post("/", ParticipacionController.SaveParticipacion);
router.put("/:id", ParticipacionController.EditParticipacion);
router.delete("/:id", ParticipacionController.DeleteParticipacion);


module.exports = router;