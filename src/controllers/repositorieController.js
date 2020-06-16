const { uuid } = require("uuidv4");

const repositories = [];

class repoController {

    async create(request,response){
        const { title ,url ,techs}= request.body

        const repo ={
          id:uuid(),
          title,
          url,
          techs,
          likes:0
        }

        repositories.push(repo)
        return await response.json(repo)
    }

    async list(request,response){
        return await response.json(repositories)
    }

    async update(request,response){

        const { id }= request.params

        const { title ,url ,techs}= request.body
      
        const repoIndex = repositories.findIndex(repositorie => repositorie.id === id)
      
        if(repoIndex < 0){
          return response.status(404).response.json({message:"error repositorie dont exist!"})
        }
        
        const repo ={
          id,
          title,
          url,
          techs,
          likes:0
        }
      
        repositories[repoIndex] = repo
      
        return await response.json(repo)
    }

    async delete(request,response){

        const { id }= request.params

        const repoIndex = repositories.findIndex(repositorie => repositorie.id === id)

        if(repoIndex < 0){
            return response.status(404).response.json({message:"error repositorie dont exist!"})
        }

        repositories.splice(repoIndex,1)

        return await response.status(204).json()

    }

    async like(request,response){

        const { id }= request.params


        const repoIndex = repositories.findIndex(repositorie => repositorie.id === id)
      
        if(repoIndex < 0){
          return response.status(404).response.json({message:"error repositorie dont exist!"})
        }
      
        const oldRepo = repositories[repoIndex]
      
        const repo = {
          ...oldRepo,
          likes:oldRepo.likes + 1
        }
      
        repositories[repoIndex] = repo
      
        return await response.json(repo)

    }




}

module.exports = repoController