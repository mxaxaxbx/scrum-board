import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
// Material
import { 
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
// interfaces
import { BoardI } from 'src/app/interfaces/board';
// services
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.scss']
})
export class SaveTaskComponent implements OnInit {

  public messsage: string;
  public horizontalPosition: MatSnackBarHorizontalPosition;
  public verticalPosition: MatSnackBarVerticalPosition;
  durationInSeconds: number = 2;
  public registerData: BoardI;
  selectedFile: any;

  constructor(
    private boardSvc: BoardService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.clearData();
  }

  ngOnInit(): void {
  }

  saveTask(): void {
    if( !this.registerData.name || !this.registerData.description ) {
      this.messsage = 'Ingrese todos los datos';
      this.openSnackBarError();
      return;
    }

    if( this.selectedFile ) return this.saveTaskImg();

    this.boardSvc.saveTask(this.registerData).subscribe(
      (res) => {
        console.log(res);
        this.messsage = 'Tarea guardada!';
        this.openSnackBarSuccessfull();
        this.router.navigate(['/listTask']);
        this.clearData();
        
      },
      (err) => {
        this.messsage = err.error;
        this.openSnackBarError();
        console.log(err);
        
      }
    )

  }

  openSnackBarSuccessfull(): void {
    this.snackbar.open(this.messsage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['snackbar-true'],
    });
  }

  openSnackBarError(): void {
    this.snackbar.open(this.messsage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['snackbar-false'],
    });
  }

  clearData(): void {
    this.registerData = {
      name: '',
      description: '',
    }
    this.selectedFile = null;
  }

  uploadImg(ev: any): void {
    this.selectedFile = <File>ev.target.files[0];    
  }

  saveTaskImg(): void {
    const data = new FormData();

    data.append('image', this.selectedFile, this.selectedFile.name);
    data.append('name', this.registerData.name);
    data.append('description', this.registerData.description);

    this.boardSvc.saveTaskImg(data).subscribe(
      (res) => {
        console.log(res);
        this.messsage = 'Tarea guardada!';
        this.openSnackBarSuccessfull();
        this.router.navigate(['/listTask']);
        this.clearData();
        
      },
      (err) => {
        this.messsage = err.error;
        this.openSnackBarError();
        console.log(err);
        
      }
    )
    return;
  }

}
