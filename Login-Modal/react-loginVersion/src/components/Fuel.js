import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col'>
				<label htmlFor='fuel col-lg-6'>Fuel: <span className="required">*</span></label>
				<select  id='fuel' 				
						onChange = {props.handleStateOnChange} 
						value = {props.fuel}  >
					<option defaultValue disabled>Select</option>
					<option>Premium</option>
					<option>Super</option>
					<option>Euro Super</option>
				</select>
			{props.error}					 
		</div>
     );
}
