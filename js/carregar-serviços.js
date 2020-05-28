
const $containerServices = document.getElementById('services-api')

window.onload = initPage()

function initPage(){
    var $url = document.getElementById('config').innerHTML;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${$url}/services`, requestOptions)
        .then(response => response.json())
        .then(result => carregarServices(result))
        .catch(error => console.log('error', error));
}




const carregarServices = (data) => {
    console.log(data)
    
    var servicosAPI = '';
    for (let i = 0; i < data.length; i++) {
        let price = data[i].price + ',00'

        servicosAPI += `
        <div class="form-check">
            <input onchange="isCheckbox(this)" class="form-check-input" type="checkbox" value="service-${i+1}" id="${data[i]._id}">
            <label class="form-check-label" for="${data[i].slug}">
                ${data[i].name} - R$ ${price}   
            </label>
        </div>`;    
    }

    $containerServices.innerHTML = servicosAPI;
}

