import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-6'>
			<label htmlFor = 'price'>Price: <span className="required">*</span></label>
				<input  id = 'price' 
						type='number' 
						name = 'price'
						min='0' 
						value={props.price}
						onChange = {props.handleStateOnChange}
						/>
			{props.error}						 
		</div>
     );
}
