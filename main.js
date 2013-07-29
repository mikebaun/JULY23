function validateForm() {

	var errorMessage ;
	var errorString ;
	
	errorMessage = '';
	errorString = '';
	
	// Validate First Name
	errorString = Form.validateNotBlank(first_name.value);
		if (errorString != '') {
		errorMessage = 'First Name ' + errorString +  '</br>' ;
	};
	
	
	errorString = Form.validateLength(first_name.value);
	if (errorString != '') {
		errorMessage = errorMessage + 'First Name ' + errorString +  '</br>' ;
	};
	
	
	// Validate Last Name
	errorString = Form.validateNotBlank(last_name.value);
		if (errorString != '') {
		errorMessage = errorMessage +  'Last Name ' + errorString +  '</br>' ;
	};
	
	errorString =   Form.validateLength(last_name.value);
	if (errorString != '') {
		errorMessage = errorMessage +  'Last Name ' +  errorString + '</br>' ;
	};
	
	
	
	// Validate Zip Code
	errorString = Form.validateNotBlank(zip_code.value);
	if (errorString != '') {
		errorMessage = errorMessage + 'ZipCode ' + errorString +  '</br>' ;
	};
	
	errorString = Form.validateIsNumber(zip_code.value);
	if (errorString != '') {
		errorMessage = errorMessage + 'ZipCode ' + errorString +  '</br>' ;
	};
	
	
	displayError(errorMessage);
	
	return false;
}

function displayError(errorString) {
	document.getElementById("errors").innerHTML = errorString;
	return false;

}
