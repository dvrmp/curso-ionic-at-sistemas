import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {

  public state: State = State.loading;

  /**
   * 
   * @param fruitsService 
   */
  constructor(public fruitsService:FruitsService) { }

  ngOnInit() {
    this.loadFruitsFromServer();
  }

  public getErrorState(state:State): void{
    if(state===State.error) this.loadFruitsFromServer();
  }

  private loadFruitsFromServer(): void{
    this.state = State.loading;
    this.fruitsService.getAllRemoteFruit().subscribe((fruits)=>{
      this.fruitsService.fruits = fruits;
      this.state = State.loaded;
    },(error)=>{
      this.state=State.error
    })
  }
}
