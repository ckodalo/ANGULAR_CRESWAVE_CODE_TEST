import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: 'app.component.html' ,
    styles: [],
})
export class AppComponent {
  title = 'taskManager';
}
