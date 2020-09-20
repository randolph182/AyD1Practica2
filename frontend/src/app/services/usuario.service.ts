import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';
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
export class UsuarioService {

  constructor(private http: HttpClient) { }

   /** GET Usuarios from the server */
   getUsuarios (): Observable<Usuario[]> {
    let urlUsuarios = `http://localhost:3000/obtener_usuario`;
    return this.http.get<Usuario[]>(urlUsuarios, httpOptions)
    .pipe(
      tap(_ => console.log('fetched catedraticos')),
      catchError(this.handleError<Usuario[]>('getcatedraticos', []))
    );
  }


  


  /*** DML */
  addUsuario(usuario : Usuario) : Observable<Usuario>{
    let url = 'http://localhost:3000/registrar_usuario';
    return this.http.post<Usuario>(url, usuario, httpOptions)
    .pipe(
      tap((newcatedratico : Usuario) => console.log(`added new user w/ id=${newcatedratico}`)),
      catchError(this.handleError<Usuario>('Usuario'))
    );

  }

  // dar baja
  darDeBaja(user:Usuario): Observable<Usuario> {
    const url = `http://localhost:3000/eliminar_usuario`;
    user.id = user.id_usuario;
    return this.http.post<Usuario>(url, user,httpOptions).pipe(
      tap(_ => console.log(`deleted usuario id=${user.id}`)),
      catchError(this.handleError<Usuario>(`darDeBaja id=${user.id}`))
    );
  }



  /** PUT: update the hero on the server */
  updateUsuario(usuario:Usuario): Observable<any> {
    let url = 'http://localhost:3000/actualizar_usuario';
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${usuario.id}`)),
      catchError(this.handleError<any>('updateHero'))
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
