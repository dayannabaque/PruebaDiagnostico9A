const { Router } = require("express");
const { ConcursoTorneoController } = require("../controllers");


const router = Router();

router.get("/", ConcursoTorneoController.GetConcursoTorneos);
router.get("/:id", ConcursoTorneoController.GetConcursoTorneo);
router.post("/", ConcursoTorneoController.SaveConcursoTorneo);
router.put("/:id", ConcursoTorneoController.EditConcursoTorneo);
router.delete("/:id", ConcursoTorneoController.DeleteConcursoTorneo);


module.exports = router;