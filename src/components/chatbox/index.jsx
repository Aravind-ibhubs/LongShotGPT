import React, {useState} from "react";
import queriesData from "./query";
import SidePanel from "../sidePanel";
import QueryResult from "../queryResult";
import "./style.css";

const ChatBox = () => {
    let [queryTitle, changeTitle] = useState(null);
    let [query, changeQuery] = useState(null);
    let [response, changeResponse] = useState(null);
    let [activeQuery, changeActiveQuery] = useState(null);
    let [queries,setQueries]=useState(queriesData);

    const keysOfData = Object.keys(queriesData);
    const activeData = activeQuery != null && queries[activeQuery].query_pair;

    async function getAnswerForQuery(queryQuestion){
        const longShotUrl = 'https://api-v2.longshot.ai/custom/api/generate/instruct';
        const requestBody = {
            method: 'POST',
            headers : {
              'Content-Type': 'application/json',
              'Authorization': "token"
            },
            body: JSON.stringify({"text": queryQuestion})
          }

          try {
            const req = await fetch(longShotUrl, requestBody);
            const data = await req.json();
            changeResponse(data.copies.content)
          }catch(error) {
            console.log(error)
            changeResponse("There is a internal error.Please try to regenerate after some time")
          }
    }
 
    const submitQuery = () => {
        setTimeout(() => {
            getAnswerForQuery(query);
        }, 3000);

        if (activeQuery == null) {
            setQueries({...queries, queryTitle : {query_pair: [{question : query,answer: response}]}})
        } else {
            queriesData[activeQuery].query_pair.push({question : query,answer: response});
        };

        changeTitle(null);
        changeQuery(null);
    };

    const handleTitle = (activeKeyFromPanel) => {
        changeActiveQuery(activeKeyFromPanel);
    }

    const handleNewButton = () => {
        if (activeQuery != null) {
            changeActiveQuery(null)
        }
    }

    return (
        <div className="chatbox-container">
            <SidePanel keysList={keysOfData} handleTitle={handleTitle} activeQuery={activeQuery} handleButton={handleNewButton}/>
            <div className="chatbox-query-box">
                <div className="chatbox-query-answer">
                    {activeQuery != null ? activeData.map((eachDict)=> <QueryResult question={eachDict} /> ): <></>}
                </div>
                <div className="chatbox-submition question-box">
                    {activeQuery == null && <div className="title-box"><label>Title : </label> <input type="text" onChange={(e) => changeTitle(e.target.value)} className="title-text"/></div>}
                    <div className="title-box">
                        <label>question : </label> 
                        <input 
                            placeholder="Enter your query" 
                            onChange={(event)=>changeQuery(event.target.value)}
                            className="chatbox-question"
                        />
                    </div>
                    <button onClick={submitQuery} className="submit-button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;
