import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-3'>
				<label htmlFor = 'color'>Color: <span className="required">*</span></label>
				<span id='colorValue'>{props.color}</span>
				<input  id = 'color' 
						type='color' 
						name = 'color' 
						onChange = {props.handleStateOnChange} />
				{props.error}						 
		</div>
     );
}
