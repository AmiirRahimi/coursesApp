import { Component } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  drawerState: boolean = false

  constructor(
    public sharedDataService: SharedDataService,
    ){}
}
