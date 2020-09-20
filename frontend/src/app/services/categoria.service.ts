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
 // API_URI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  
  addCategoria(categoria: Categoria) : Observable<Categoria>{
    let url = 'http://localhost:3000/registrar_categoria';
    return this.http.post<Categoria>(url, categoria, httpOptions)
    .pipe(
      tap((newcategoria : Categoria) => console.log(`added new category w/ id=${newcategoria}`)),
      catchError(this.handleError<Categoria>('Categoria'))
    );
  }

  deleteCategoria(categoria:Categoria): Observable<Categoria> {
    const url = `http://localhost:3000/eliminar_categoria`;
    return this.http.post<Categoria>(url, categoria,httpOptions).pipe(
      tap(_ => console.log(`deleted usuario id=${categoria.id}`)),
      catchError(this.handleError<Categoria>(`darDeBaja id=${categoria.id}`))
    );
  }

  getCategorias (): Observable<Categoria[]> {
    let urlUsuarios = `http://localhost:3000/obtener_categoria`;
    return this.http.get<Categoria[]>(urlUsuarios, httpOptions)
    .pipe(
      tap(_ => console.log('fetched categoria')),
      catchError(this.handleError<Categoria[]>('getcategorias', []))
    );
  }

  updateCategoria(categoria:Categoria): Observable<any> {
    let url = 'http://localhost:3000/actualizar_categoria';
    return this.http.put(url, categoria, httpOptions).pipe(
      tap(_ => console.log(`categoria actualizada id=${categoria.id}`)),
      catchError(this.handleError<any>('updatecategoria'))
    );
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
