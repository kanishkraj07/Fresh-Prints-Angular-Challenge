import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.less'
})
export class UserDetailsComponent {

  @Input() user!: User | null ;
}
