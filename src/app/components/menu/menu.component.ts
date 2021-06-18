import { Component, Input, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
// details:{}
data:{
  name:'Khloud' , nickname:'@khloudramm_' , image:'../assets/imgs/images (2).jpg'
}
  constructor(private _dataservice :DataService) { }

  ngOnInit(): void {
  //  this.getdata()
  }
// getdata(){
//   this.details=this._dataservice.dataa
//   console.log(this.details)
// }
}
