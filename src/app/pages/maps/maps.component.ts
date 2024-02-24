import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

declare var google: any;
//declare var tableData: any;

@Component({
  moduleId: module.id,
  selector: 'maps-cmp',
  templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
  public tableData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {

    // API Call
		let headers = new HttpHeaders({});
		this.http
			.get<any>('https://reqbin.com/echo/get/json', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
		});


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
      "data": [
        {
          "age": "Regular walks & Yoga enthusiast", "geneder": "48/M/25.6", "occupation": "Lawyer", "medicalhistory": "Approve Quote", "risk": "48/M/25.6", "rate": "Lawyer", "action": "Approve Quote"
        },
        {
          "age": "Regular walks & Yoga enthusiast", "geneder": "48/M/25.6", "occupation": "Lawyer", "medicalhistory": "Approve Quote", "risk": "48/M/25.6", "rate": "Lawyer", "action": "Approve Quote"
        }
      ]
    }

  }


}
