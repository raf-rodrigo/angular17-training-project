import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {

  @Input() name: string = "";
  @Input() userData!: {
      email: string;
      role: string;
    };


}
