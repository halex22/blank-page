import { Component, computed, inject} from '@angular/core';
import { SaveOnLeaveDirective } from '../../directives/save-on-leave.directive';
import { DetailsComponent } from '../details/details.component';
import { NotesService } from '../../services/notes.service';
import { UpdateContentDirective } from '../../directives/update-content.directive';
import { HeaderComponent } from '../header/header.component';
import { DrawerComponent } from "../drawer/drawer.component";
import { ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ SaveOnLeaveDirective, DetailsComponent, UpdateContentDirective, HeaderComponent, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  service = inject(NotesService)
  totalWords = computed(() => this.service.currentNote().content.match(/\w+/g)?.length ?? 0)
  totalChars = computed(() => this.service.currentNote().content.length)

  @ViewChild('editable') editableRef!: ElementRef<HTMLElement>

  constructor() {
    setInterval(() => this.service.saveAllNotes(), 5000)
  }

  ngAfterViewInit() {
    const note = this.service.currentNote()
    const html = note.content.replace(/\n/g, '<br>')
    this.editableRef.nativeElement.innerHTML = html
  }

  get formattedContent () {
    return this.service.currentNote().content.replace(/\n/g, '<br>')
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
