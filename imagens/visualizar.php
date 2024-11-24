<?php

if (isset($_GET['img'])) {
    $imagem = $_GET['img'];
    $diretorio = 'img/';
    $caminhoImagem = $diretorio . $imagem;

    if (file_exists($caminhoImagem)) {
       
        header('Content-Type: image/jpeg'); 
        readfile($caminhoImagem); 
        exit; 
    } else {
        echo "Imagem não encontrada!";
    }
} else {
    echo "Imagem não especificada!";
}
?>
