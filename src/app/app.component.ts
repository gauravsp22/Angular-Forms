import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
}


// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
// import { DialogWithFormComponent } from './dialogWithForm.component';

// @Component({
//  selector: 'app-dialog-component',
//  templateUrl: './dialog-component.component.html',
//  styleUrls: ['./dialog-component.component.css']
// })
// export class DialogComponentComponent implements OnInit {

//  firstName: string;
//  lastName: string;
//  dialogConfig: MatDialogConfig;
//  dialogWithForm: MatDialogRef<DialogWithFormComponent>;

//  constructor(private dialogModel: MatDialog) { }

//  ngOnInit() {
//  }

//  dialogForm() {

//  // Opening the dialog component
//  const dialogWithForm = this.dialogModel.open(DialogWithFormComponent, {
//  width: '250px',
//  data: { firstName: this.firstName, lastName: this.lastName }
//  });

//  // When user close the dialog
//  dialogWithForm.afterClosed().subscribe(result => {
//  console.log('You have closed the dialog');
//  if (result) {
//  this.firstName = result.firstName;
//  this.lastName = result.lastName;
//  }
//  });
//  }

// }