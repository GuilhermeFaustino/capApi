import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base;  
  url = "http://localhost/Api/php/";

  //vetor de cursos
  vetor:Curso[]=[];

  curso = new Curso();

  constructor( private curso_servico:CursoService) { }

  ngOnInit(){
    this.selecionar();
  }

  cadastrar(){
   this.curso_servico.cadastrarCursos(this.curso).subscribe(
    (res: Curso[])=>{
      this.vetor = res;
      this.curso.nomeCurso = null
      this.curso.valorCurso = null

      this.selecionar();

    }
   )
  }

  selecionar(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) =>{
        this.vetor = res;
      }
    )
  }
  editar(){
   this.curso_servico.atualizaCursos(this.curso).subscribe(
    (res)=>{
      this.vetor = res;

      this.curso.nomeCurso = null
      this.curso.valorCurso = null

      this.selecionar
    }
   )
  }
  excluir(){
   this.curso_servico.removerCursos(this.curso).subscribe(
    (res: Curso[])=>{
      this.vetor = res;
      this.curso.nomeCurso = null
      this.curso.valorCurso = null
    }
   )
  }

  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
