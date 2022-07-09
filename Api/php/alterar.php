<?php

include("conexao.php");

//obter dados

$obterdados = file_get_contents("php://input");

$extrair = json_decode($obterdados);

$idCurso = $extrair->cursos->idCurso;
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->$valorCurso;

$sql = "UPDATE cursos SET nomeCurso=$nomeCurso, valorCurso=$valorCurso WHERE idCurso=$idCurso";
mysqi_query($conexao, $sql);


$curso = [
    'idCurso' => $idCurso,
    'nomeCurso' => $nomeCurso,
    'vlaorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>