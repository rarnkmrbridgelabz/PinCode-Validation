console.log("***** Welcome To PinCode Validation *****");

const pincodeRegex = RegExp("^[0-9]{6}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid Pin Code !!");
    else
        console.log(pincode + " : PINCODE is Invalid !");
}

validatePincode("600041");
validatePincode("6001");