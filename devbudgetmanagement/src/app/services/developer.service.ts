import { Injectable } from '@angular/core';
import { DEVS_DATA } from '../../assets/data/devs-data';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  devs = DEVS_DATA;

  constructor() {
    for (let i = 0; i < this.devs.length; i++) {
      this.devs[i].avatarURL = 'assets/devs/avatar/' + this.devs[i].avatar;
    }
  }

  getDevsData() {
    return this.devs;
  }
}
