const chatbot = require('../chatbot/chatbot')
const resObj={}

module.exports = app =>{
    app.post('/text_query',async(req,res)=>{
        console.log(req);
        const {text,userId}=req.body;
        const resultQuery= await chatbot.textQuery(text,userId)
        // function in chatbot.js
            console.log(resultQuery);
           
            const resObj ={
                intentName:resultQuery.intent.displayName,
                userQuery:resultQuery.queryText,
                fullfillmentText:resultQuery.fulfillmentText
            }
           // console.log("intt",resObj.intentName);
       // res.send("Text Query")
       res.send(resObj)
       // res.send(resultQuery[0].queryResult.intent.displayName)
    })
    // app.post('/event_query',(req,res)=>{
    //     console.log(req);
    //     res.send("Text Query")
    // })
}