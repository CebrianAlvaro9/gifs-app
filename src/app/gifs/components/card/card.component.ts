import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from "../../../shared/components/lazy-image/lazy-image.component";

@Component({
    selector: 'gifs-card',
    standalone: true,
    templateUrl: `./card.component.html`,
    imports: [
        CommonModule,
        LazyImageComponent
    ]
})
export class CardComponent implements OnInit{


  @Input()
  gif!:Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif is required');
  }
 }
