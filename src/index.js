import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Dillon Awes"
          description="Front end web developer. When not coding I am likely spending time with
        my wife and 3 daughters, reading a book, or lifting weights."
        />
        <SkillList
          skill1="React"
          skill2="CSS"
          skill3="API Integration"
          skill4="HTML"
          skill5="Dev Ops"
          skill6="Pair-programming"
        />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="DillonAwes.jpg" alt="Dillon Awes" />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="intro">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" color="skyblue" />
      <Skill skill="Javascript" color="orangered" />
      <Skill skill="CSS" color="yellow" />
      <Skill skill="HTML" color="green" />
      <Skill skill="Dev Ops" color="orange" />
      <Skill skill="Pair-programming" color="teal" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
