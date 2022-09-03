const superagent = require('superagent')

const Pokemon = async (req, res, next) => {
  
  // Your code here

  res.status(200).send([])
  next()
}

module.exports = Pokemon