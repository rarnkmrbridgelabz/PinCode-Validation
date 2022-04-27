console.log("***** Welcome To PinCode Validation *****");

const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid Pin Code !!");
    else
        console.log(pincode + " : PINCODE is Invalid !");
}

validatePincode("400088");
validatePincode("A400088");
validatePincode("400088B");
validatePincode("400 088");