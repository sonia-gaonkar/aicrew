import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


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
    constructor(private http: HttpClient,
       private modalService: NgbModal,
        config: NgbModalConfig) {
        config.backdrop = false;
        config.keyboard = false;
      }
    public tableData: any;
    private modalReference: any
    public totalsum: any
    public tableDatapopup: any;
    public approverejectstat: any;
    public claimsummary: any;
    public patientname: any;
    public randnum:any;


    @ViewChild('popup', { static: false }) popup: ElementRef | undefined;

    ngOnInit(){

        this.tableData = {
            "headers": [
              "Claim ID",
              "Hospital",
              "Patient Name",
              "Claim Summary",
              "Claim Description",
              "Action"
            ],
            "data": []
        }

        let headers = new HttpHeaders({});
		    this.http
        //10.244.44.101
        .get<any>('http://localhost:8080/sample/getAllClaims', {
          headers: headers
        })
          .subscribe(data => {
            console.log(data);
                    this.tableData.data = data
        });



    //this.tableData.data =  [{"id":1,"hospital":"Apollo Hospital","patientName":"Govind Sharma","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":2,"hospital":"Tata Memorial Hospital","patientName":"Shweta Singh","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":3,"hospital":"Apollo Hospital","patientName":"Sameer Kumar","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":4,"hospital":"Nanavati Hospital","patientName":"Raj Khosla","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"},{"id":5,"hospital":"Breach Candy Hospital Trust","patientName":"Manu Sharma","claimSummary":"Diagnostic Services","claimDescription":"X-ray, chest, single view MRI, CT Scan, abdomen and pelvis"}]


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

    private OpenPopup(content: any, selclass = "My_Popup modclass", size = 'lg') {
      this.modalReference = this.modalService.open(content, { centered: true, windowClass: selclass, size });
    }
    private CloseModal() {
      this.modalReference ? this.modalReference.close() : "";
    }
    
    public  openmodal(id: string, claimsummary: any, patientname: any) {

      this.randnum = Math.floor((Math.random() * 100) + 1);
      this.approverejectstat = "";
      this.claimsummary = claimsummary
      this.patientname = patientname
      this.tableDatapopup = {
        "headers": [
          "Bill ID",
          "Bill Date",
          "Description",
          "Amount"
        ],
        "data": []
    }

      let headers = new HttpHeaders({});
      this.http
      .get<any>('http://localhost:8080/sample/claims/'+id, {
        headers: headers
      })
        .subscribe(data => {
          console.log(data);
          this.tableDatapopup.data = data
      });

    // this.tableDatapopup.data = [{"bill_id":1,"bill_date":"2023-01-02","bill_description":"Consultation charges","bill_amount":220.0,"claim_id":1},{"bill_id":2,"bill_date":"2023-01-02","bill_description":"ECG charges","bill_amount":200.0,"claim_id":1}]

      //this.totalsum = 450;
      this.totalsum = this.tableDatapopup.data.reduce((n: any, {bill_amount}: any) => n + bill_amount, 0)
      console.log('.......................',  this.totalsum )

      this.OpenPopup(this.popup)
      
    }

    
    public  approvereject(status) {
      if(status=="A") this.approverejectstat = "Approved";
      else this.approverejectstat = "Rejected";
    }
    
}
