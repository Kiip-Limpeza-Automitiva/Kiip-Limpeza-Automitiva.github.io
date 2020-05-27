var $url = document.getElementById('config').innerHTML;

var $form = document.getElementById('agendamentoServico');
var $nome = document.getElementById('txt_nome');
var $email = document.getElementById('txt_email');
var $data = document.getElementById('txt_data');
var $hora = document.getElementById('txt_hora');
var $telefone = document.getElementById('txt_telefone');
var $btnEnviar = document.getElementById('btn_enviar');



const enviaDados = () => { 

    var dados = {
        name: $nome.value,
        telefone: $telefone.value,
        email: $email.value,
        dateService: $data.value,
        hourService: $hora.value,
        typeService: services
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(dados)

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const result = fetch(`${$url}/scheduling`, requestOptions)
    .then(response => response.json())
    .then(result => recarregar(result))
    .catch(error => console.log('error', error));
    
    const recarregar = (data) => {
        alert("Serviço solicitado com sucesso! \n Entraremos em contato pelo numero " + result.telefone + "!")
        document.location.reload(true);
    }
}


// Verificar os serviços selecionados
var services = []
function isCheckbox(e){
    
    if(e.checked){
        if(services.indexOf(e.id, 0) == -1){
            services.push(e.id)
        }
        
    }else{
        let num = services.indexOf(e.id, 0)
        if(num != -1)
            services.splice(num)
        
    }

    if(services != ''){
        // console.log($btnEnviar)
        $btnEnviar.removeAttribute("disabled")
        
    }else{
        $btnEnviar.setAttribute("disabled", null)
    }

}

$btnEnviar.addEventListener('click', () => enviaDados())








