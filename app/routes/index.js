const express = require("express")
const router = express.Router()
const fs = require("fs")

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWhitOutExt = removeExtension(file);
    const skip = ['index'].includes(fileWhitOutExt)
    if (!skip) {
        router.use(`/${fileWhitOutExt}`, require(`./${fileWhitOutExt}`))
        console.log('CARGA RUTA ---->', fileWhitOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({
        error: 'Not found'
    })
})

module.exports = router