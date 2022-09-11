import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiskAssessment } from './risk-assessment';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class RiskAssessmentService {
  apiUrl = environment.baseApiUrl + "risk_assessment/"

  constructor(private http:HttpClient) { }

  postRiskAssessment(data:any){
    return this.http.post<any>(this.apiUrl,data);
  }
  getRiskAssessment():Observable<RiskAssessment[]>{
    return this.http.get<RiskAssessment[]>(this.apiUrl);
  }
  putRiskAssessment(data:any, id:number){
    return this.http.put<any>(this.apiUrl+id,data)
  }
  deleteRiskAssessment(id:number){
    return this.http.delete<any>(this.apiUrl+id)
  }
}
