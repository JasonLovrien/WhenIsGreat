import { Component, OnInit } from '@angular/core';
import { JitSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  //TEST MONTH
  monthsHere = [{'name':'July', 'dates': [{'num':'1', 'active':true}, {'num':'2', 'active': false}, {'num': '3', 'active':true}]}, {'name': 'August', 'dates': [{'num':'1', 'active':true}, {'num':'2', 'active':true}]}]
  constructor() { }

  ngOnInit(): void {
  }

}
