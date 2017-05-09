import React from 'react';

export default  function(props) {

	return( 
		<div>
		 	<textarea id='damagedDetails'
		 			  placeholder='Damaged Details...' 
		 			  required={props.damagedCheck} 
		 			  value={props.damagedDescription} 
		 			  onChange={props.handleStateOnChange}/>
		 {props.error}	
	 	</div>
     );
}
