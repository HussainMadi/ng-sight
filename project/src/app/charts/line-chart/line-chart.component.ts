import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/charts.colors';
const LINE_SAMPLE_DATA: any[]=[
  {data: [55,84,67,17,97,52],label:'Sentiment Analysis'},
  {data: [26,37,45,94,49,59],label:'Image Recognition'},
  {data: [81,65,98,25,16,79],label:'Forecasting'},
];
const LINE_CHARt_LABELS : string [] = ['Jan','Feb','Aar','Apr','May','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_SAMPLE_DATA;
  lineChartLabels = LINE_CHARt_LABELS;
  lineChartOptions : any ={
    Responsive : true
  };
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }

}
