import { Component,  OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'youdecide';
  ipData;
  getIpList;
  ipList = [];
  ipListRes = [];

  public sorted:boolean = false;
  public showIP:boolean = false;
  public showCountry:boolean = false;

  public buttonIP:any = 'Show Ip';
  public buttonCountry:any = 'Show Country';

  constructor(private _http: HttpService ) {}

  ngOnInit() {
    this._http.getIP().subscribe(data => {

      this.ipData = data;
        if (localStorage.getItem("ipList")){
          this.getIpList = localStorage.getItem("ipList")
          if (!this.getIpList.includes(this.ipData.ip)){
            this.ipList.push(this.getIpList.split(","), this.ipData.ip);
          } else {
            this.ipList = this.getIpList.split(",");
          };

        localStorage.setItem("ipList", this.ipList.toString());
        this.ipListRes = localStorage.getItem("ipList").split(",");
      } else {
        localStorage.setItem("ipList", this.ipData.ip)
        this.ipListRes = localStorage.getItem("ipList").split(",");
      }
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

  sort(){
    if (!this.sorted) {
      this.ipListRes = this.ipListRes.sort((a,b)=>{
        return parseInt(b) - parseInt(a)
      })
      this.sorted = true;
    } else if (this.sorted) {
      this.ipListRes = this.ipListRes.sort((a,b)=>{
        return parseInt(a) - parseInt(b)
      })
      this.sorted = false;
    }
  }
}
