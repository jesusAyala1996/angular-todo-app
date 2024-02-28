import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola Angular';
  tasks = signal(['Instalar Angular CLI', 'Crear el Proyecto', 'Crear Componentes']);
  name = signal('Nicolas');
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  persona = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler(){
    alert("Hola")
  };
  changeHandler(event:Event){
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.name.set(newValue)
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement
    console.log(input.value)
  }
}
