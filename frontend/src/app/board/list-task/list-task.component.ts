import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";
import { BoardService } from 'src/app/services/board.service';
import { BoardI } from 'src/app/interfaces/board';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition;
  public verticalPosition: MatSnackBarVerticalPosition;
  public registerData: any;
  public taskData: BoardI[];
  public durationInSeconds: number = 2;


  constructor(
    private _boardService: BoardService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.taskData = [];
    this.registerData = {};
    this.message = '';
    this.horizontalPosition = 'end';
    this.verticalPosition = 'top';
  }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this._boardService.listTask().subscribe(
      (res:any) => {
        console.log(res.data);
        this.taskData = res.data;
      },
      (err) => {
        console.log(err);
        this.message = err.error();
        this.openSnackBarError();
      }
    );
  }


  updateTask(task: BoardI, status: string) {
    const payload = {
      ...task,
      task_status: status
    }
    
    this._boardService.updateTask(payload).subscribe(
      (res) => {
        console.log(res);
        this.getAllTasks();
        this.message = 'actualizado';
        this.openSnackBarSuccessfull();

      },
      (err) => {
        console.log(err.error.response);
        this.message = err.response;
        this.openSnackBarError();
        
      }
    )
  }

  deleteTask(task: BoardI) {
    this._boardService.deleteTask(task).subscribe(
      (res) => {
        console.log(res);
        this.getAllTasks();
        this.message = 'tarea eliminada';
        this.openSnackBarSuccessfull();
        
      },
      (err) => {
        console.log(err.error.response);
        this.message = err.response;
        this.openSnackBarError();
      }
    );

  }

  openSnackBarSuccessfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse']
    });
  }
}
