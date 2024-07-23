import { Injectable } from '@angular/core';
import { DEVS_DATA } from '../../assets/data/devs-data';
import { Developer } from '../../models/developer.model';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  devs = DEVS_DATA;
  storageKey = ' devs';

  constructor() {
    // Inicializa el servicio con los datos del localStorage o de DEVS_DATA
    const storedDevs = localStorage.getItem(this.storageKey);
    this.devs = storedDevs ? JSON.parse(storedDevs) : DEVS_DATA;

    // Asegura que cada developer tenga el avatarURL correcto
    for (let i = 0; i < this.devs.length; i++) {
      this.devs[i].avatarURL = 'assets/devs/avatar/' + this.devs[i].avatar;
    }
  }

  getDevsData(): Developer[] {
    return this.devs;
  }

  // Guarda la lista de desarrolladores en el localStorage
  saveDevs(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.devs));
    // console.log(this.devs);
  }

  // Edita un desarrollador por ID
  editDeveloper(devId: string) {}

  // Elimina un desarrollador por ID
  removeDeveloper(devId: string): void {
    this.devs = this.devs.filter((dev) => dev.id !== devId);
    this.saveDevs();
    // necesito refrescar el component
  }
}
