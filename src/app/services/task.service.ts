import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { MOCK_TASKS } from '../data/mock-tasks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(MOCK_TASKS);

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  getTask(taskId: string): Observable<Task> {
     
    return this.tasks.pipe(
      map(tasks => tasks.find(task => task.id == taskId)),

      map(task => {

        if (!task) {

          throw new Error(`Task with ID ${taskId} not found`);
        }
        return task;
      })
    );

  } 

  addTask(task: Task): void {
    const currentTasks = this.tasks.value;
    currentTasks.push(task);
    this.tasks.next(currentTasks);
  }

  editTask(task: Task): void {
    const currentTasks = this.tasks.value;
    const index = currentTasks.findIndex(t => t.id === task.id);
    console.log(index)
    if (index !== -1) {
      MOCK_TASKS[index] = task;
      this.tasks.next([...MOCK_TASKS]);
    }
  }

  deleteTask(taskId: string): void {
    const index = MOCK_TASKS.findIndex(t => t.id === taskId);
    console.log(index);
    if (index !== -1) {
      MOCK_TASKS.splice(index, 1);
      this.tasks.next([...MOCK_TASKS]);
    }
  }
}
