import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-6'>
			<label htmlFor = 'mileage'>Mileage: <span className="required">*</span></label>
				<input  id = 'mileage' 
						type='number' 
						name = 'mileage' 
						min='0' 
						value={props.mileage}
						onChange={props.handleStateOnChange} 
				/>
				{props.error}							 
		</div>
     );
}
