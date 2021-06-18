import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataa=[
    {id:'0follow',name:'Khloud', nickname:'@khloudrammmah',image:'../assets/imgs/images (2).jpg'},
    {id:'1follow', name:'saif', nickname:'@saiframmmah',image:'../assets/imgs/images (1).jpg'},
    {id:'2follow', name:'reem', nickname:'@reemrammah',image:'../assets/imgs/images.jpg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  followed(id){
    console.log(id)
    let x =document.getElementById(id)
    console.log(x)
    x.classList.add('follow')
    document.getElementById(id).innerHTML = "Followed";
    x.classList.remove('followbt')
  }
}
