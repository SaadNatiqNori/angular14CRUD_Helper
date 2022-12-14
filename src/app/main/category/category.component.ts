import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  backCardColors:any = [];
  backCardLayerColors:any = [];
  myCardLayerOpacity:number = 0.38;

  constructor() { }

  ngOnInit(): void {
    const myAllImages = document.querySelectorAll('#i');
    for (let i = 0; i < myAllImages.length; i++) {
      this.toDataURL(`../../../${myAllImages[i].getAttribute('src')}`, (dataUrl: any) => {
        var rgb = this.getAverageRGB(myAllImages[i]);
        this.backCardColors.push('rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
        this.backCardLayerColors.push('rgba('+rgb.r+','+rgb.g+','+rgb.b+','+this.myCardLayerOpacity+')');
      })
    }
  }
  getAverageRGB(imgEl: any) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r/count);
        rgb.g = ~~(rgb.g/count);
        rgb.b = ~~(rgb.b/count);
        return rgb;
  }
  toDataURL(url:any, callback:any) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
}
