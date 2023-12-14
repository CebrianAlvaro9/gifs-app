import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent { 

constructor(private gifsService:GifsService){}

   get tags(){
    return this.gifsService.tagsHistory;
   }

   searchTag(tag:string){
    this.gifsService.searchTag(tag)
   }
}

