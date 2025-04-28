import { Component, computed } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-drawer',
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  service = inject(NotesService)

  // noteList = computed(() )

}
