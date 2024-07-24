import { Injectable } from '@angular/core';
import { DEVS_DATA } from '../../assets/data/devs-data';
import { Developer } from '../../models/developer.model';
import { AddDeveloper } from '../../models/addDeveloper.mode';

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
    this.setAvatarURLs();
  }

  getDevsData(): Developer[] {
    return this.devs;
  }

  // Guarda la lista de desarrolladores en el localStorage
  saveDevs(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.devs));
    // console.log(this.devs);
  }

  addDeveloper(devData: AddDeveloper): Developer[] {
    const DEV_AVATAR_DEFAULT = 'user-3.jpg';

    this.devs.unshift({
      id: new Date().getTime().toString(),
      name: devData.name,
      avatar: DEV_AVATAR_DEFAULT,
      avatarURL: 'assets/devs/avatar/' + DEV_AVATAR_DEFAULT,
      budget: devData.budget,
    });
    this.saveDevs();

    return this.devs;
  }

  // Edita un desarrollador
  editDeveloper(editDeveloper: Developer): Developer[] {
    const devId = this.devs.findIndex((dev) => dev.id === editDeveloper.id);
    if (devId !== -1) {
      this.devs[devId].budget = editDeveloper.budget;
      this.devs[devId].name = editDeveloper.name;
    }
    this.saveDevs();

    return this.devs;
  }

  // Elimina un desarrollador por ID
  removeDeveloper(devId: string): Developer[] {
    const updatedDevs: Developer[] = [];
    this.devs.forEach((dev) => {
      if (dev.id !== devId) {
        updatedDevs.push(dev);
      }
    });
    this.devs = updatedDevs;
    this.saveDevs();
    return this.devs;
  }

  private getDevelopers(): Developer[] {
    const storedDevs: Developer[] = JSON.parse(
      localStorage.getItem(this.storageKey)!
    );
    return storedDevs && storedDevs.length > 0 ? storedDevs : this.devs;
  }

  private setAvatarURLs(): void {
    this.devs.forEach((dev) => {
      dev.avatarURL = 'assets/devs/avatar/' + dev.avatar;
    });
  }
}
