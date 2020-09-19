import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent implements OnInit {


  @Input() title : string;
  @Input() indexPanelExpandable : number;
  @Output() sendIndexPanelExpanded : EventEmitter<number> = new EventEmitter<number>()

  public panelExpanded : boolean = false;

  constructor() { }

  ngOnInit() {}

  public expandPanel(){
    this.panelExpanded=true;
    this.sendIndexPanelExpanded.emit(this.indexPanelExpandable)
  }
  
  public closePanelExpanded(){
    this.panelExpanded=false;
    this.sendIndexPanelExpanded.emit(this.indexPanelExpandable)
  }
}
