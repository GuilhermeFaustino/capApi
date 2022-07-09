<?php
//dados
$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//conexcao

$conexao = mysqli_connect($url, $usuario, $senha, $base);

mysqli_set_charset($conexao, "utf-8");

?>