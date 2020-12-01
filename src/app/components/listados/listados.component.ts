import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { from } from 'rxjs';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

/*  items:any;
  faCoffee = faCoffee;
  faTrash= faTrash;
  constructor(private conexion:ConexionService) {
    this.conexion.listaItem().subscribe(item=>{
      this.items=item;
      console.log(this.items);
   });
  }
*/
  ngOnInit(): void {
  }

  eliminar(item){
    
  }

}
