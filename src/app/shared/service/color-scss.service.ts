import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorScssService {

  // For enabling Portfolio basic with title
  displyBlock :    boolean = false;

  constructor() { }
   // Set Color 
   setColorScheme(color) {
      var href = "/assets/css/color-9.css"; 
      document.getElementById("color").innerHTML = '<link href="/assets/css/color-9.css" rel="stylesheet">'
    }
    
    setFontScheme() {
      document.getElementById("font").innerHTML = '<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">'
    }
}
