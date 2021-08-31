import React from 'react';


const SimpleLayout = ({children})=>{
    return(
        <div style = {{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <h1>OpenSky</h1>
            <div style = {{padding: '20px 20px'}}>{children}</div>
        </div>
    )
}

export default SimpleLayout;