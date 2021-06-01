import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import "./App.css";
import Popup from "../components/Popup";
// const state = {
//     robots: 'robots',
//     searchfield:''
// }
class App extends Component {
    constructor(){
        super()
        this.state={
        //message:'TirthFans'
        robots: [],
        searchfield:'',
        popup: false
        }
        console.log("constructor");
    }
    // changeMessage =() =>{
    //    this.setState({message:"You subscribed successfully"});
    // }
    onSearchChange = (event)=>{
        
        this.setState({searchfield:event.target.value}); 
    }
   
    componentDidMount(){
        console.log("Component did Mount run!")
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json()
        })
        .then(users=>{
            this.setState({robots:users});
        })
        console.log("After setting state!");
    }
    openPopup = () => {
        this.setState({popup:true});
    }
    closePopup = () =>{
        this.setState({popup:false});
    }
    render(){
        const {robots,searchfield} = this.state;

    console.log("Render run!");

        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
return !filteredRobots.length ?
    <h1>Loading.......</h1>
 : (
    <React.Fragment>
    {this.state.popup ? <Popup closePopup ={this.closePopup}/>:""}
    <div className='tc'>
    
    <h1>RoboFans</h1>{/* {"You need to change this message when no robot name matches!"} */}
    <button onClick={this.openPopup}>open Popup</button>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <CardList robots={filteredRobots}/>
    </Scroll>
    {/* <button type="button" onClick={this.changeMessage}>SUBSCRIBE</button> */}
   
    
</div>
</React.Fragment>
 )
}
}

     
// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Tirth"
//         }
//         console.log("Inside Constructor");
//     }
// componentWillMount(){
//     console.log("Inside component will mount");
//      setTimeout(async ()=>{
//     await this.setState({name:"Arafat will"});
//     console.log("Inside setTimeout")
//     },3000)
//     console.log("I Will 2")
// }
// componentDidMount(){
//     console.log("Inside component did mount");
//     setTimeout(()=> {
//         this.setState({name:"Rekha did"});
//     },1000)
// }
// render(){
//     console.log("Inside Render");
//     return(
//         <h1>Hello world this is {this.state.name} </h1>
//     )
// }
// }
export default App;