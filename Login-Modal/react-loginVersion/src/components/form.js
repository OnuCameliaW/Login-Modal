import React from 'react';
import Modal from './Modal';
import Title from './Title';
import Brand from './Brand';
import Model from './Model';
import Year from './Year';
import Color from './Color';
import Fuel from './Fuel';
import Mileage from './Mileage';
import DamageCheck from './DamageCheck';
import DamageDetails from './DamageDetails';
import Price from './Price';
import PriceCurrency from './PriceCurrency';
import CarDescription from './CarDescription';
import Buttons from './Buttons';
import ButtonsInfo from './ButtonsInfo';
import InfosPanel from './InfosPanel';

export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isForm: true,
			title: '',
			brand: '',
			model: '',
			options: '',
			year: '',
			color: '',
			fuel: '',
			mileage: '',
			damagedCheck: false,
			damagedDetails: '',
			price: '',
			currency: '',
			carDescription: '',
			options: '',
			responseObject : {},
			jsonData : []
		};	
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.createOptionMenu = this.createOptionMenu.bind(this);
		this.handleChangeBrand = this.handleChangeBrand.bind(this);
		this.handleChangeDamagedCheck = this.handleChangeDamagedCheck.bind(this);
		this.createImgElement = this.createImgElement.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.createError = this.createError.bind(this);
		this.handleStateOnChange = this.handleStateOnChange.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.editForm = this.editForm.bind(this);
		this.readFile = this.readFile.bind(this);
		this.makeBrandOptionMenu = this.makeBrandOptionMenu.bind(this);

	}

	componentDidMount() {
		var color = document.getElementById('color').value;
		document.getElementById('colorValue').innerHTML=color;
		var currentTime=new Date();
		document.getElementById('year').max=currentTime.getFullYear();
		this.setState({
    		color: color
    	}); 
    	this.readFile();
	}
	toggleForm() {
		$( "#infosPanel" ).toggleClass( "activeHomepage" );
		this.setState({
    		isForm: !this.state.isForm
    	});
	}

	readFile() {
	 fetch("file.json")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({jsonData: json});
                    });
	}

	handleStateOnChange(e){
		let onChangeId = [e.target.id];
		let onChangeValue = e.target.value;
		this.setState({
    		[e.target.id]: e.target.value
    	}, 
    		function() {
    			if(onChangeId == 'damaged'){
    				this.handleChangeDamagedCheck();
    			}
    			else if(onChangeId == 'title'){
    				this.handleChangeTitle();
    			}	
    			else if(onChangeId == 'brand'){
    				this.handleChangeBrand();
    			}

    			if(onChangeValue != '' && document.getElementById(`${onChangeId}Error`) != null)
    			{
    		
    				document.getElementById(`${onChangeId}Error`).style.display = 'none';	
    			}
    			else if(document.getElementById(`${onChangeId}Error`) != null)
    			{
    			
    				document.getElementById(`${onChangeId}Error`).style.display = 'block';
    			}					
    	});
	}

	handleChangeTitle() {
		if(this.state.title.length < 10 && document.getElementById('titleErrorOnKeyUp') == null) {
			 this.createError('The field has to be 10 characters long', 'titleErrorOnKeyUp').insertAfter('#title');			
		}
		else if(this.state.title.length >= 10) {
			document.getElementById('titleErrorOnKeyUp').style.display = 'none';		
		}
  	}

	handleChangeBrand() {
		this.createError('', 'brand');

		let carModel = this.state.brand;
		$('#brandImageSpan').css('display', 'inline-block');
		this.createImgElement('images/'+carModel+'.png');		
		this.createOptionMenu(this.state.jsonData.find(r => r.brand == carModel).options, 'model');
  	}

  	createImgElement(imgPath) {
  		const element = <img id='brandImage' src={imgPath} />;
		ReactDOM.render(
		  element,
		  document.getElementById('brandImageSpan')
		);
  	}

	makeBrandOptionMenu() {
		let items = [];
	 		this.state.jsonData.map(
				opt=>items.push(<option key={opt.brand} value={opt.brand}>{opt.brand.toUpperCase()}</option>)
			);   
		return items;
	}

	createOptionMenu(arrayOfOptions, selectIdMenu){
	let items = [];
	items.push(<option disabled defaultValue>Select</option>);
    document.getElementById(selectIdMenu).style.display = 'inline-block';
    document.getElementById('modelCol').style.display = 'inline-block';
	arrayOfOptions.map(
		opt=>items.push(<option key={opt} value={opt}>{opt}</option>)
		);  
     this.setState({
    		options: items
    	});
     this.setState({
    		model: arrayOfOptions[0]
    	});
	}

	handleChangeDamagedCheck(){
		this.setState({
    		damagedCheck: !this.state.damagedCheck
    	}, function(){
    		if(this.state.damagedCheck == true) {   			
    			damagedDetails.style.display = "block";
    		}
    		else {
    			damagedDetails.style.display = "none";
    		}
    	}); 
	}

	createError(errorMessage, errorType) {
		let error = $(`<span class='error' id=${errorType} > ${errorMessage} </span>`);
		return error;
	}

	validateForm() 
	{
		let currentTime=new Date();
		let isFormOk = 1;
		for (var [key, value] of Object.entries(this.state)) {
			if(value == '' && document.getElementById(`${key}Error`) == null && key != "carDescription" && key != "model" && key != "damagedCheck"){	
				if(this.state.damagedCheck == false && key == 'damagedDetails' ) { continue;} else {
					//Daca eroarea nu exista, se insereaza imediat dupa input
						this.createError('Required', `${key}Error`).insertAfter('#' + key);
			   			isFormOk = 0;	
				}
			}
		}
		return isFormOk;
	}
	editForm() {
		this.setState({
    		isForm: !isForm
    	});
	}

	resetForm(event) {
		this.setState({
    		title: '',
			brand: '',
			model: '',
			year: '',
			fuel: '',
			mileage: '',
			damagedCheck: false,
			damagedDetails: '',
			price: '',
			currency: '',
			carDescription: ''
    	});
    	$('#modelCol').css('display', 'none');
    	$('#brandImageSpan').css('display', 'none');
    	
		let errorExist = document.getElementsByClassName("error");
		if(errorExist.length != 0)
    		$('.error').remove();
    	damagedDetails.style.display = "none";
    	event.preventDefault();
	}

	handleOnSubmit(event) {
		if(this.validateForm() == 0)
		{
			event.preventDefault();

		}
		else {
			let responseObject = {
				title: this.state.title,
				brand: this.state.brand,
				model: this.state.model,
				year: this.state.year, 
				color: this.state.color,
				fuel: this.state.fuel,
				mileage: this.state.mileage,
				isCarDamaged: this.state.damagedCheck,
				damagedDetails:this.state.damagedDetails != '' ? this.state.damagedDetails : '', 
				price: this.state.price, 
				currency: this.state.currency,
				carDescription: this.state.carDescription != '' ? this.state.carDescription : ''
			};	
			this.toggleForm();
			this.setState({
    			responseObject: responseObject
    		});
		}
	event.preventDefault();
	}

	render() {
		return( 
			<div>
		       	<form onSubmit={this.handleOnSubmit} 
		       			className="form-horizontal" 
		       			id='form' 
		       			style = {{ display: this.state.isForm  ? 'block' : 'none' }}>
		       	 <div className="form-group">
		       		<Title 
		       			title = { this.state.title }
		       			handleStateOnChange = { this.handleStateOnChange }
		       			validateTitle = { this.validateTitle }/>
		       	</div>
		       	 <div className="form-group">
		       		<Brand 
		       			brand = { this.state.brand } 
		       			handleStateOnChange = {this.handleStateOnChange}
		       			makeBrandOptionMenu = {this.makeBrandOptionMenu}
		       			imgSrc= {this.state.imgSrc}  />
		       		<Model 
		       			
		       			model = {this.state.model}
		       			handleStateOnChange = {this.handleStateOnChange}  
		       			options = {this.state.options }/>
		       		<Year 
		       			year = { this.state.year }
		       			handleStateOnChange = { this.handleStateOnChange}  />
		       		<Color 
		       			color = { this.state.color }
		       			handleStateOnChange = { this.handleStateOnChange } />
		       	</div>
		       	<div className="form-group">
		       		<Fuel 
		       			fuel = { this.state.fuel }
		       			handleStateOnChange = { this.handleStateOnChange } />
		       		<Mileage 
		       			mileage = { this.state.mileage }
		       			handleStateOnChange = { this.handleStateOnChange }  />
		       	</div>
		       	<div className="form-group">
		       		<DamageCheck 
		       			damagedCheck = { this.state.damagedCheck }
		       			handleStateOnChange = { this.handleStateOnChange }  />
		       		<DamageDetails 
		       			damagedDescription = { this.state.damagedDescription }
		       			handleStateOnChange = { this.handleStateOnChange }
		       			damagedCheck= {  this.state.damagedCheck } />
		       	</div>
		       	<div className="form-group">
		       		<Price 
		       			price = {this.state.price}
		       			handleStateOnChange = { this.handleStateOnChange }  />
		       		<PriceCurrency 
		       			currency = { this.state.currency }
		       			handleStateOnChange = {this.handleStateOnChange}/>
		       	</div>
		       	<div className="form-group">
		       		<CarDescription 
		       			carDescription = { this.state.carDescription }
		       			handleStateOnChange = { this.handleStateOnChange }  />
		       	</div>
		       	<div className="form-group">
		       		<Buttons 
		       			resetForm = { this.resetForm } 
		       			next = { this.toggleForm } 
		       		/>
		       	</div>
		       	</form>
		       <InfosPanel 
       				isForm = { this.state.isForm }
       				editForm = { this.toggleForm }
       				responseObject = {this.state.responseObject} 
       			/>
		    </div>
       	      
	     );
	}
}