import { Component } from '@angular/core';

import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FilhoComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  userName: string = "Joaquim Moreira";
  userData = {
    email: "joaquin@gmail.com",
    role: "admin"
  };

  name: string = "Matheus";
  age: number = 30;
  job: string = "Desenvolvedor";
  hobbies: string[] = ["Correr", "Andar", "Nadar", "Ler"];
  carro = {
    name: "Polo",
    year: 2019,
  }

}
