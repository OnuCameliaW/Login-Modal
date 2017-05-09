import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-6'>
			<label htmlFor='priceCurrency'>Currency: <span className="required">*</span></label>
				<select  id='currency' 				
						onChange = {props.handleStateOnChange} 
						value = {props.currency}  >
					<option defaultValue disabled>Select</option>
					<option value='ron'>RON</option>
					<option value='euro'>EURO</option>
					<option value='usd'>USD</option>
				</select>
			{props.error}						 
		</div>
     );
}
 