import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  public numLikes : number = 0;
  public numDislikes : number = 0;

  public contentCardxpanded : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public addLike() : void {
    this.numLikes+=10;
  }
  
  public addDislike() : void {
    this.numDislikes+=10;
  }

  public expandPanelCard():void{
    this.contentCardxpanded=!this.contentCardxpanded;
  }

}
