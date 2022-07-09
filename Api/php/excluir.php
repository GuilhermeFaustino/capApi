<?php

include("conexao.php");

//obter dados

$obterdados = file_get_contents("php://input");

$extrair = json_decode($obterdados);

$idCurso = $extrair->cursos->idCurso;

$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqi_query($conexao, $sql);

?>