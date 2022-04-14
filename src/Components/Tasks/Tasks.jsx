import React, {useState} from 'react'
import { Task } from './Task';


export const Tasks = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Go to Gym", isComplete: false },
        { id: 2, title: "Go to Office", isComplete: true },
        { id: 3, title: "Go to College", isComplete: false },
        { id: 4, title: "Go to Home", isComplete: true },
        { id: 5, title: "Go to Market", isComplete: false },
        { id: 6, title: "Go to Park", isComplete: true },
      ]);

      const updateStatus = (id, status) => {
        let index = tasks.findIndex(t => t.id === id);
        let clone = [...tasks];
        clone[index].isComplete = status;
        setTasks(clone);
      };
    
      const handleDelete = id => {
        let result = tasks.filter(t => t.id !== id);
        setTasks(result);
      };
    
      const createTask = e => {
        let title = e.target.value;
        if (e.key === "Enter" && title.length >= 3) {
          setTasks([{ id: tasks.length + 1, title, isComplete: false }, ...tasks]);
        }
      };

  return (

    <div>
        <input type="text" className='mt-5' placeholder='Enter Your work' onKeyUp={createTask} />
        {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              updateStatus={updateStatus}
              onDelete={handleDelete}
            />
      ))}

    </div>
  )
}
