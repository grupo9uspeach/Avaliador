var funcionariosJson = {
    "funcionarios": [
        {
            "id": "func1",
            "nome": "José",
            "local": "3º Andar",
            "setor": "TI - Desenvolvimento",
            "turno": "Noturno"
        },
        {
            "id": "func2",
            "nome": "João",
            "local": "3º Andar",
            "setor": "TI - Suporte",
            "turno": "Noturno"
        }
    ]
};

$( document ).ready(function() {
    $('.clickable-row').on('click', function(event) {
        // $(this).addClass('selected').siblings().removeClass('selected');
        onlyOne(this);
        dataToInfo(this);
    });
    loadData(funcionariosJson);
});

function onlyOne(element){
    $('tr').removeClass("selected");
    $(element).toggleClass("selected");
    // document.getElementById('botaoAvaliar').disabled=false;
    document.getElementById('botaoAvaliar').style.display = 'block';
}

function dataToInfo(element){
    $('#nameInfo').text($(element).find('.func_name').text());
    $('#localInfo').text($(element).find('.func_local').text());
    $('#setorInfo').text($(element).find('.func_setor').text());
    $('#turnoInfo').text($(element).find('.func_turno').text());
}

// function loadData(funcionariosJson){
//     funcionariosJson.funcionarios.forEach(item => {
//         var tableRow = document.createElement('tr');
//         tableRow.innerHTML("<th scope=\"row\">"+ item.id +"</th><td class=\"func_name\">"+ item.id +"</td><td class=\"func_local\">"+ item.id +"</td><td class=\"func_setor\">"+ item.id +"</td><td class=\"func_turno\">"+ item.id +"</td>"); 
//         $("#myTable").appendChild(tableRow);
//     });

}