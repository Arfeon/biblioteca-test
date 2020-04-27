import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[]=[];
  usuario:Usuario=new Usuario();
  modificando:boolean=false;
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'usuario_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' },  
    { field: 'apellidos', header: 'Apellidos' },  
  ]; 

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios(){
    this.usuariosService.getAllUsuarios().subscribe(data=>this.usuarios=data);
  }
  getUsuarioById(id:number){
    this.usuariosService.getUsuarioById(id).subscribe(data=>{
      this.usuario=data[0];
      console.log(this.usuario);
      this.modificando=true;
    });
  }
  insertUsuario(){
    this.usuariosService.postUsuario(this.usuario).subscribe(()=>this.getAllUsuarios());
  }
  modificarUsuario(){
    this.usuariosService.putUsuario(this.usuario.usuario_id,this.usuario).subscribe(()=>this.getAllUsuarios());
  }
  eliminarUsuario(id:number){
    this.usuariosService.deleteUsuario(id).subscribe(()=>this.getAllUsuarios());
  }
  limpiar(){
    this.usuario.usuario_id=null;
    this.usuario.nombre=null;
    this.usuario.apellidos=null;
    this.modificando=false;
  }
}
