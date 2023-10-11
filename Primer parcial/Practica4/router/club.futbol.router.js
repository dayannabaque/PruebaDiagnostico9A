const { Router } = require("express");
const { ClubFutbolController } = require("../controllers");


const router = Router();

router.get("/", ClubFutbolController.GetClubFutbols);
router.get("/:id", ClubFutbolController.GetClubFutbol);
router.post("/", ClubFutbolController.SaveClubFutbol);
router.put("/:id", ClubFutbolController.EditClubFutbol);
router.delete("/:id", ClubFutbolController.DeleteClubFutbol);


module.exports = router;