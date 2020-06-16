const { uuid, isUuid } = require("uuidv4");

const verify = (request,response,next)=>{
    const { id } = request.params
  
    if(!isUuid(id)){
      return response.status(400).send({error:"Id not exist"})
    }
  
    return next()
}

module.exports = verify