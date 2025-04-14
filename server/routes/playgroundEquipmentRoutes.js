import { Router } from "express"
import { findPlaygroundEquipmentInBoundingBox, findPlaygroundEquipmentById } from "../models/playgroundEquipment.js"

const router = Router()

// list all playground equipment
router.get('/', async function (req, res) {
    try {
        const north = Number.parseFloat(req.query.north)
        const west = Number.parseFloat(req.query.west)
        const south = Number.parseFloat(req.query.south)
        const east = Number.parseFloat(req.query.east)
        const equipment = await findPlaygroundEquipmentInBoundingBox(north, west, south, east)
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