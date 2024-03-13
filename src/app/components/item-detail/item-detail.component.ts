import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import '../../Animal';
import { ListService } from '../../services/list.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal();
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((aminal) => {
      this.animal = aminal;
    });
  }

}
