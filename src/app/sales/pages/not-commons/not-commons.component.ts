import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  name: string = 'Santi';
  gender: string = 'male';
  inviteMap: any = { female: 'invitarla', male: 'invitarlo' };
}
