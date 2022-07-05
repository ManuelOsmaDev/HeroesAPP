import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  heroe:Heroe = {
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher:Publisher.DCComics,
    alt_img:""

  }
  publishers = [
    {
      id:"DC Comics",
      desc:"DC-Comics"
    },
    {
      id:"Marvel Comics",
      desc:"Marvel-Comics",
    }
  ]
  constructor(private snackbar:MatSnackBar,
            private heroesService:HeroesService,
            private activateRouted: ActivatedRoute,
            private router:Router,
            private dialog: MatDialog

) { }

  ngOnInit(): void {
    if(!this.router.url.includes("editar")){
      return;
    }

    this.activateRouted.params
    .pipe(
      switchMap(({id})=>this.heroesService.getHeroesId(id))
    ).subscribe(heore=>this.heroe = heore)



  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
     if(this.heroe.id){
      //Actualizar
      this.heroesService.putHero(this.heroe).subscribe(heroe=>{
        this.showSnackbar("registro actualizado")
      })

     }else{
      //Crear
      this.heroesService.addHeroe(this.heroe)
        .subscribe(heroe=>{
          this.router.navigate(["/heroes/editar",heroe.id])
          this.showSnackbar("Registro Creado")
        }
        )
     }


  }

  deleteHeroe(){
   this.dialog.open(ConfirmarComponent,{
    width:"250px",
    data:this.heroe
   })
  }

  showSnackbar( message:string ){
   const dialog = this.snackbar.open(message, "Cerrar", {
      duration:2500
    })
    dialog.afterOpened().subscribe(resp=>{
        this.router.navigate(["/heroes/list"])
    })
  }

}
