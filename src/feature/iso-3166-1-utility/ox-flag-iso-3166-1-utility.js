/**
 * @file Ox Flag ISO 3166-1 utility
 * @author Ian Maurmann
 * @copyright (c) 2022 - Ian Maurmann
 * @license MIT
 */



// Check if Ox Flag object exists
if( typeof OxFlag === 'undefined' || OxFlag === null || OxFlag === false){
    var OxFlag = {};
}

// ______________________________

// Check if Ox Flag ISO 3166-1 utility exists
if( typeof OxFlag.ISO_3166_1_utility === 'undefined' || OxFlag.ISO_3166_1_utility === null || OxFlag.ISO_3166_1_utility === false){
    OxFlag.ISO_3166_1_utility = {};
}



OxFlag.ISO_3166_1_utility.getCodes = function(){

    let codes = {
        // North America
        'america' : ['United States of America' , 'US', 'USA', '840'],
        'canada'  : ['Canada'                   , 'CA', 'CAN', '124']
    };

    return codes;
};


// ______________________________
