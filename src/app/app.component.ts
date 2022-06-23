import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RoomSystem';

  constructor(private http:HttpClient){
  }

  ngOnInit(){

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // });

    //let options = { headers: headers};

    this.http.get('http://localhost:4000/owners').subscribe(data=>{
      console.log(data);   
    })
  }
  
}
