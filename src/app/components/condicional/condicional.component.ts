import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-condicional',
  standalone: true,
  imports: [NgIf],
  templateUrl: './condicional.component.html',
  styleUrl: './condicional.component.css'
})
export class CondicionalComponent {
  canShow: boolean = false;

  name: string = 'Matheus';

}
