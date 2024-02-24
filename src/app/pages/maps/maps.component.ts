import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Chart from 'chart.js';

declare var google: any;
//declare var tableData: any;

@Component({
  moduleId: module.id,
  selector: 'maps-cmp',
  templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
  public tableData: any;
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.tableData = {
      "headers": [
        "Age",
        "Gender",
        "Occupation",
        "Medical History",
        "Risk Meter",
        "Rate Per Month",
        "Action"
      ],
      "data": []
    }


    // API Call
		let headers = new HttpHeaders({});

		this.http
			//.get<any>('http://10.244.44.101:8080/sample/getAllUnderwriting', {
      .get<any>('http://localhost:8080/sample/getAllUnderwriting', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
        this.tableData.data = data
		});
    
   /* this.tableData.data = [{
      "age": "Regular walks & Yoga enthusiast", "geneder": "48/M/25.6", "occupation": "Lawyer", "medicalhistory": "Approve Quote", "riskMeter": "low", "rateMeter": "1111", "action": "Approve Quote"
    },
    {
      "age": "Regular walks & Yoga enthusiast", "geneder": "48/M/25.6", "occupation": "Lawyer", "medicalhistory": "Approve Quote", "riskMeter": "medium", "rateMeter": "3000", "action": "Approve Quote"
    },
    {
      "age": "Regular walks & Yoga enthusiast", "geneder": "48/M/25.6", "occupation": "10", "medicalhistory": "Approve Quote", "riskMeter": "high", "rateMeter": "40", "action": "Approve Quote"
    }]*/
    
    
    this.chartColor = "#FFFFFF";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"],
        datasets: [{
            borderColor: "#FD26AA",
            backgroundColor: "#BC72F3",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 1,
            data: [200, 250, 228, 180, 400, 200,170, 177, 250, 250,300,400]
          },
         
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 3,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });
  }


}
