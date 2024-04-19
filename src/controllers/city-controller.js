
const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const {ErrorResponse,SuccessResponse}= require('../utils/common');


async function createCity(req, res) {
    try {
        console.log(req.body);
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.data=city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error=error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);

    }
}

// async function getAirplanes(req,res){
// try{
//     const airplanes=await AirplaneService.getAirplanes();
//     SuccessResponse.data=airplanes;
//         return res
//             .status(StatusCodes.OK)
//             .json(SuccessResponse);
// }
// catch(error) {
//     ErrorResponse.error=error;
//     return res
//         .status(error.statusCode)
//         .json(ErrorResponse);


// }
// }

// //  airplaes/:id
// async function getAirplane(req,res){
//     try{
//         const airplanes=await AirplaneService.getAirplane(req.params.id);
//         SuccessResponse.data=airplanes;
//             return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     }
//     catch(error) {
//         ErrorResponse.error=error;
//         return res
//             .status(error.statusCode)
//             .json(ErrorResponse);
    
    
//     }
//     }

//     async function destroyAirplane(req,res){
//         try{
//             const airplanes=await AirplaneService.destroyAirplane(req.params.id);
//             SuccessResponse.data=airplanes;
//                 return res
//                     .status(StatusCodes.OK)
//                     .json(SuccessResponse);
//         }
//         catch(error) {
//             ErrorResponse.error=error;
//             return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
        
        
//         }
//         }

module.exports = {
    createCity,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane
}
