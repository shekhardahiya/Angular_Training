import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  studentData:any;
  tableHeader:any;
  counter:any=0
  freshData:any;
  currentColumnName:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/studentData.json").subscribe(data =>{
      this.studentData=data
      this.freshData=[...this.studentData]
      this.tableHeader=Object.keys(this.studentData[0])
     })
    
  }
  sortData(column_name:any,event:any){
    if(column_name !== this.currentColumnName){
      this.counter=0
    }
    this.counter++
    this.currentColumnName=column_name

    switch (this.counter) {
      case 1:
        {
          if(column_name=='name' || column_name=='section'){
            this.studentData.sort((low:any,high:any)=>{
              low= low[column_name];
              high= high[column_name];
              return low.localeCompare(high);
            });
          }
          else{
            this.studentData.sort((low:any,high:any)=>{
              low= low[column_name];
              high= high[column_name];
              return low-high;
            });
          }
          break;
        }
      case 2 :
        {
          if(column_name=='name' || column_name=='section'){
            this.studentData.sort((low:any,high:any)=>{
              low= low[column_name];
              high= high[column_name];
              return high.localeCompare(low);
            });
          }else{
            this.studentData.sort((low:any,high:any)=>{
              low= low[column_name];
              high= high[column_name];
              return high-low;
            });
          }
          break;
        }
  
      case 3: {
        this.studentData =[...this.freshData]
        this.counter=0;
        break;
      }
    }
    return this.studentData;
  }

}
