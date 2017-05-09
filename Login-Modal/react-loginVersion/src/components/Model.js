import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-3' id='modelCol'>
				<label htmlFor='model'>Model: <span className="required">*</span></label>
				<select  id='model'
						onChange = {props.handleStateOnChange} 
						value = {props.model}
						>					
					{props.options}
				</select>
			{props.error}					 
		</div>
     );
}
