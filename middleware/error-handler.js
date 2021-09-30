const { CustomAPIError } = require('../errors/custom-error')

exports.errorHandler = (err, req, res, next) => {
    if(err instanceof CustomAPIError)  return res.status(err.status).json({ msg: err.message })
    return res.status(500).json({ msg:'Something went Wrong, please try again'})
}