import { Component, computed, inject, output, signal } from '@angular/core';
import { PageContentComponent } from '../page-content/page-content.component';
import { SaveOnLeaveDirective } from '../../directives/save-on-leave.directive';
import { DetailsComponent } from '../details/details.component';
import { NotesService } from '../../services/notes.service';
import { UpdateContentDirective } from '../../directives/update-content.directive';
import { HeaderComponent } from '../header/header.component';
import { DrawerComponent } from "../drawer/drawer.component";

@Component({
  selector: 'app-home',
  imports: [PageContentComponent, SaveOnLeaveDirective, DetailsComponent, UpdateContentDirective, HeaderComponent, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(NotesService)

  totalWords = computed(() => this.service.currentNote().content.match(/\w+/g)?.length ?? 0)
  totalChars = computed(() => this.service.currentNote().content.length)

  constructor() {
    setInterval(() => this.service.saveAllNotes(), 5000)
  }
 
  saveChanges = () => { 
    const updatedContent = this.service.currentNote().content
    this.service.currentNote.update(prev =>({
      ...prev,
      content: updatedContent,
      last_edit: Date.now()
    }))
    this.service.saveCurrentNote()
  }

}
