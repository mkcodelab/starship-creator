import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatorComponent } from './components/creator/creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starship-creator';
}
