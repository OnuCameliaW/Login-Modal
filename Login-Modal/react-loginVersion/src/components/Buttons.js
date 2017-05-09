import React from 'react';

export default  function(props) {

	return( 
	 	<div>
			<input className=' btn btn-success'
					type='submit' 
					value='Next' 
					/>
			<button id='cancel'
					className='btn btn-danger'
					onClick={props.resetForm}> Reset </button>
		</div>
     );
}
