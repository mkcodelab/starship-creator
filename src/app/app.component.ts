import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';
import { CreatorComponent } from './components/creator/creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasBoxComponent, CreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starship-creator';
}
