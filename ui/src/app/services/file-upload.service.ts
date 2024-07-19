// src/app/services/file-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:3333/file'; // URL вашого бекенду

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteFile(filename: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${filename}`);
  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download/${filename}`, { responseType: 'blob' });
  }
}
