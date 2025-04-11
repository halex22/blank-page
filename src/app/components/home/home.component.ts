import { Component } from '@angular/core';
import { PageContentComponent } from '../page-content/page-content.component';
import { SaveOnLeaveDirective } from '../../directives/save-on-leave.directive';

@Component({
  selector: 'app-home',
  imports: [PageContentComponent, SaveOnLeaveDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
