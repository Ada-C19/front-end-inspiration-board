import React from 'react'
import './Barbies.css'

const Barbies = ({selectedTheme}) => {
    // const barbieMode = selectedTheme === 'barbie' ? 'barbie' : 'oppenheimer';
    return (
        // {`banner ${active ? "active" : ""}`}
        <div className={`team-section ${selectedTheme === 'barbie' ? 'barbie' : 'oppenheimer'}`}>
            <img src='/barbie-profiles/BarbieAngela.png' alt='barbified profile of web page creator'></img>
            <img src='/barbie-profiles/BarbieElaine.png' alt='barbified profile of web page creator'></img>
            <img src='/barbie-profiles/BarbieMaz.png' alt='barbified profile of web page creator'></img>
            <img src='/barbie-profiles/BarbieHannah.png' alt='barbified profile of web page creator'></img>
            <img src='/barbie-profiles/BarbieReina.png' alt='barbified profile of web page creator'></img> 
        </div>
    )
}

export default Barbies