import { Component,  OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'youdecide';
  ipData: Object;
  public showIP:boolean = false;
  public showCountry:boolean = false;

  public buttonIP:any = 'Show Ip';
  public buttonCountry:any = 'Show Country';

  constructor(private _http: HttpService ) {}

  ngOnInit() {
    this._http.myMethod().subscribe(data => {
      this.ipData = data;
    })
  }

  toggleIP(){
    this.showIP = !this.showIP;
    if(this.showIP){
      this.buttonIP = "Hide IP";
    } else {
      this.buttonIP = "Show IP";
    }
  }

  toggleCountry(){
    this.showCountry = !this.showCountry;
    if(this.showCountry){
      this.buttonCountry = "Hide Country";
    } else {
      this.buttonCountry = "Show Country";
    }
  }
}
