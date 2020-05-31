import { Component, OnInit } from '@angular/core';
import { LEADER } from '../shared/leaders';
import { Leader } from '../shared/leader';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

leaders: Leader[] = LEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
