import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  companyBudget = 10000;

  constructor() {}

  getcompanyBudget() {
    return this.companyBudget;
  }
}
