import React from 'react';
import Form from './Form';

export default  class Modal extends React.Component {

	render() {
		   return (
	       <div id = 'modal' style = {{ display: this.props.toggleModalValue  ? 'block' : 'none' }} >
	       <button id= 'close' onClick = {this.props.toggleModal}>
	       		<span>X</span>
	       	</button>
	       	<Form />
	       	</div>
        );
	}
}


