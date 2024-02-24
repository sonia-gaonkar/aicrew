import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

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

    ngOnInit(){
       /*         this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        }; */


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
          pointBorderWidth: 5,
        };
  
        var dataSecond = {
          data: [100, 523, 108, 127, 280, 627, 130, 334, 442, 545, 155, 363],
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 2,
          pointHoverRadius: 2,
          pointBorderWidth: 5
        };

        var data3 = {
            data: [500, 150, 340, 656, 278, 427, 534, 480, 290, 644, 555, 363],
            fill: false,
            borderColor: '#ef8157',
            backgroundColor: 'transparent',
            pointBorderColor: '#ef8157',
            pointRadius: 2,
            pointHoverRadius: 2,
            pointBorderWidth: 5
        };

        var data4 = {
            data: [170, 345, 190, 555, 456, 180, 240, 206, 400, 384, 231, 345],
            fill: false,
            borderColor: '#e3e3e3',
            backgroundColor: 'transparent',
            pointBorderColor: '#e3e3e3',
            pointRadius: 2,
            pointHoverRadius: 2,
            pointBorderWidth: 5
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

    

  /*  [{"id":1,"hospital":"Apollo Hospital","patientName":"Govind Sharma","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":2,"hospital":"Tata Memorial Hospital","patientName":"Shweta Singh","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":3,"hospital":"Apollo Hospital","patientName":"Sameer Kumar","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":4,"hospital":"Nanavati Hospital","patientName":"Raj Khosla","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":5,"hospital":"Breach Candy Hospital Trust","patientName":"Manu Sharma","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"}]
 */
    tableData = {
        "headers": [
          "Claim ID",
          "Hospital Name",
          "Patient Name",
          "Claim Description",
          "Claim Summary",
          "Action"
        ],
        "data": [
          {
            "properties": [
              {
                "key": "1",
              },
              {
                "key": "Apollo Hospital"
              },
              {
                "key": "Govind Sharma"
              },
              {
                "key": "Diagnostic Services"
              },
              {
                "key": "X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "2",
              },
              {
                "key": "Tata Memorial Hospital"
              },
              {
                "key": "Shweta Singh"
              },
              {
                "key": "Diagnostic Services"
              },
              {
                "key": "Ultrasound, abdomen Mammogram, screening Echocardiogram, transthoracic"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "3",
              },
              {
                "key": "KLE Hospital"
              },
              {
                "key": "Sameer Kumar"
              },
              {
                "key": "Laboratory Tests"
              },
              {
                "key": "Complete blood count (CBC), Comprehensive metabolic panel (CMP), Urinalysis"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "4",
              },
              {
                "key": "Nanavati Hospital"
              },
              {
                "key": "Raj Khosla"
              },
              {
                "key": "Procedures"
              },
              {
                "key": "Colonoscopy, with biopsy, Gastroscopy, with esophageal dilation, Laparoscopy diagnostic"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "5",
              },
              {
                "key": "Breach Candy Hospital Trust"
              },
              {
                "key": "Manu Sharma"
              },
              {
                "key": "Surgical Procedures"
              },
              {
                "key": "Appendectomy, Cholecystectomy, Hysterectomy"
              }
            ]
          }
        ]
    }
}
