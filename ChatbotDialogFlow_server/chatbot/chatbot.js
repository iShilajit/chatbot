const dialogflow = require('dialogflow');
const config = require('../config/devkey')
//const privateKey=config.googlePrivateKey;
const projectId=config.googleProjectId;
const sessionId=config.dialogFlowSessionID;
const credentials={
    client_email: config.googleClientEmail,
    private_key:config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient({projectId,credentials});
//const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const  textQuery = async(userText,UserId)=>{
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+UserId);
    const request= {
        session:sessionPath,
        queryInput:{
            text:{
                text:userText,
                languageCode:config.dialogFlowSessionLanguage
            }
        }
    }

    try{
        const response = await sessionClient.detectIntent(request);
        console.log(response[0].queryResult);
        return response[0].queryResult

    }catch(err){
        console.log(err);
        return err
    }
   


}
module.exports = {
    textQuery
}