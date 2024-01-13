const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({message: err.message})
}

export default httpError