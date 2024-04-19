// 
const {StatusCodes}=require('http-status-codes')

const {CityRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository();


async function createCity(data){
    try{
        const city=await cityRepository.create(data);
        return city;
    }
    catch(error){
        if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError'){
            let explanation =[];
            error.errors.forEach((err)=>{
                explanation.push( err.message);
            })
        throw new AppError('Cannot create a new Airplane objct',StatusCodes.INTERNAL_SERVER_ERROR);
    } 
    throw error;
}
}

//get all airplkanes

// async function getAirplanes(){
//     try{
//         const airplanes=await airplaneRepository.getAll();
//         return airplanes;
//     }
//     catch(error){
//         throw new AppError('Can not fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
//     }
//     }

//     async function getAirplane(id){
//         try{
//             const airplanes=await airplaneRepository.get(id);
            
//             return airplanes;

//         }catch(error){
//             if (error.statusCode===StatusCodes.NOT_FOUND){
//                 throw new AppError('The airplane you requested is not present', StatusCodes.INTENAL_SERVICE_ERROR)
//             }
//             throw new AppError('Can not fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
//         }

//     }

//     async function destroyAirplane(id){
//         try{
//             const response=await airplaneRepository.destroy(id);
//             return response;
//         }
//         catch(error){
//             if (error.statusCode===StatusCodes.NOT_FOUND){
//                 throw new AppError('The airplane you requested  to delete is not present', StatusCodes.INTENAL_SERVICE_ERROR)
//             }
//             throw new AppError('Can not fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
//         }
//         }


module.exports = {
    createCity,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane
}

