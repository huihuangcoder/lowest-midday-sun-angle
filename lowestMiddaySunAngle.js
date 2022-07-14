/*!
 * calculate Midday Sun Angle on Winter Solstice (or Summer Solstice for Southern Hemisphere)
 * @author Hui Huang <huihuangcoder@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

/**
 * @param {Number} latitude - needed for the calculation
 * 
 * @returns {Number} degrees (NOT radians) - rounded to two places after decimal separator
 */
function calcLMSA(latitude) {
    // if latitude is not even a number
    if (!(typeof latitude === 'number' && !isNaN(latitude))) {
        return -1;
    }

    latitude = Math.abs(latitude);
    
    // invalid latitude [0° <-> 90°]
    if (latitude > 90) {
        return -1;
    }

    /*
     Tropic of Cancer 23°26′10.9″ (or 23.43636°) north of the Equator
     Tropic of Capricorn 23°26′10.9″ (or 23.43636°) south of the Equator
     */
    const latitudeOfTOC = 23.43636;
    let sunAngle = 90 - latitudeOfTOC - latitude;
    if (sunAngle <= 0) {
        return 0;
    } else {
        return Number(sunAngle.toFixed(2));
    }
}
