import React from 'react';


export default class Portrait extends React.Component {
	constructor(){
		super();
		this.state = {
			link : ""
		}
	}

	componentDidMount(){
		this.testImage(this.props.link)
	}

	testImage(URL){
		var test = new Image();
		test.onload=this.imageFound.bind(this);
		test.onerror=this.imageNotFound.bind(this);
		test.src=URL
	}

	imageFound(){
		this.setState({link : this.props.link})
	}

	imageNotFound(){
		this.setState({link: "https://tax-march.github.io/phone_your_rep/reps/images/person.png"})
	}

	render() {

			return (<img className="card-photo" src={this.state.link}/>)

  	}
};
