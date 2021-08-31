import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BoardI } from '../interfaces/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private env: string;

  constructor(
    private _http: HttpClient,
    private router: Router
  ) {
    this.env = environment.APP_URL;
  }

  saveTask(board: BoardI): Observable<BoardI> {
    return this._http.post<BoardI>(`${ this.env }/api/board/save/task`, board);
  }

  listTask(): Observable<any> {
    return this._http.get<any>(`${ this.env }/api/board/list`);
  }

  updateTask(board: BoardI): Observable<any> {
    return this._http.put<any>(`${ this.env }/api/board/update`, board);
  }
  
  deleteTask(board: BoardI): Observable<any> {
    return this._http.delete<any>(`${ this.env }/api/board/delete/${ board._id }`);
  }

  saveTaskImg(board: FormData): Observable<any> {
    return this._http.post<any>(`${ this.env }/api/board/save/task/img`, board);
  }

}


