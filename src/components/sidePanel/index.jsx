import React from "react";
import './style.css';

const SidePanel = (props) => {
  let keysList = props.keysList;
  let handleTitle = props.handleTitle;
  let activeQuery = props.activeQuery;
  let handleButton = props.handleButton;

  return (
    <aside className="side-planel">
      <div>
      {keysList.map((keyItem, index) => (
        <h4 key={index} onClick={() => handleTitle(keyItem)} className={activeQuery === keyItem ? "active-box" : ""}>
          {keyItem}
        </h4>
      ))}
      </div>
      <button onClick={handleButton} className="new-query-button">New Query</button>
    </aside>
  )
}

export default SidePanel;
