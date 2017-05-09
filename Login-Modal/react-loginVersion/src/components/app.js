import React from 'react';
import { Link, browserHistory, Redirect  } from 'react-router';
import { createRouter } from 'react-context-router';
import Overlay from './overlay';
import HomePage from './HomePage';
import Modal from './Modal';

export default  React.createClass({
	contextTypes: {
    	router: React.PropTypes.object,
    	transitionRouter: React.PropTypes.object
  	},
  	getInitialState () {
	    return {
	    	display : false,
			infos : {}
	    };
  	},
	goBack() {
		event.preventDefault();
		$( "#app" ).toggleClass( "activeHomepage" );
		this.context.router.push({
			pathname: '/login'
		}); 
	},

	toggleModal() {
		$( "#modal" ).addClass( "active" );
		this.setState({
  			display: !this.state.display,
		});
	},

  	render() {
  		let { location } = this.props;
   		return (
        	<div>
				<Overlay 
	            		toggleModal = { this.toggleModal }
	            		toggleModalValue = { this.state.display }  />

	                <HomePage 
	                	toggleModal = { this.toggleModal } 
	                	username = {location.state.username}
	                	goBack = {this.goBack}/>  

	                <Modal 
	                	toggleModal = { this.toggleModal } 
	                	toggleModalValue = { this.state.display } />
			</div>
	        	);
  }
})