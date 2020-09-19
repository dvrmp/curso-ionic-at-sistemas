import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { IFruit } from 'src/app/interfaces';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {

  public fruit : IFruit

  constructor(private fruitsService:FruitsService,private routerActivated:ActivatedRoute) { }

  ngOnInit() {
    this.fruit = this.fruitsService.getFruitByIndex(+this.routerActivated.snapshot.paramMap.get('id'))
  }

}
