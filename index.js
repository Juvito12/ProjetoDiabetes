 function validador(){
    let opcoes = [];
    let sim = 0;
    let nao = 0;

    for(i = 1; i <= 13; i++){
    opcoes[i] =document.querySelector(`input[name='opcao${i}']:checked`);    
    }

    for(j = 0; j <= opcoes.length; j++){
        if(opcoes[j]){
            if(opcoes[j].value == "sim"){
                sim++
                
            } else{
                nao++
            }
        }
    }

    console.log(sim)
    console.log(nao)

    if(sim == 2){
        alert("Mínimo inferior Seu resultado apresenta poucos índices de predisposição para diabetes. Entretanto, é sempre bom ficar atento e fazer exames de rotina anualmente.")
    }


    
 }