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

    const nome = document.getElementById("finish")
    

    if(sim > 0){
      nome.innerHTML = "<p> <b>Mínimo inferior</b>. Seu resultado apresenta poucos índices de predisposição para diabetes. Entretanto, é sempre bom ficar atento e fazer exames de rotina anualmente.</p>"
    } 
    
    if(sim > 2){
        nome.innerHTML = "<p> <b>Baixo risco</b>. Seu resultado apresenta pequenos índices de predisposição de diabetes, e neste caso, podem ser causados por outros fatores psicológicos ou fisiológicos. Fique atento para caso apareça ou perceba outros sintomas e faça exames de rotina anualmente.</p>"
    }

    if(sim > 4){
        nome.innerHTML = "<p> <b>Médio Risco</b>. Seu resultado apresenta índices significativos de predisposição de diabetes, por isso, é importante ficar atento aos fatores de risco e procurar um atendimento profissional para realização de exames de rotina e um possível diagnostico. Lembre-se de que manter hábitos saudáveis é fundamental para o controle dos sintomas. <strong>Consulte seu médico ou procure uma unidade de saúde em sua regional. O quanto antes notamos uma predisposição, mais simples são os cuidados e intervenções de controle e prevenção.</strong> </p>"
    }

    if(sim > 6){
        nome.innerHTML = "<p> <b>Alto Risco!</b> Seu resultado apresenta alto índice de sintomas de diabetes. <strong>É aconselhável consultar o seu médico ou procurar atendimento em uma unidade de saúde perto de você</strong>. Esse é o caminho para obter um diagnóstico seguro e receber as recomendações necessárias para o seu quadro clínico. <strong>Fique atento com sua saúde. Lembre-se que manter hábitos saudáveis é fundamental para prevenir o diabetes.</strong> </p>"
    }

   
    




    
 }