import axios from 'axios'
import React from 'react'
import './Chatbot.css'
const Chatbot = () => {

  const textQuery=async ()=>{
    const response = await axios.post(`http://localhost:3030/text_query`,
    {
      "text":"I want to know about the course",
      "userId":"sj-24523-88966"
  })
  console.log("response from dialogflow",response);
  }
  return (
    <div className="chatbot">
      <div className="chatbot_header">
        <h1 className="chatbot_title">My Agent</h1>
        <button className="btn">	&#10060;</button>
      </div>
      <div className="chatbot_body">
        {/* <p>hi</p> */}
      </div>
      <div className="chatbot_footer">
        
        <input type="text" placeholder="type here" className="footer_input"></input>
      <button className="footer_button" onClick={textQuery}>send</button>
      </div>
    </div>
  )
}

export default Chatbot