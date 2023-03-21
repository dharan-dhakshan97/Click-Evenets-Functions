import React from 'react'
import "../styles/buttonstyle.css";
const Home = () => {


const handleClick = (e) => {
      console.log('Hello, World!', e);
    }

const handleClickAgain = (name, e) =>
{
  console.log(' Hello ' + name, e.target);
}





 return (
  <>

               <h2 style={{textAlign:'center'}}>HomePage</h2>
      <div className="btn">
      <button onClick={handleClick}>Click Me!</button>

      <div className="btn1">
               {/* <button onClick={handleClickAgain('Google')}> Click Me Again!</button> </div> */}


      {/* <button onClick={() =>{ 
            console.log('hello')
      }}>Click Me Again!</button> */}



{/* //Anonymous Function */}


<button onClick={(e)=> handleClickAgain('google', e) }>Click Me Again!</button>










         </div>
  </div>
  </>


  )
}

export default Home;