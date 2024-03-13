import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-operator.component.html',
  styleUrl: './pipe-operator.component.css'
})
export class PipeOperatorComponent {

  texto: string = "TESTANDO O PIPE OPERATOR";

  toDay = new Date();
}
