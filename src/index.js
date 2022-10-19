import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {FaSearch} from 'react-icons/fa'
import './style.css';
import colorLine from './Images/colorline.gif'
import Rover from './Images/rover-windows-xp.gif'


const appElement = document.getElementById('app')



const Puppybowl = () => {
    
    const [puppyPlayers,setPuppyPlayers] = useState()
    
    useEffect(() => {
        async function fetchPuppyData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");
                const puppyData = await response.json();
                console.log("This is the translated JSON response:", puppyData);
                console.log("This dat puppy data fo shizzle:", puppyData.data.players);
                
                setPuppyPlayers(puppyData.data.players)
            
            } catch (error) {
                console.log(error);
            }
        }
        fetchPuppyData()
}, [])
    
    return (
            <div>

                <div id='search'>
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit"><FaSearch /></button>
                </div>

                <div className='titleCard'>
                    <img src={colorLine} id='colorLine'></img>
                    <h1>Puppy Bowl</h1>
                    <img src={Rover} id='Rover'></img>
                    <h2>Behold! Puppies!</h2>
                    <img src={colorLine} id='colorLine'></img>
                </div>                
                
                


                <div>
                    {
                        puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {                        
                            return (
                            
                            <div className="PuppyCard" key={idx}>
                                {console.log(puppy.name)}
                                <p>Name of Puppy: {puppy.name} #{puppy.id}</p>
                                <p>Breed: {puppy.breed}</p>
                                <p>Status: {puppy.status}</p>
                                <p>Entered: {puppy.createdAt}</p>
                                <p>Qualified: {puppy.updatedAt}</p>
                                <p>Want to know more about {puppy.name}?  <button id='infoButton'>Click Here!</button></p>
                                <img className='puppyImage' src={puppy.imageUrl} />
                            </div>
                            
                        )}) : <p>Puppy sleeping yo</p>
                    }
                </div>
            </div>
    )
}

ReactDOM.render(<Puppybowl />, appElement)