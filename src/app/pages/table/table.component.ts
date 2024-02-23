import { Component, OnInit } from '@angular/core';

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
    ngOnInit(){
        this.tableData1 = {
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
        };
    }

    tableData = {
        "headers": [
          "Claim Description",
          "Claim Summary",
          "Action"
        ],
        "data": [
          {
            "properties": [
              {
                "key": "X-ray, chest, single view\n MRI, knee, without contrast \n CT scan, abdomen and pelvis, with contrast",
                "key1" : "sssssssss"
              },
              {
                "key": "48/M/25.6"
              },
              {
                "key": "Lawyer"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "Non smoker, regular gym goer, famil history of high Blood pressure"
              },
              {
                "key": "30/F/24"
              },
              {
                "key": "Architect"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "Obesity, family history of type 2 diabetes"
              },
              {
                "key": "47/M/28"
              },
              {
                "key": "Sales Executive"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "Physically fit, no history of heart diseases"
              },
              {
                "key": "25/M/27.6"
              },
              {
                "key": "Engineer"
              }
            ]
          },
          {
            "properties": [
              {
                "key": "No pre-existing conditions, family history of hypertension"
              },
              {
                "key": "33/F/24.3"
              },
              {
                "key": "Teacher"
              }
            ]
          } 
        ]
    }
}
