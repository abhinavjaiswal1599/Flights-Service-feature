// 
const {StatusCodes}=require('http-status-codes')

const {AirportRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')

const airportRepository = new AirportRepository();

async function createAirport(data){
    try{
        const airport=await airportRepository.create(data);
        return airport;
    }
    catch(error){
        if(error.name=='SequelizeValidationError'){
            let explanation =[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
        throw new AppError('Cannot create a new Airport objct',StatusCodes.INTERNAL_SERVER_ERROR);
    } 
    throw error;
}
}

//get all airplkanes

async function getAirports(){
    try{
        const airports=await airportRepository.getAll();
        return airports;
    }
    catch(error){
        throw new AppError('Can not fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
    }

    async function getAirport(id){
        try{
            const airports=await airportRepository.get(id);
            
            return airports;

        }catch(error){
            if (error.statusCode===StatusCodes.NOT_FOUND){
                throw new AppError('The airports you requested is not present', StatusCodes.INTENAL_SERVICE_ERROR)
            }
            throw new AppError('Can not fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
        }

    }

    async function destroyAirport(id){
        try{
            const response=await airportRepository.destroy(id);
            return response;
        }
        catch(error){
            if (error.statusCode===StatusCodes.NOT_FOUND){
                throw new AppError('The airport you requested  to delete is not present', StatusCodes.INTENAL_SERVICE_ERROR)
            }
            throw new AppError('Can not fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        }


module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}

