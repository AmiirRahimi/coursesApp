import { Component } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    public sharedDataService: SharedDataService,
    ){}
}
