import React from "react";

const QueryResult = (props) => {
    let results = props.question;
    console.log(results);

    return (
        <div>
            <label>Question</label>:<p>{results.question}</p>
            <label>Answer</label>:<p>{results.answer}</p>
        </div>
    )
}

export default QueryResult;
