import React , {Component} from 'react';
import SearchBox from '../Components/searchBox';
import '../Components/Scroll'
import CardList from '../Components/CardList';
// import {robots} from './Robots';
import	'./app.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			// robots: robots,
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>this.setState({robots: users}));
		}

	onSearchChange= (event)=>
	{
		this.setState({searchfield: event.target.value})

	}
	
	render() {
			const {robots,searchfield}=this.state;
			const filterRobots= robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())

		})
			return !robots.length ? 
			<h1>Loading</h1> :
      		(
       		 <div className='tc'>
          		<h1 className='f1'>RoboFriends</h1>
          		<SearchBox searchChange={this.onSearchChange}/>
          		<scroll>
           		 <CardList robots={filterRobots} />
         		 </scroll>
        		</div>
					);
			}
		
}

export default App;


// // // 	super()
// // // 	this.state {
// // // 		robots: {robots};
// // // 		searchfield=''
// // // 	}
// // // }

// // const state= {
// // 	robots: robots,
// // 	searchfield:''
// // }
// // const App=()=>{
// // 	return(
// // 		<div className='tc'>
// // 		<h1> Robot Friends </h1>
// // 		<SearchBox />
// // 		<CardList robots= {robots}/>
// // 		</div>
// // 	)
// // }
