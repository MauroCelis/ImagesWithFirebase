import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
//import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-lista-adddos',
  templateUrl: './lista-adddos.component.html',
  styleUrls: ['./lista-adddos.component.css']
})
export class ListaAdddosComponent implements OnInit {

  dowloadURL='';
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  item:any={
    name:''
  }
  constructor(private service:ConexionService, private storage:AngularFireStorage) {
   }

  ngOnInit(): void {
  }

  onUpload(e){
    console.log('subir',e.target.files);
    const id=Math.random().toString(36).substring(2);
    const file=e.target.files[0];
    const filePath='upload/imagen2.png';
    const ref = this.storage.ref(filePath);
    const task= this.storage.upload(filePath, file); 
    this.uploadPercent= task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(()=>{
        ref.getDownloadURL().subscribe(urlImage=>{
          this.dowloadURL=urlImage;
          console.log('URL_IMAGE',urlImage );
        })
      })
    )
//    task.snapshotChanges().pipe(finalize(()=> this.urlImage= ref.getDownloadURL()))
//    .subscribe();
//    const url = task.;

    
  //  console.log("La ruta es: ",url);
    
  }
/*
  agregar(){
    this.service.addItem(this.item);
    this.item.name='';
  }
*/
  eliminar(){
    
  }
}
