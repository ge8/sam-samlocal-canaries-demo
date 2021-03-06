'use strict';

function queryParamAsNumber(name, event, defaultVal) {
    let val = event.queryStringParameters[name];
    return val ? parseFloat(val[0]) : defaultVal;
}

exports.handler = (event, context, callback) => {
    try {
        let left = queryParamAsNumber("left", event, 0);
        let right = queryParamAsNumber("right", event, 0);

        // Intentional Mistake: Should be Multiplying
        let result = (left + right).toString(); 
        

        callback(null, {
            statusCode: 200,
            body: result
        });
    } catch(error) {
        callback(error, {
            statusCode: 500,
            body: "Unexpected faillure processing your calculation" 
        });
    }
}
