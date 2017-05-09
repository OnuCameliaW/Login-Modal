import React from 'react';

export default  function(props) {

	return( 
		<div>
		 	<textarea id='carDescription'
		 			  placeholder='Car Description...' 
		 			  value = {props.carDescription} 
		 			  onChange = { props.handleStateOnChange }/>
	 	</div>
     );
}
