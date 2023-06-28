const loggingMdw = (req, res, next) =>{
    console.log(`Call made toresourse ${req.method}`)

    console.log(`Authorization: ${req.get('Authorization')}`)

    

    next()
}

module.exports = loggingMdw