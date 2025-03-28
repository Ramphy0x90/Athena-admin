import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../types/dto/client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../types/dto/user';

@Injectable({
    providedIn: 'root'
})
export class AthenaAuthService {
    private apiUrl: string = environment.athenaAuthApi;

    constructor(private httpClient: HttpClient) { }

    getClients(): Observable<Client[]> {
        return this.httpClient.get<Client[]>(`${this.apiUrl}/client/all`);
    }

    getClient(id: number): Observable<Client> {
        return this.httpClient.get<Client>(`${this.apiUrl}/client/${id}`);
    }

    create(client: Client): Observable<Client> {
        return this.httpClient.post<Client>(`${this.apiUrl}/register/`, client);
    }

    updateClient(client: Client): Observable<Client> {
        return this.httpClient.patch<Client>(`${this.apiUrl}/client/${client.id}`, client);
    }

    deleteClient(id: number): Observable<Client[]> {
        return this.httpClient.delete<Client[]>(`${this.apiUrl}/${id}`);
    }

    // --------------------------------------

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.apiUrl}/user/all`);
    }

    getUser(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/user/${id}`);
    }

    updateUser(user: User): Observable<User> {
        return this.httpClient.patch<User>(`${this.apiUrl}/user/${user.id}`, user);
    }

    deleteUser(id: number): Observable<User[]> {
        return this.httpClient.delete<User[]>(`${this.apiUrl}/${id}`);
    }
}
