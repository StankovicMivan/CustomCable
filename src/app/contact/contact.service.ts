import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContactMail } from '../mailtemplates/contact.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KlubService {

  constructor(private http:HttpClient) {}

  private url = 'http://localhost:8082/api/klubovi';
 

//   public getKlubovi() {
//     return this.http.get<Klub[]>(this.klubUrl);
//   }

//   public deleteKlub(klub) {
//     return this.http.delete(this.klubUrl + "/"+ klub.id);
//   }

  public send(klub) {
    // return this.http.post<Klub>(this.klubUrl, klub);
  }

}