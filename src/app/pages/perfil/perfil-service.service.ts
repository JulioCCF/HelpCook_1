import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/Usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get('http://localhost:8081/usuarios/' + id);
  }
}
