import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataa=[
    {
      name:'Khloud', nickname:'@khloudramm_',image:'../assets/imgs/images (2).jpg'
    },
    { name:'saif', nickname:'@saiframm_',image:'../assets/imgs/images (1).jpg'},
    { name:'reem', nickname:'@reemramm_',image:'../assets/imgs/images.jpg'}
  ]
  constructor() { }
}
