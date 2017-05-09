import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col' id = 'titleCol'>
				<label htmlFor = 'title'>Title: <span className="required">*</span></label>
					<input  id = 'title' 
							type='text' 
							name = 'title' 
							value = {props.title}
							placeholder='Title' 
							onChange = {props.handleStateOnChange}  
							/>	
					{props.error}				 
		</div>
     );
}
