alert ("Supermercado do Torquato");
let produto=0,preco=0,precoTotal=0;
while ( preco != -1){
preco = parseFloat(prompt ("Preço R$ "));
precoTotal += preco;
produto ++ ;
} 
precoTotal+=1;
produto-=1;
alert ( "  quantidade  " + produto + " : " + "R$" + precoTotal );