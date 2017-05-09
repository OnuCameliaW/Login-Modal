import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-3'>
				<label htmlFor = 'year'>Year: <span className="required">*</span></label>
					<input  id = 'year' 
							type='number' 
							name = 'year' 
							min='1900'
							max='' 
							value = {props.year}
							onChange = {props.handleStateOnChange}
					/>
					{props.error}						 
		</div>
     );
}
