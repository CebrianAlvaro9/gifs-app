import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';



@Component({
    selector: 'gifs-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    imports: [
        CommonModule,
        SearchBoxComponent,
        CardListComponent
    ]
})
export class HomePageComponent {

    constructor(private gifsService: GifsService) {}

    get gifs(){
        return this.gifsService.gifList
    }
 }
