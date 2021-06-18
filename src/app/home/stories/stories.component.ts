import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  show:boolean = false
  stories =[
    {index:'0', name:"khloud" , url:'../assets/imgs/images (2).jpg'},
    {index:'1' , name:"Reem",url:'../assets/imgs/images (2).jpg'},
    { index:'2', name:"Saif",url:'../assets/imgs/images (1).jpg'},
    {index:'3',  name:"ZeZe",url:'../assets/imgs/images.jpg'},
    {index:'4', name:"Fada",url:'../assets/imgs/images.png'},
    {index:'5', name:"Fada",url:'../assets/imgs/images.png'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  showStory(id){
    console.log(id,'khloud')

    // if(id == '' ){
    //   console.log(id , 'khloud')
    // this.show=true
    document.getElementById(id).classList.add('replace-pic')
    document.getElementById(id).classList.remove('pic')
    console.log(id)
    // }else{
    //   this.show=false
    // }
    // console.log("khloud", index)
  }


}
