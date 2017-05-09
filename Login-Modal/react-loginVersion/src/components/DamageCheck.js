import React from 'react';

export default  function(props) {

	return( 
	 	<div className= 'col' id = 'damagedCol'>
			<label htmlFor = 'damaged'>The car is damaged: </label>
				<input  id = 'damaged' 
						type='checkbox' 
						name = 'damaged' 					
						onChange = {props.handleStateOnChange}
						checked={props.damagedCheck} />					 
		</div>
     );
}
