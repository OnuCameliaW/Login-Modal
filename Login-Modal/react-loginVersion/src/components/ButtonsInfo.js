import React from 'react';

export default  function(props) {

	return( 
	 	<div>
			<button className=' btn btn-success'					 
					onClick={props.sendInformation} > Save </button>
			<button id='cancel'
					className='btn btn-danger'
					onClick={props.editForm}> Edit </button>
		</div>
     );
}
