import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { IVote } from 'src/app/interfaces/vote.interface';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
})
export class RaitingComponent implements OnInit {

  @Input() numPositives? : number = 0;
  @Input() numNegatives? : number = 0;

  @Output() sendVotes : EventEmitter<IVote> = new EventEmitter<IVote>();

  constructor() { }

  ngOnInit() {
    let objectVote : IVote = { numPositives:this.numPositives, numNegatives:this.numNegatives };
    this.sendVotes.emit(objectVote);
  }

}
