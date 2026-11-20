import { TaskItem } from './TaskItem';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTask] = useState([
    {
      id: '1',
      title: 'Learning React props',
      completed: false,
    },
    {
      id: '2',
      title: 'Building a task list ',
      completed: true,
    },
    {
      id: '3',
      title: 'Testing the Task list',
      completed: false,
    },
  ]);

  function handleToggle(id: string) {
    setTasks(prevTasks) => prevTasks.map((task)))
  }

  return <TaskItem />;
}
