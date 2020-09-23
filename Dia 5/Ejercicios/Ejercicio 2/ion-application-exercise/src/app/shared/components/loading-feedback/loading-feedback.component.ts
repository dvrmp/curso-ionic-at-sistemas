import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';


@Component({
  selector: 'app-loading-feedback',
  templateUrl: './loading-feedback.component.html',
  styleUrls: ['./loading-feedback.component.scss'],
})
export class LoadingFeedbackComponent implements OnInit {

  @Input() state : State;
  @Output() ouputEventStateError : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit a error state 
   */
  public sendEnventError(): void {
    this.ouputEventStateError.emit(this.state)
  }

}
