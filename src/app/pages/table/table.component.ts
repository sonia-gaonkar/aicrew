import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {HttpClient, HttpHeaders} from '@angular/common/http';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;

    public canvas : any;
    public ctx;
    public chartColor;
    public chartEmail;
    public chartHours;
    constructor(private http: HttpClient) {}
    public tableData: any;

    ngOnInit(){

        this.tableData = {
            "headers": [
              "Age",
              "Gender",
              "Occupation",
              "Medical History",
              "Risk Meter",
              "Rate Meter",
              "Action"
            ],
            "data": []
        }

        let headers = new HttpHeaders({});
		this.http
			.get<any>('http://10.244.44.101:8080/sample/getAllClaims', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
                this.tableData.data = data
		});

        this.canvas = document.getElementById("chartEmail");
        this.ctx = this.canvas.getContext("2d");
        this.chartEmail = new Chart(this.ctx, {
          type: 'pie',
          data: {
            labels: [1, 2, 3],
            datasets: [{
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [
                '#e3e3e3',
                '#4acccd',
                '#fcc468',
                '#ef8157'
              ],
              borderWidth: 0,
              data: [235, 600, 375, 105]
            }]
          },
  
          options: {
            legend: {
              display: false
            },
            pieceLabel: {
              render: 'percentage',
              fontColor: ['white'],
              precision: 2
            },
            tooltips: {
              enabled: false
            },
  
            scales: {
              yAxes: [{
  
                ticks: {
                  display: false
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: 'rgba(255,255,255,0.05)'
                }
  
              }],
  
              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: "transparent"
                },
                ticks: {
                  display: false,
                }
              }]
            },
          }
        });


        var speedCanvas = document.getElementById("speedChart");

        var dataFirst = {
          data: [300, 139, 515, 620, 330, 440, 640, 850, 225, 430, 550, 780],
          fill: false,
          borderColor: '#fbc658',
          backgroundColor: 'transparent',
          pointBorderColor: '#fbc658',
          pointRadius: 2,
          pointHoverRadius: 2,
          pointBorderWidth: 3,
        };
  
        var dataSecond = {
          data: [100, 523, 108, 127, 280, 627, 130, 334, 442, 545, 155, 363],
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 2,
          pointHoverRadius: 2,
          pointBorderWidth: 3
        };

        var data3 = {
            data: [500, 150, 340, 656, 278, 427, 534, 480, 290, 644, 555, 363],
            fill: false,
            borderColor: '#ef8157',
            backgroundColor: 'transparent',
            pointBorderColor: '#ef8157',
            pointRadius: 2,
            pointHoverRadius: 2,
            pointBorderWidth: 3
        };

        var data4 = {
            data: [170, 345, 190, 555, 456, 180, 240, 206, 400, 384, 231, 345],
            fill: false,
            borderColor: '#e3e3e3',
            backgroundColor: 'transparent',
            pointBorderColor: '#e3e3e3',
            pointRadius: 2,
            pointHoverRadius: 2,
            pointBorderWidth: 3
        };

  
        var speedData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [dataFirst, dataSecond, data3, data4]
        };

        var chartOptions = {
            legend: {
              display: false,
              position: 'top'
            }
          };
    
          var lineChart = new Chart(speedCanvas, {
            type: 'line',
            hover: false,
            data: speedData,
            options: chartOptions
          });

    }
    
}
