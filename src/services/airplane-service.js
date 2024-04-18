// 
const {StatusCodes}=require('http-status-codes')

const {AirplaneRepository}=require('../repositories')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane=await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name=='TypeError'){
        throw new AppError('Cannot create a new Airplane objct',StatusCodes.INTERNAL_SERVER_ERROR);
    } 
    throw error;
}
}

module.exports = createAirplane;
