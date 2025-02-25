import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Confirma la ruta correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule], // Aquí debe estar HomeComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';
}


