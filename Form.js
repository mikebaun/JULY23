var Form = {
	validateLength : function(input_name){
		if (input_name.length < 3 && ( input_name || !input_name.length == 0)) {
			return 'is less than 3 characters long.';
			};
		if (input_name.length > 50 ) {
			return 'is more than 50 characters long.';	
			};
		return '';	
	},
	
	validateNotBlank : function(input_name) {
		if  ( !input_name || input_name.length == 0) {
			return 'is blank.';
			} ;
		return '';
		},
		
	validateIsNumber: function(input_name) {
		if (isNaN(input_name)) {
			return 'is not a number.'; 
			} ;
		return '';
		}
	}	


