import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  //i18nSelect
  name: string = 'Santi';
  gender: string = 'male';
  inviteMap: any = { female: 'invitarla', male: 'invitarlo' };

  //i18nPlural

  clients: string[] = ['Ana', 'Santi'];
  clientsMapping = {
    '=0': 'no tenemos ningún cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }
}
