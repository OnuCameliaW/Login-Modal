import React from 'react';

export default class HomePage extends React.Component {

	render() {
        return (
        	<div className = 'container' id="homepage">
        		<h1>Hello {this.props.username}</h1>
	        	<button id="backButton" className="btn btn-danger" onClick={this.props.goBack}>Back</button>
	        	<button id="homepageButton" className="btn btn-primary" onClick = {this.props.toggleModal}>Add</button>    	
       		</div>

      );
    }

}