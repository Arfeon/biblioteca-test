import { Component, OnInit } from '@angular/core';
import { AlquilerUsuarioLibro } from 'src/app/modelos/alquiler-usuario-libro.model';
import { AlquileresService } from 'src/app/services/alquileres.service';
import { LibrosService } from 'src/app/services/libros.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Libro } from 'src/app/modelos/libro.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {

  alquileres:AlquilerUsuarioLibro[]=[];
  alquiler:AlquilerUsuarioLibro=new AlquilerUsuarioLibro();
  modificando:boolean=false;
  libros:Libro[]=[];
  libroSeleccionado:Libro=new Libro();
  usuarioSeleccionado:Usuario=new Usuario();
  usuarios:Usuario[]=[];
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'alquiler_id', header: 'Id' },  
    { field: 'fecha_alquiler', header: 'Fecha Alquiler' },  
    { field: 'fecha_devolucion', header: 'Fecha Devolucion' }, 
    { field:'libro_id',header:'Libro ID'}, 
    {field:'libro_nombre',header:'Nombre del Libro'},
    { field:'usuario_id',header:'Usuario ID'},
    {field:'usuario_nombre',header:'Nombre de Usuario'}
  ]; 

  constructor(private alquilerService:AlquileresService, private librosService:LibrosService,private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.getAllAlquileres();
    this.getAllLibros();
    this.getAllUsuarios();
  }
  getAllAlquileres(){
    this.alquilerService.getAllAlquileres().subscribe(data=>this.alquileres=data);
  }
  getAlquilerById(id:number){
    this.alquilerService.getAlquilerById(id).subscribe(data=>{
      this.alquiler=data[0];
      let fecha_alquiler=this.alquiler.fecha_alquiler;
      let fecha_devolucion=this.alquiler.fecha_devolucion;
      this.alquiler.fecha_alquiler=new Date(fecha_alquiler);
      this.alquiler.fecha_devolucion=new Date(fecha_devolucion);
      this.getUsuarioById();
      this.getLibroById();
      console.log(this.alquiler);
    });
    this.modificando=true;

  }
  getUsuarioById(){
    this.usuariosService.getUsuarioById(this.alquiler.usuario_id).subscribe(data=>this.usuarioSeleccionado=data[0]);
  }
  getLibroById(){
    this.librosService.getLibroById(this.alquiler.libro_id).subscribe(data=>this.libroSeleccionado=data[0]);
  }
  getAllLibros(){
    this.librosService.getAllLibros().subscribe(data=>this.libros=data);
  }
  getAllUsuarios(){
    this.usuariosService.getAllUsuarios().subscribe(data=>this.usuarios=data);
  }
  eliminarAlquiler(id:number){
    this.alquilerService.deleteAlquiler(id).subscribe(()=>this.getAllAlquileres());
  }


  insertAlquiler(){
    this.alquiler.libro_id=this.libroSeleccionado.libro_id;
    this.alquiler.usuario_id=this.usuarioSeleccionado.usuario_id;
    this.alquilerService.postAlquiler(this.alquiler).subscribe(()=>{
      this.getAllAlquileres();
    });

  }
  modificarAlquiler(){
    this.alquilerService.putAlquiler(this.alquiler.alquiler_id,this.alquiler).subscribe(()=>{
      this.alquiler.libro_id=this.libroSeleccionado.libro_id;
      this.alquiler.usuario_id=this.usuarioSeleccionado.usuario_id;
      this.getAllAlquileres();
    });
  }
  limpiar(){
    this.modificando=false;
  }

}
