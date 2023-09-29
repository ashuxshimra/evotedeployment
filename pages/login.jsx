import React from 'react'
import {useSession,signIn,signOut} from 'next-auth/react'
import Link from 'next/link';
const login = () => {
    const {data: session}=useSession()
    if(session){
        return(
    <div className="text-3xl sm:text-5xl text-white text-gradient py-1">
        <div className="heading">
        <p style={{color:"white",textAlign:"center",fontFamily:"monospace"}} >
      Welcome, {session.user.name} 🚀 </p></div>
      <img src={session.user.image} alt='' style={{borderRadius:"50px",marginLeft:"46vw",marginTop:"5vw",width:"8vw"}}/>

      <button className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
  style={{
    color: "white",
    marginLeft: "42vw",
    marginTop: "0.7vw",
    backgroundColor: "transparent",
    borderRadius: "0.7vw",
    padding: "0.3vw",
    border: "1px solid white",
    transition: "background-color 0.3s, color 0.3s", // Add transitions for both background and text color
    alignItems:"center  ",
    fontFamily:"monospace"
}}
  onClick={() => signOut()}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Transparent white background
    e.target.style.color = "white"; // Dark text color
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black"; // Restore background color on hover out
    e.target.style.color = "white"; // Restore text color on hover out
  }}
>
  Sign Out
</button>
      <br/>
      <Link style={{color:"white",textAlign:"center",borderRadius:"1.6vw", marginLeft:"20vw",border: "1px solid white",    fontFamily:"monospace"
,
    transition: "background-color 0.3s, color 0.3s", // Add transitions for both background and text color
    alignItems:"center  "}}   onMouseEnter={(e) => {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Transparent white background
        e.target.style.color = "white"; // Dark text color
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "black"; // Restore background color on hover out
        e.target.style.color = "white"; // Restore text color on hover out
      }} href="/homepage">
          Proceed to Manage Vote System.
        </Link>
    
    </div>
        )
    } else{
        return(
            
            <div style={{textAlign:"center"}} className="text-3xl sm:text-5xl text-white text-gradient py-1">
            <div className="below">
            <h1 className="text-left mt-5 text-white font-light md:w-10/12 w-11/12 text-base" style={{color:"snow",fontSize:"2vw",lineHeight:"4vw",fontWeight:"initial"}}>
                This is a Secured Decentralized E-Vote Application 💻 <br></br> You are currently not signed in 🛑<br></br> Please Sign In by authenticating yourself first to move further 🌐
                </h1>
                </div>
                <img style={{borderRadius:"1vw",marginTop:"2vw"}} src='https://i.pinimg.com/originals/4b/e7/c7/4be7c71b56398a2eaba0ced4c3c8d1af.gif' alt=''/>
                <button style={{color:"snow",transition: "background-color 0.3s, color 0.3s",fontFamily:"monospace",border: "1px solid white",
}} onClick={()=>signIn()} onMouseEnter={(e) => {    
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Transparent white background
    e.target.style.color = "white"; // Dark text color
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black"; // Restore background color on hover out
    e.target.style.color = "white"; // Restore text color on hover out
  }}>
                    SignIn🔑
                </button>
            
            </div>
        )
    }
}

export default login
