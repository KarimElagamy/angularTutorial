import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/app/Shared/Models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getAllJobs():Observable<Job[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', 'e3247370e48244e784f4769c5105a7fc');
    return this.http.get<Job[]>("https://march2023apigateway.azure-api.net/recruiting/api/Jobs", {
      headers: {'Ocp-Apim-Subscription-Key':'e3247370e48244e784f4769c5105a7fc'}
    });
  }
}
