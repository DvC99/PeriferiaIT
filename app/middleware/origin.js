const checkOrigin = (req, res, next) => {
    const token = req.headers.autorization.split(' ').pop()
    if (token === '123456') {
        next()
    } else {
        res.status(409)
        res.send({error: 'Tocken no valido'})
    }
}

export default checkOrigin