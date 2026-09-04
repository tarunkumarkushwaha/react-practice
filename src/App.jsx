import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import Timer from "./components/Timer";
import Dictionary from "./components/Dictionary";
import Data from "./components/Data";
import Pagination from "./components/Pagination";
import ValidatedForm from "./components/ValidatedForm";
import UnoptimizedApp from "./components/unoptimisedfn";
import OptimizedApp from "./components/optimisedfn";
import JSCheatSheet from "./components/Notes";
import Navbar from "./components/Navbar";
import { Practice } from "./components/Practice";
import InterviewPlaybook from "./components/Notes/Interviewquestions";
import DockerCheatSheet from "./components/Notes/docker-cheat-sheet";
import FloatingButton from "./components/Floaating";

function App() {
  const [test, setTest] = useState(false);
  const [subject, setSubject] = useState("javascript");

  const subjectObj = {
    javascript: <JSCheatSheet />,
    Docker: <DockerCheatSheet />,
    interview: <InterviewPlaybook />,
  };

  return (
    <>
      <Navbar
        setTest={setTest}
        isTestActive={test}
        setSubject={setSubject}
        subjectObj={subjectObj}
      />
      <div className="card">
        {!test ? (
          subjectObj[subject]
        ) : (
          <>
            <p>Test components</p>
            <Practice />
            <div className="min-h-screen bg-gray-100">
              <FloatingButton
                onClick={() => alert("Floating Button Clicked")}
              />
            </div>
            {/* <Pagination/> */}
            {/* <Dictionary /> */}
            {/* <UnoptimizedApp /> */}
            {/* <p>optimisedfn</p> */}
            {/* <OptimizedApp /> */}
            {/* <ValidatedForm/> */}
            {/* <TodoList /> */}
            {/* <Data/> */}
            {/* <Form/> */}
            {/* <Timer/> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
