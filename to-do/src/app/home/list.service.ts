import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Método para obter todos os usuários
  getUsers() {
    this.http.get(this.apiUrl).subscribe(dados => {
      console.log(dados);
    });
  }
}
