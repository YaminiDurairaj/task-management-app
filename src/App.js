import "./App.css";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);

  const [singleTask, setSingleTask] = useState("");
  const [singleDes, setSingleDes] = useState("");

  const updateTasks = (id) => {
    setTasks(Tasks.map((t) => (t.id == id ? { ...t, complete: true } : t)));
  };

  const deleteTasks = (id) => {
    setTasks(Tasks.filter((t) => (t.id == id ? false : true)));
  };
  const addToCard = () => {
    const id = Tasks.length == 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
    };
    setTasks([...Tasks, taskDetail]);
  };
  const clearInput = () => {
    setSingleTask("");
    setSingleDes("");
  };
  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };
  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };
  const handleInput = () => {
    setAdd(!add);
  };
  return (
    <div className="main">
      <div className="inputSection">
        <Header handleInput={handleInput} />
        {add == true ? (
          <>
            <CustomInput
              value={singleTask}
              placeholder="Enter Task"
              name="Task"
              change={handleCustomTask}
            />
            <CustomInput
              value={singleDes}
              placeholder="Enter Description"
              name="Description"
              change={handleCustomDes}
            />
            <div className="btnWrapper">
              <CustomButton
                bg="#D82148"
                color="white"
                name="Save Task"
                click={addToCard}
              />
              <CustomButton
                bg="#F8CBA6"
                color="black"
                name="Cancel"
                click={clearInput}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="cardSection">
        {Tasks.map((t) => (
          <Card
           
            title={t.task}
            des={t.des}
            id={t.id}
            key={t.id}
            delete={() => deleteTasks(t.id)}
            update={() => updateTasks(t.id)}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
