import { Component, OnInit, Pipe } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { pipe } from 'rxjs';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  _id:Heroe[]=[];
  heroe!:Heroe;


  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
  this.activatedRoute.params
    .pipe(
       switchMap(({id})=> this.heroesService.getHeroesId(id))
    )
    .subscribe(heroe=> this.heroe  = heroe)

  }

  regresar(){
    this.router.navigate(["/heroes/listado"])
  }

}
