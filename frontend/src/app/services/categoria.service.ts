import { Injectable } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
    
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class CategoriaService {
  API_URI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  update(){

  }
  addCategoria(categoria: Categoria) : Observable<Categoria>{
    let url = 'http://3.85.52.106:3000/registrar_usuario';
    return this.http.post<Categoria>(url, categoria, httpOptions)
    .pipe(
      tap((newcategoria : Categoria) => console.log(`added new category w/ id=${newcategoria}`)),
      catchError(this.handleError<Categoria>('Categoria'))
    );

  }

  delete(){

  }
  read(){

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert(error.message);
      
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
