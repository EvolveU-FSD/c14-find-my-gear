import { Router } from "express"
import { findAllPlaygroundEquipment, findPlaygroundEquipmentById } from "../models/playgroundEquipment.js"

const router = Router()

// list all playground equipment
router.get('/', async function (req, res) {
    try {
        const equipment = await findAllPlaygroundEquipment()
        res.send(equipment)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


// get a particular piece of playground equipment
router.get('/:equipmentId', async function (req, res) {
    const id = req.params.equipmentId
    try {
        const piece = await findPlaygroundEquipmentById(id)
        res.send(piece)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router