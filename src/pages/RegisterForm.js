import "./register_form.css";
import 'survey-core/defaultV2.min.css';
import { useParams } from "react-router-dom";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const userPetInfo = {
  elements: [{
    name: "UserName",
    title: "What is your name? This will be your user id.",
    type: "text"
  }, {
    name: "Email",
    title: "What is your email address?",
    type: "text"
  }, {
    name: "PetName",
    title: "What is your pet's name?",
    type: "text"
  }]
};

const userBabyInfo = {
  elements: [{
    name: "UserName",
    title: "What is your name? This will be your user id.",
    type: "text"
  }, {
    name: "Email",
    title: "What is your email address?",
    type: "text"
  }, {
    name: "BabyName",
    title: "What is your baby's name?",
    type: "text"
  }]
};

export const RegisterForm = () => {
  const { animal_type} = useParams();
  let survey;
  switch (animal_type) {
    case "human":
      survey = new Model(userBabyInfo)
      break
    case "dog":
      survey = new Model(userPetInfo)
      break
    default:
      survey = new Model(userPetInfo)
  }
  return (
    <div className="RegisterForm" id="RegisterForm">
      <header className="RegisterForm-header" id="RegisterForm-header">
        <h1>Sign Up</h1>
      </header>
      <div class="questions" id="questions">
        <Survey model={survey}/>;
      </div>
    </div>
  );
}

export default RegisterForm;
