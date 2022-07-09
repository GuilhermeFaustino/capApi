<?php

include("conexao.php");

//obter dados

$obterdados = file_get_contents("php://input");

$extrair = json_decode($obterdados);

$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->$valorCurso;

$sql = "INSERT INTO cursos(nomeCurso, valorCurso) VALUES ($nomeCurso, $valorCurso)";
mysqi_query($conexao, $sql);


$curso = [
    'nomeCurso' => $nomeCurso,
    'vlaorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>