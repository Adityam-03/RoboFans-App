import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
// const state = {
    // robots: robots,
    // searchfield:''
// }
class App extends React.Component {
    constructor(){
        super()
        this.state={
        //message:'TirthFans'
        robots: robots,
        searchfield:''
        }
    }
    // changeMessage =() =>{
    //    this.setState({message:"You subscribed successfully"});
    // }
    onSearchChange = (event)=>{
        
        this.setState({searchfield:event.target.value}); 
    }
    
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
     return(
        <div className='tc'>
        <h1>RoboFans</h1>
        {/* <button type="button" onClick={this.changeMessage}>SUBSCRIBE</button> */}
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
    </div>
     )
    }
}
export default App;