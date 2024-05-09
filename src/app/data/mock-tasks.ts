import { Task } from "../models/task.model";

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description for Task 1',
    status: false // Incomplete
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description for Task 2',
    status: true // Complete
  },

];
