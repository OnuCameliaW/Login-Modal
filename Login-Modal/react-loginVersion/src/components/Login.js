import React from 'react';
import { Link, browserHistory, Redirect  } from 'react-router';
import { createRouter } from 'react-context-router';


export default   React.createClass({

  contextTypes: {
    router: React.PropTypes.object,
    transitionRouter: React.PropTypes.object
  },

  getInitialState () {
    return {
      	username : "",
		password : "",
		image : "",
		jsonData : []
    };
  },
  readFile() {
		var data = [];
		 fetch('users.json')
			  .then(blob => blob.json())
			  .then(res => this.setState({jsonData: res}))
	},

	componentWillMount() {
		this.readFile();
		this.setState({
    		image : "images/default.jpg"
    	});
	},

	handleStateOnChange(e) {
		if(e.target.id == "username" )
		{
			let user = this.state.jsonData.find(element => element.username == e.target.value);
			if(typeof user != 'undefined') {
				$( "#profileImage" ).addClass( "active" );
				$( "#username" ).removeClass('unchecked').addClass("checked");
				this.setState({	
					username : user.username,
					image : user.image
	    		});
			} else {
				$( "#profileImage" ).removeClass( "active" );
				$( "#username" ).removeClass('checked').addClass("unchecked");
				this.setState({	
					username :  e.target.value,
					image : "images/default.jpg"
	    		});
			}
		}		
	},

	submitLogin(){
		let user = this.state.jsonData.find(element => element.username == this.state.username);
		if(user.password == $('#password')[0].value) {
			    event.preventDefault();
			    $( "#app" ).toggleClass( "activeHomepage" );
			this.context.router.push({
			    pathname: '/homepage',
			    state: {
			    	username: this.state.username
			    }
			}); 
		}
	}, 

  render() {
   return (
	        	<div className="container">
	        	 <div className="form-group box">
						<img id="profileImage" src={this.state.image} />
					</div>
				    <div className="form-group">
					  <label htmlFor="username">Username:</label>
					  <input type="text" 
					  		 className="form-control unchecked" 
					  		 id="username" 
					  		 value = {this.state.username}
							 placeholder='Username' 
							 onChange = {this.handleStateOnChange}  />
					</div>
					<div className="form-group">
					  <label htmlFor="pwd">Password:</label>
					  <input type="password" 
					  		 className="form-control" 
					  		 id="password" 
					  		 placeholder='Password' />
			  		   	<button className='btn btn-danger'
								onClick={this.submitLogin}
								id="loginButton"
								>
								Submit
						</button>

					</div>
				</div>
	        );
  }

  // ..
})