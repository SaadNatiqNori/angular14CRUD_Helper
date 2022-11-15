import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  image1 = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  image2 = 'https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=1600';
  image3 = 'https://images.pexels.com/photos/688830/pexels-photo-688830.jpeg?auto=compress&cs=tinysrgb&w=1600';
  image4 = 'https://images.pexels.com/photos/2734512/pexels-photo-2734512.jpeg?auto=compress&cs=tinysrgb&w=1600';
  image5 = 'https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&w=1600';
  image6 = 'https://images.pexels.com/photos/36965/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600';
  image7 = 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1600';

  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = 'https://www.placecage.com/1000/1000';

  constructor() {

  }

  ngOnInit(): void {
  }

}
