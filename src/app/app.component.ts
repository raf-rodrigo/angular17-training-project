import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CondicionalComponent } from './components/condicional/condicional.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { FirstComponent } from './components/first/first.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterOutlet,
    FirstComponent,
    DirectivesComponent,
    CondicionalComponent,
    EventsComponent,
    EmitterComponent,
    ListRenderComponent,
    PipeOperatorComponent,
    TwoWayDataBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
