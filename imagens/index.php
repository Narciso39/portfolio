<?php

$diretorio = 'img/';


$arquivos = array_diff(scandir($diretorio), array('..', '.')); 

echo "<h1>Galeria de Fotos</h1>";
foreach ($arquivos as $arquivo) {
   
    echo "<p><a href='visualizar.php?img=$arquivo'>$arquivo</a></p>";
}
?>
