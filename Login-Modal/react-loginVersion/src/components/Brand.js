import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col col-lg-3'>
				<label htmlFor='brand'>Brand: <span className="required">*</span></label>
				 <select 
				 		id='brand' 	
				 		onChange={props.handleStateOnChange} 
				 		value = {props.brand} >
				 		<option defaultValue disabled>Select</option>
       				{props.makeBrandOptionMenu()}
  				</select>				
					<span id='brandImageSpan' />
		</div>
     );
}
