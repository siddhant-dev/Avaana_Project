import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() activity!: Activity

  constructor() { }

  ngOnInit(): void {
  }

}
