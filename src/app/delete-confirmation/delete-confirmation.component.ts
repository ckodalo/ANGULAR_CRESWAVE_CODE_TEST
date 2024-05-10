import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  standalone: false,
  templateUrl: 'delete-confirmation.component.html',
  styles: ``
})
export class DeleteConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}

}
