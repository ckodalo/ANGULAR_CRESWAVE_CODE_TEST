import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: 'task-details.component.html',
  styles: ['task-details.component.css']
})
export class TaskDetailsComponent {

  taskForm: FormGroup; // Declare taskForm Formup

  taskId: string | null = null;
  task!: Task;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private taskService: TaskService) {

      this.taskForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        status: [false]
      });
     }

    ngOnInit(): void {
      // Fetch task details and patch the form
      this.taskId = this.route.snapshot.paramMap.get('id');
      if (this.taskId) {
        this.taskService.getTask(this.taskId).subscribe(task => {
          if (task) {
            this.taskForm.patchValue(task);
          }
        });
      }
    }

  

  onSubmit(): void {
    console.log(this.taskId)
    if (this.taskForm && this.taskForm.valid) {
      const updatedTask: Task = { ...this.taskForm.value };

      if (this.taskId)
      updatedTask.id = this.taskId
      this.taskService.editTask(updatedTask);
      this.router.navigate(['/tasks']);
    }
  }

  // onSubmit(): void {
  //   this.taskService.editTask(this.task);
  //   this.router.navigate(['/tasks']);
  // }

}
