import React from 'react';
import App from './app';
export default  function(props) {

	return( 
	       	<div id ='overlay' onClick={props.toggleModal} style = {{ display: props.toggleModalValue  ? 'block' : 'none' }}/>
     );
}