import { Router } from "express";
import { createCharacter, deleteCharacter, findAll, findOne, updateCharacter } from "../controllers/personajes.controllers.js"

const router = Router()

router.get("/", findAll)

router.get("/:id/:nombre", findOne)

router.post("/", createCharacter)

router.put("/:id", updateCharacter)

router.delete("/:id", deleteCharacter)

export default router