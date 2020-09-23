import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { IFruit } from 'src/app/interfaces';
import { FruitsService } from 'src/app/services/fruits.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {

  public fruit : IFruit
  public formDetailFruit: FormGroup;
  public state: State = State.loaded;
  
  /**
   * @param fruitsService
   * @param routerActivated
   */
  constructor(private fruitsService:FruitsService,private routerActivated:ActivatedRoute) { }

  ngOnInit() {
    this.fruit = this.fruitsService.getFruitByIndex(+this.routerActivated.snapshot.paramMap.get('id'))
    this.formDetailFruit = new FormGroup({
      'description':new FormControl(this.fruit?.description,[Validators.required])
    })
  }

  /**
   * Get a error emited by loading-fedback.component
   * @param state
   */
  public getEventErrorForm(state:State): void {
    this.state=null;
  }

  /**
   * Update a fruit on server
   * @param fruit
   */
  public updateRemoteFruit(): void {
    if(this.formDetailFruit.valid){
      this.state = State.loading;
      this.fruit.description = this.formDetailFruit.controls['description'].value;
      this.fruitsService.updateRemoteFruit(this.fruit).subscribe(
        (fruit:IFruit)=>{
          this.state = State.loaded;
          this.fruitsService.fruits[this.fruitsService.fruits.findIndex(f=>f.id==fruit.id)].description=fruit.description;
        },
        (error)=>{
          this.state = State.error;
        }
      );
    }
  }


}
