import React,{useState} from 'react';
import './App.css';

const Section = ()=>{


const component1 =() =>{
return(
    <div className="alignDes">
    <h2>Learn</h2>
    <p className="description">Explore the best out of our courses with Navilearn</p>
</div> 
)
}
const component2 =() =>{
    return(
        <div className="alignDes">
        <h2>Educate</h2>
        <p className="description">Explore the best out of our courses with Navilearn</p>
    </div> 
    )
    }
    const component3 =()=>{
        return(
            <div className="alignDes">
            <h2>Help</h2>
            <p className="description">Explore the best out of our courses with Navilearn</p>
        </div> 
        )
        }
const [activeComponent, setActiveComponent] = useState('component1')
    return(
        <div className="AlignAll">
        <div className="alignList">
        <div className="buttonList">
            <button onClick={ ()=> setActiveComponent('component1')} className="navbutton" type="button">Learn</button>
            <button onClick={ ()=> setActiveComponent('component2')} className="navbutton" type="button">Educate</button>
            <button onClick={ ()=> setActiveComponent('component3')} className="navbutton" type="button">Help</button>
        </div>
        {activeComponent === 'component1' ? component1() : activeComponent === 'component2' ? component2() : activeComponent === 'component3' ? component3() : component1()}
       
      
        {/* <div className="alignDes">
            <h2>Learn</h2>
            <p className="description">Explore the best out of our courses with Navilearn</p>
        </div> */}
        </div>
        </div>
    )
}

export default Section





