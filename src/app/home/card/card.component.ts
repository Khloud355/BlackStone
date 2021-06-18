import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // itemsArray: Array<any> = [];
  //  like = localStorage.getItem("names");
   names:Array<any> = [];
  items = [
    { id: '0like', image: '../assets/imgs/images (4).jpg', count:0, fullname: 'Dean Winchester', icon: '../assets/imgs/images (2).jpg', comments: '20', liked:this.names[1] },
    { id: '1like', image: '../assets/imgs/images (5).jpg', count:0 ,fullname: 'Jeas Pinkmen', icon: '../assets/imgs/images (1).jpg', comments: '20', liked:this.names[1]  },
    { id: '2like', image: '../assets/imgs/images (3).jpg',count:0 ,fullname: 'Walter White', icon: '../assets/imgs/images.jpg', comments: '20', liked:this.names[2]},
    { id: '3like', image: '../assets/imgs/images (6).jpg',count:0 ,fullname: 'Dean Winchester', icon: '../assets/imgs/images (2).jpg', comments: '20', liked: this.names[3] },

  ]

  // count = 0;



  constructor() { }

  ngOnInit(): void {
    // this.items = JSON.parse(localStorage.getItem('this.items'));
  }
  // likedItems:[
  // ]
  likedItems:[]
  

  colorHeart(id, liked) {
    console.log(id, liked)
    var index = this.items.map(function (item) {
      return item.id;
    }).indexOf(id);
    console.log(index)
    this.items[index].liked = !liked
   
    if (this.items[index].liked == true) {
     this.names[index] = this.items[index].liked
     console.log( this.names[index], 'khloud')
      localStorage.setItem("names", JSON.stringify(this.names));
     this.items[index].count = ++this.items[index].count
     console.log(this.names,'zz')
      // localStorage.setItem('likedItems[]', JSON.stringify({'key': id , 'liked':true}))
    //   for (var i = 0; i < this.items.length; i++) {
    //  	localStorage.setItem(this.likedItems[i],JSON.stringify(this.items[id]),);//only add a value to the current key if it's not undefined    
    // }
      //  this.itemsArray.push(this.items[index].liked)
      console.log('color red')
      console.log(id, 'ss')
      let x = document.getElementById(id)
      console.log(x, 'body')
      x.classList.add('colored')
      x.classList.remove('color-icon')

    } else {
      document.getElementById(id).classList.remove('colored')
      this.names[index] = this.items[index].liked
      console.log(this.names[index],'reem')
      localStorage.setItem("names", JSON.stringify(this.names));
      this.items[index].count = --this.items[index].count
      // localStorage.setItem('likedItems', JSON.stringify({'key': id , 'liked':false}))
    }
    // document.getElementById(id).classList.add('colored')
    // document.getElementById(id).classList.remove('color-icon"')
    //  console.log(x)
    //  if(x==)


  }

}
