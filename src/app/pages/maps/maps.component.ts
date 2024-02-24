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

    // API Call
		let headers = new HttpHeaders({});
		this.http
			.get<any>('http://localhost:8080/sample/getAllUnderwriting', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
        this.tableData.data = data
		});
  }


}
