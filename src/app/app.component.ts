import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { FooterComponent } from './shared/footer/footer.component';
import { AcercadeComponent } from "./pages/home/acercade/acercade.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, AcercadeComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';
}


