import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'execise';
  userName: string = ""

  extraOptions = {
    isWireless: false,
  hasWarranty:false  }

  shippingMethod = "express | standard = express"

  

getInfo() {
  console.log(`Options: Warranty: ${this.extraOptions.hasWarranty}, 
    Wireless: ${this.extraOptions.isWireless},
    shipping Method: ${this.shippingMethod},
    username : ${this.userName}`)
  
   
  
}
}