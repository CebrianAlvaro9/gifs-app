import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent { 
  constructor(private gifsService: GifsService){}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag(){
    const newTag= this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
