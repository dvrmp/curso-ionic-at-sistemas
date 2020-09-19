import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {

  /**
   * 
   * @param fruitsService 
   */
  constructor(public fruitsService:FruitsService) { }

  ngOnInit() {
  }

}
