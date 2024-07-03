import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatorComponent } from './components/creator/creator.component';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreatorComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starship-creator';
  modalSvc = inject(ModalService);

  get modalOpen() {
    return this.modalSvc.isOpen;
  }
}
