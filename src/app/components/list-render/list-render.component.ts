import '../../Animal';

import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { ListService } from '../../services/list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, HttpClientModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  animals: Animal[] = [];

  http = inject(HttpClient);

  constructor(private listService: ListService){
    // this.getAnimals();
  }

  animalDetails = '';

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  ngOnInit(): void {
      this.getAnimals();
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }
}
