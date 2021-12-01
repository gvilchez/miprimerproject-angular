import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan america'];
  heroeBorrado: string = ''; 
borrarHeroe(){

  //this.heroes = []
  const heroeBorrado = this.heroes.shift() || '';
  this.heroeBorrado = heroeBorrado;
}
}
