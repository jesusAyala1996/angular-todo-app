import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola Angular';
  tasks = ['Instalar Angular CLI', 'Crear el Proyecto', 'Crear Componentes'];
  name = 'Nicolas';
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  persona = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
}
