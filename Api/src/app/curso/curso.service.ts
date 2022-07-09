import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
    url = "http://localhost/Api/php/";

    vetor:Curso[] = [];

  constructor(private http:HttpClient) { }

  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+'listar').pipe(
      map((res)=>{
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  cadastrarCursos(c:Curso): Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar', {cursos:c}).pipe(
      map((res)=>{this.vetor.push(res['cursos']);
      return this.vetor;
    })
    )
  }

  removerCursos(c:Curso):Observable<Curso[]>{
    const params = new HttpParams().set("idCurso", c.idCurso.toString());

    return this.http.delete(this.url+'excluir', {params: params}).pipe(
      map((res)=>{
        const filtro = this.vetor.filter((curso) =>{
          return +curso['idCurso'] !== +c.idCurso;
     });

     return this.vetor = filtro;
    }))
  }

  atualizaCursos(c:Curso):Observable<Curso[]>{
    return this.http.put(this.url+'alterar',{curso: c}).pipe(
      map((res) =>{
        const cursoAlterado = this.vetor.find((item)=>{
          return +item['idCurso'] === +['idCurso'];
        });

        if(cursoAlterado){
          cursoAlterado['nomeCurso'] = c['nomeCurso'];
          cursoAlterado['valorCurso'] = c['valorCurso'];
        }
        return this.vetor;
      }))
  }
}
