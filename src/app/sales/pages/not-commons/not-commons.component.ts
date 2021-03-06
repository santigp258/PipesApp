import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
    `
      button {
        margin: 7px;
      }
    `,
  ],
})
export class NotCommonsComponent {
  //i18nSelect
  name: string = 'Santi';
  gender: string = 'male';
  inviteMap: any = { female: 'invitarla', male: 'invitarlo' };

  //i18nPlural

  clients: string[] = ['Ana', 'Santi', 'Emanuel', 'Clark'];
  clientsMapping = {
    '=0': 'no tenemos ningún cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  changeClient() {
    if (this.name === 'Ana') {
      this.name = 'Santi';
      this.gender = 'male';
    } else {
      this.name = 'Ana';
      this.gender = 'female';
    }
  }

  deleteClient() {
    this.clients.shift();
  }

  addClient() {
    this.clients.push('clientPrueba');
  }

  //keyvalue Pipe

  person = {
    name: 'Santiago',
    age: 17,
    address: 'Obando, Valle',
  };

  //json Pipe

  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Aquman',
      fly: false,
    },
    {
      name: 'Acuaman',
      fly: false,
    },
  ];

  //async pipe

  myObservable = interval(1000);

  PromiseValue = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data');
    }, 3500);
  })
}
