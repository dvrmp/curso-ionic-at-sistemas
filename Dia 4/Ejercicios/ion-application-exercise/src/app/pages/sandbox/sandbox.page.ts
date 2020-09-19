//Angular
import { AfterViewInit, Component, Input, OnInit, } from '@angular/core';

//Interfaces
import { IVote } from '../../interfaces/index';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit,AfterViewInit {

  public panelsExpanded : number[] = [];

  public totalVotesByComponents : IVote[] = [];
  public totalVotesPositives : number = 0;
  public totalVotesNegatives : number = 0;

  constructor() { }

  /**
   * Component initialization state
   */
  ngOnInit() {
  }

  /**
   * Compnente state after initialization
   * 
   */
  ngAfterViewInit(){
    this.totalVotesByComponents.map((vote)=>{
      this.totalVotesPositives=this.totalVotesPositives+vote.numPositives;
      this.totalVotesNegatives=this.totalVotesNegatives+vote.numNegatives;
    })
  }

  /**
   * Get index of panel expanded
   * @param index
   */
  public getIndexPanelExpanded(index):void{
   if(!this.panelsExpanded.find(number=>number===index) && this.panelsExpanded.length<4){
     this.panelsExpanded.push(index);
   }
   else{
     this.panelsExpanded = this.panelsExpanded.filter(number=>number!==index);
   }
  }

  /**
   * Get vote by component
   * @param votes
   */

  public getVoteByComponent(votes:IVote):void{
    this.totalVotesByComponents.push(votes)
  }

}

