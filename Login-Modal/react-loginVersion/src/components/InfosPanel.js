import React from 'react';
import ButtonsInfo from './ButtonsInfo';

export default class InfosPanel extends React.Component {
	constructor(props) {
	super(props);	
	this.sendInformation = this.sendInformation.bind(this);
	}

	sendInformation(){
		$.ajax({
		  url: "*",
		  type: "post", 
		  data: JSON.stringify(this.props.responseObject),
		  success: function(response) {
		   	//success
		  },
		  error: function(xhr) {
		    //error
		  }
		});

	}

	 render() {
		 return(
	        	<div id="infosPanel" className="panel panel-default"  style = {{ display: this.props.isForm  ? 'none' : 'block' }}>
					  <div className="panel-heading">Information</div>
					  <div className="panel-body" id="formInfo">
						  <p className="info">Car Title: <span className="spanInfo">{this.props.responseObject.title}</span></p>
						  <p className="info">Brand: <span className="spanInfo">{this.props.responseObject.brand}</span></p>
						  <p className="info">Model: <span className="spanInfo">{this.props.responseObject.model}</span></p>
						  <p className="info">Year: <span className="spanInfo">{this.props.responseObject.year}</span></p>
						  <p className="info">Color: <span className="spanInfo">{this.props.responseObject.color}</span></p>
						  <p className="info">Mileage: <span className="spanInfo">{this.props.responseObject.mileage}</span></p>
						  <p className="info">Fuel: <span className="spanInfo">{this.props.responseObject.fuel}</span></p>
						  <p className="info">Damaged Details: <span className="spanInfo">{this.props.responseObject.damagedDetails}</span></p>
						  <p className="info">Price: <span className="spanInfo">{this.props.responseObject.price}</span></p>
						  <p className="info">Currency: <span className="spanInfo">{this.props.responseObject.currency}</span></p>
						  <p className="info">Car Description: <span className="spanInfo">{this.props.responseObject.carDescription}</span></p>
	  				</div>
				<ButtonsInfo 
			       	editForm = { this.props.editForm } 
			       	sendInformation = { this.sendInformation }
			       		/>
			       	
				</div>
	      ); 
	}
	}

