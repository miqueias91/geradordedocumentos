$('.date').mask('99/99/9999');
$('.cpf').mask('999.999.999-99');
$('.rg').mask('99.999.999-9');
$('.pis_pasep').mask('999.99999.99-9');
$('.cnpj').mask('99.999.999/9999-99');
$('.te').mask('9999 9999 9999');
$('.cep').mask('99.999-999');
$('.valor').maskMoney({
  allowNegative: false, 
  thousands:'', 
  decimal:',', 
  affixesStay: false
});

window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').left.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};

// SCRIPT PARA CRIAR O MODAL DE AGUARDE
window.fn.showDialog = function (id) {
  var elem = document.getElementById(id);      
  elem.show();            
};



var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

//SCRIPT PARA ESCONDER O MODAL DE AGUARDE
window.fn.hideDialog = function (id) {
  document.getElementById(id).hide();
};

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler    
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {    
    this.receivedEvent('deviceready');  
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('receivedEvent');
  },
  //FUNÇÃO DE BUSCA
  onSearchKeyDown: function(id) {
    if (id === '') {
      return false;
    }
    else{
      
    }
  },

  //GERAR NUMERO DE CNH
  gerarNumeroCNH: function() {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var n4 = Math.floor(Math.random() * 10);
    var n5 = Math.floor(Math.random() * 10);
    var n6 = Math.floor(Math.random() * 10);
    var n7 = Math.floor(Math.random() * 10);
    var n8 = Math.floor(Math.random() * 10);
    var n9 = Math.floor(Math.random() * 10);
    var soma1 = (n1 * 9) + (n2 * 8) + (n3 * 7) + (n4 * 6) + (n5 * 5) + (n6 * 4) + (n7 * 3) + (n8 * 2) + (n9 * 1);
    var dsc = 0;
    var D_V1 = soma1 % 11;
    if (D_V1 >= 10) {
      D_V1 = 0;
      dsc = 2;
    }
    var soma2 = (n1 * 1) + (n2 * 2) + (n3 * 3) + (n4 * 4) + (n5 * 5) + (n6 * 6) + (n7 * 7) + (n8 * 8) + (n9 * 9);
    var D_V2 = soma2 % 11;

    if (D_V2 > 9) {
      D_V2 = 0;
    }
    else{
      D_V2 = parseInt(D_V2) - parseInt(dsc);
    }
    var retorno = '';
    retorno = n1+''+n2+''+n3+""+n4+''+n5+''+n6+""+''+n7+''+n8+''+n9+D_V1+''+D_V2;
    return retorno;
  },
  //GERAR NUMERO DO CNPJ
  gerarNumeroCNPJ: function() {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var n4 = Math.floor(Math.random() * 10);
    var n5 = Math.floor(Math.random() * 10);
    var n6 = Math.floor(Math.random() * 10);
    var n7 = Math.floor(Math.random() * 10);
    var n8 = Math.floor(Math.random() * 10);
    var n9 = 0;
    var n10 = 0;
    var n11 = 0;
    var n12 = Math.floor(Math.random() * 10);
    var D_V1 = ((n1 * 5) + (n2 * 4) + (n3 * 3) + (n4 * 2) + (n5 * 9) + (n6 * 8) + (n7 * 7) + (n8 * 6) + (n9 * 5) + (n10 * 4) + (n11 * 3) + (n12 * 2));
    D_V1 = 11 - (D_V1%11);
    if (D_V1 >= 10) {
      D_V1 = 0;
    }
    dig1 = D_V1;
    var D_V2 = ((n1 * 6) + (n2 * 5) + (n3 * 4) + (n4 * 3) + (n5 * 2) + (n6 * 9) + (n7 * 8) + (n8 * 7) + (n9 * 6) + (n10 * 5) + (n11 * 4) + (n12 * 3) + (dig1 * 2));
    D_V2 = 11 - (D_V2%11);
    if (D_V2 >= 10) {
      D_V2 = 0;
    }
    dig2 = D_V2;
    var retorno = '';
    retorno = n1+''+n2+'.'+n3+""+n4+''+n5+'.'+n6+""+''+n7+''+n8+'/'+n9+""+n10+''+n11+''+n12+'-'+dig1+''+dig2;
    return retorno;
  },
  //GERAR NUMERO DO PIS/PASEP
  gerarNumeroPIS_PASEP: function() {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var n4 = Math.floor(Math.random() * 10);
    var n5 = Math.floor(Math.random() * 10);
    var n6 = Math.floor(Math.random() * 10);
    var n7 = Math.floor(Math.random() * 10);
    var n8 = Math.floor(Math.random() * 10);
    var n9 = Math.floor(Math.random() * 10);
    var n10 = Math.floor(Math.random() * 10);
    var D_V = (n1 * 3) + (n2 * 2) + (n3 * 9) + (n4 * 8) + (n5 * 7) + (n6 * 6) + (n7 * 5) + (n8 * 4) + (n9 * 3) + (n10 * 2);
    D_V = 11 - (D_V%11);
    if (D_V >= 10) {
      D_V = 0;
    }
    var retorno = '';
    retorno = n1+''+n2+''+n3+"."+n4+''+n5+''+n6+""+''+n7+''+n8+'.'+n9+""+n10+'-'+D_V;
    return retorno;
  },
  //GERAR NUMERO DO TITULO DE ELEITOR
  gerarNumeroTituloEleitor: function() {
    var nn_1 = Math.floor(Math.random() * 10);
    var nn_2 = Math.floor(Math.random() * 10);
    var nn_3 = Math.floor(Math.random() * 10);
    var nn_4 = Math.floor(Math.random() * 10);
    var nn_5 = Math.floor(Math.random() * 10);
    var nn_6 = Math.floor(Math.random() * 10);
    var nn_7 = Math.floor(Math.random() * 10);
    var nn_8 = Math.floor(Math.random() * 10);
    var nn_9 = 0;
    var nn_10 = 2;
    var DV_1 = (parseInt(nn_1) * 2)+(parseInt(nn_2) * 3)+(parseInt(nn_3) * 4)+(parseInt(nn_4) * 5)+ (parseInt(nn_5) * 6)+(parseInt(nn_6) * 7)+ (parseInt(nn_7) * 8)+ (parseInt(nn_8) * 9);
    var resto = (DV_1%11);
    if (resto >= 10) {
      DV_1 = 0;
    }
    else{
      DV_1 = (DV_1%11);
    }
    var DV_2 =  (parseInt(nn_9) * 7)+(parseInt(nn_10) * 8)+(parseInt(DV_1) * 9);
    var resto = (DV_2%11);
    if (resto >= 10) {
      DV_2 = 0;
    }
    else{
      DV_2 = (DV_2%11);
    }
    return nn_1+''+ nn_2+''+ nn_3+''+ nn_4+' '+ nn_5+''+ nn_6+''+ nn_7+''+nn_8+' '+nn_9+''+nn_10+''+DV_1+''+DV_2;
  },
  //GERAR NUMERO DO RG
  gerarNumeroRG: function() {
    var nn_0 = Math.floor(Math.random() * 10);
    var nn_1 = Math.floor(Math.random() * 10);
    var nn_2 = Math.floor(Math.random() * 10);
    var nn_3 = Math.floor(Math.random() * 10);
    var nn_4 = Math.floor(Math.random() * 10);
    var nn_5 = Math.floor(Math.random() * 10);
    var nn_6 = Math.floor(Math.random() * 10);
    var nn_7 = Math.floor(Math.random() * 10);
    var DV = (parseInt(nn_0) * 2)+(parseInt(nn_1) * 3)+(parseInt(nn_2) * 4)+(parseInt(nn_3) * 5)+ (parseInt(nn_4) * 6)+(parseInt(nn_5) * 7)+ (parseInt(nn_6) * 8)+ (parseInt(nn_7) * 9);
    DV = 11 - (DV%11);
    if (DV >= 10) {
      DV = 0;
    }
    return nn_0+''+ nn_1+'.'+ nn_2+''+ nn_3+''+ nn_4+'.'+ nn_5+''+ nn_6+''+ nn_7+'-'+ DV;
  },
  //GERAR NUMERO DO CPF
  gerarNumeroCPF: function() {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var n4 = Math.floor(Math.random() * 10);
    var n5 = Math.floor(Math.random() * 10);
    var n6 = Math.floor(Math.random() * 10);
    var n7 = Math.floor(Math.random() * 10);
    var n8 = Math.floor(Math.random() * 10);
    var n9 = Math.floor(Math.random() * 10);

    var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (d1%11);
    if (d1 >= 10) {
      d1 = 0;
    }
    var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (d2%11);
    if (d2 >= 10) {
      d2 = 0;
    }
    var retorno = '';
    retorno = ''+n1+''+n2+''+n3+"."+n4+''+n5+''+n6+"."+''+n7+''+n8+''+n9+"-"+d1+''+d2;
    return retorno;
  },
  //CRIA ENDERECO
  criaEndereco: function() {
    app.buscaTipoMoradia();
    app.buscaLogradouro();
    app.criaNumLogradouro();
    app.buscaBairro();
    app.criaCepLogradouro();
  },
  //BUSCAR TIPO MORADIA
  buscaTipoMoradia: function() {
    var i = Math.floor(Math.random() * 7);
    $.ajax({         
      url: "./js/tipomoradia.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $("#tipo_moradia").val(json[i]['tipomoradia'])
      }
    })
  },
  //BUSCAR LOGRADOURO
  buscaLogradouro: function() {
    var i = Math.floor(Math.random() * 322);
    $.ajax({         
      url: "./js/logradouro.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $("#logradouro").val(json[i]['logradouro'])
      }
    })
  },
  //CRIA NUMERO LOGRADOURO
  criaNumLogradouro: function() {
    var n = Math.floor(Math.random() * 999);
    if (parseInt(n) == 0) {
      n = 'S/N';
    }
    $("#num_logradouro").val(n)
  },
  //CRIA NUMERO CEP
  criaCepLogradouro: function() {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var n4 = Math.floor(Math.random() * 10);
    var n5 = Math.floor(Math.random() * 10);
    var n6 = Math.floor(Math.random() * 10);
    var n7 = Math.floor(Math.random() * 10);
    var n8 = Math.floor(Math.random() * 10);
    if (parseInt(n1) == 0) {
      n1 = '1';
    }
    $("#cep_logradouro").val(n1+''+n2+'.'+n3+''+n4+''+n5+'-'+n6+''+n7+''+n8);
  },
  //BUSCAR BAIRRO
  buscaBairro: function() {
    var i = Math.floor(Math.random() * 488);
    $.ajax({         
      url: "./js/bairro.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $("#bairro").val(json[i]['bairro'])
      }
    })
  },
  //BUSCAR NOME MARCULINO
  buscaNomeMasculino: function() {
    var i = Math.floor(Math.random() * 10000);
    $.ajax({         
      url: "./js/nome_masculino.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $(".nome_pessoa").val(json[i]['nome'])
      }
    })
  },
  //BUSCAR NOME FEMININO
  buscaNomeFeminino: function() {
    var i = Math.floor(Math.random() * 10000);
    $.ajax({         
      url: "./js/nome_feminino.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $(".nome_pessoa").val(json[i]['nome'])
      }
    })
  },
  //BUSCAR SOBRENOME
  buscaSobrenome: function() {
    var i = Math.floor(Math.random() * 254);
    $.ajax({         
      url: "./js/sobrenome.json",
      type: "GET",
      dataType : "json",
      async:false
    }).done(function( json ) {
      if (json) {
        $(".sobrenome").val(json[i]['sobrenome'])
      }
    })
  },

  //CRIANDO HTML DOS DADOS DO FILHO
  criaOpcaoFilhos: function(maxfilho){
    var htmlfilho = "";
    for (var i = 1; i <= parseInt(maxfilho); i++) {
      htmlfilho += 
        '<div class="row nivel_3">'+
        '  <div class="form-group col-md-12">'+
        '    <label>5.1.'+i+'. Dados do filho</label>'+
        '  </div>'+
        '</div>'+
        '<div class="row nivel_4">'+
        '  <div class="form-group col-md-12">'+
        '    <label><i>5.1.'+i+'.1. Qual o Sexo?</i></label>'+
        '  </div>'+
        '</div>'+
        '<div class="row sub_nivel_4">'+
        '  <div class="form-check col-md-12">'+
        '    <input class="form-check-input" type="radio" name="sexofilho_opc'+i+'" id="masculino'+i+'" value="M" checked>'+
        '    <label class="form-check-label" for="masculino'+i+'">Masculino</label>'+
        '  </div>'+
        '</div>'+
        '<div class="row sub_nivel_4">'+
        '  <div class="form-check col-md-12">'+
        '    <input class="form-check-input form-check_ultimo" type="radio" name="sexofilho_opc'+i+'" id="feminino'+i+'" value="F">'+
        '    <label class="form-check-label" for="feminino'+i+'">Feminino</label>'+
        '  </div>'+
        '</div>'+

        '<div class="row nivel_4">'+
        '  <div class="form-group col-md-12">'+
        '    <label><i>5.1.'+i+'.2. Qual a idade?</i></label>'+
        '  </div>'+
        '</div>'+
        '<div class="row sub_nivel_4">'+
        '  <div class="form-group col-md-12">'+
        '    <input type="number" class="form-control" id="idadefilho_opc'+i+'" min="1" value="1">'+
        '  </div>'+
        '</div>'+

        '<div class="row nivel_4">'+
        '  <div class="form-group col-md-12">'+
        '    <label><i>5.1.'+i+'.3. Qual o local de nascimento?</i></label>'+
        '  </div>'+
        '</div>'+
        '<div class="form-row sub_nivel_4">'+
        '  <div class="form-group col-md-8">'+
        '    <input type="text" class="form-control cidadefilho_opc" id="cidadefilho_opc'+i+'" placeholder="Cidade">'+
        '  </div>'+
        '  <div class="form-group col-md-4">'+
        '    <select id="estadofilho_opc'+i+'" class="form-control estadofilho_opc">'+
        '      <option value="">Estado</option>'+
        '      <option value="AC">Acre</option>'+
        '      <option value="AL">Alagoas</option>'+
        '      <option value="AP">Amapá</option>'+
        '      <option value="AM">Amazonas</option>'+
        '      <option value="BA">Bahia</option>'+
        '      <option value="CE">Ceará</option>'+
        '      <option value="DF">Distrito Federal</option>'+
        '      <option value="ES">Espírito Santo</option>'+
        '      <option value="GO">Goiás</option>'+
        '      <option value="MA">Maranhão</option>'+
        '      <option value="MT">Mato Grosso</option>'+
        '      <option value="MS">Mato Grosso do Sul</option>'+
        '      <option value="MG">Minas Gerais</option>'+
        '      <option value="PA">Pará</option>'+
        '      <option value="PB">Paraíba</option>'+
        '      <option value="PR">Paraná</option>'+
        '      <option value="PE">Pernambuco</option>'+
        '      <option value="PI">Piauí</option>'+
        '      <option value="RJ">Rio de Janeiro</option>'+
        '      <option value="RN">Rio Grande do Norte</option>'+
        '      <option value="RS">Rio Grande do Sul</option>'+
        '      <option value="RO">Rondônia</option>'+
        '      <option value="RR">Roraima</option>'+
        '      <option value="SC">Santa Catarina</option>'+
        '      <option value="SP">São Paulo</option>'+
        '      <option value="SE">Sergipe</option>'+
        '      <option value="TO">Tocantins</option>'+
        '    </select>'+
        '  </div>'+
        '</div>'
        ;
    }
    $("#filhos").html(htmlfilho);
  },

  //PREENCHEDO OS DADOS DO FILHO
  criaDadosFilhos: function(maxfilho, sobrenomeprincipal, sobrenomeconjuge, nome_mae_filho, avo0_materna_filho, avo1_materno_filho){
    var date = new Date();
    var anoatual = date.getFullYear();
    var mesatual = date.getMonth();
    var diaatual = date.getDate();
     mesatual = mesatual + 1;
    if (mesatual < 10) {
      mesatual = '0'+mesatual;
    }

    if (diaatual < 10) {
      diaatual = '0'+diaatual;
    }
    var htmlfilho = "";
    for (var i = 1; i <= parseInt(maxfilho); i++) {
      if ($('input[name^="sexofilho_opc'+i+'"]:checked').val() == 'M') {
        app.buscaNomeMasculino();
      }
      else{
        app.buscaNomeFeminino();
      }
      var nome_pessoa = $(".nome_pessoa").val();
      var nome_filho = nome_pessoa+' '+sobrenomeconjuge+' '+sobrenomeprincipal;

      htmlfilho += 
        '<div class="cada_filho" num="'+i+'">'+

          '<div class="form-row">'+
            '<div class="form-group col-md-12">'+
              '<label for="nome_filho'+i+'">Nome</label>'+
              '<input type="text" class="form-control filho nome" id="nome_filho'+i+'" value="'+nome_filho+'">'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-12">'+
              '<label for="anotacoes_passaporte_filho'+i+'">Anotações do Passaporte</label>'+
              '<input type="text" class="form-control filho anotacoes_passaporte" id="anotacoes_passaporte_filho'+i+'" value="">'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-6">'+
              '<label for="nasc_filho'+i+'">Data Nasc.</label>'+
              '<input type="text" class="form-control filho nasc date" id="nasc_filho'+i+'">'+
            '</div>'+
            '<div class="form-group col-md-6">'+
              '<label for="sexo_filho'+i+'">Sexo</label>'+
              '<select id="sexo_filho'+i+'" class="form-control filho sexo">'+
                '<option value="F">Feminino</option>'+
                '<option value="M">Masculino</option>'+
              '</select>'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-3">'+
              '<label for="rg_filho'+i+'">RG</label>'+
              '<input type="text" class="form-control filho rg" id="rg_filho'+i+'" value="'+app.gerarNumeroRG()+'">'+
            '</div>'+
            '<div class="form-group col-md-3">'+
              '<label for="cpf_filho'+i+'">CPF</label>'+
              '<input type="text" class="form-control filho cpf" id="cpf_filho'+i+'" value="'+app.gerarNumeroCPF()+'">'+
            '</div>'+
            '<div class="form-group col-md-3">'+
              '<label for="te_filho'+i+'">Titulo de Eleitor</label>'+
              '<input type="text" class="form-control filho te" id="te_filho'+i+'" value="">'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-12">'+
              '<label for="nome_mae_filho'+i+'">Mãe</label>'+
              '<input type="text" class="form-control filho nome_mae_filho" id="nome_mae_filho'+i+'" value="'+nome_mae_filho+'">'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-6">'+
              '<label for="avo0_materna_filho'+i+'">Avó Materna</label>'+
              '<input type="text" class="form-control filho avo0_materna_filho" id="avo0_materna_filho'+i+'" value="'+avo0_materna_filho+'">'+
            '</div>'+

            '<div class="form-group col-md-6">'+
              '<label for="avo1_materno_filho'+i+'">Avô Materno</label>'+
              '<input type="text" class="form-control filho avo1_materno_filho" id="avo1_materno_filho'+i+'" value="'+avo1_materno_filho+'">'+
            '</div>'+
          '</div>'+

          '<div class="form-row">'+
            '<div class="form-group col-md-6">'+
              '<label for="cidade_filho'+i+'">Cidade Nasc.</label>'+
              '<input type="text" class="form-control filho cidade" id="cidade_filho'+i+'">'+
            '</div>'+
            '<div class="form-group col-md-6">'+
              '<label for="estado_filho'+i+'">Estado Nasc.</label>'+
              '<select id="estado_filho'+i+'" class="form-control filho estado">'+
                '<option value="">Selecione</option>'+
                '<option value="AC">Acre</option>'+
                '<option value="AL">Alagoas</option>'+
                '<option value="AP">Amapá</option>'+
                '<option value="AM">Amazonas</option>'+
                '<option value="BA">Bahia</option>'+
                '<option value="CE">Ceará</option>'+
                '<option value="DF">Distrito Federal</option>'+
                '<option value="ES">Espírito Santo</option>'+
                '<option value="GO">Goiás</option>'+
                '<option value="MA">Maranhão</option>'+
                '<option value="MT">Mato Grosso</option>'+
                '<option value="MS">Mato Grosso do Sul</option>'+
                '<option value="MG">Minas Gerais</option>'+
                '<option value="PA">Pará</option>'+
                '<option value="PB">Paraíba</option>'+
                '<option value="PR">Paraná</option>'+
                '<option value="PE">Pernambuco</option>'+
                '<option value="PI">Piauí</option>'+
                '<option value="RJ">Rio de Janeiro</option>'+
                '<option value="RN">Rio Grande do Norte</option>'+
                '<option value="RS">Rio Grande do Sul</option>'+
                '<option value="RO">Rondônia</option>'+
                '<option value="RR">Roraima</option>'+
                '<option value="SC">Santa Catarina</option>'+
                '<option value="SP">São Paulo</option>'+
                '<option value="SE">Sergipe</option>'+
                '<option value="TO">Tocantins</option>'+
              '</select>'+
            '</div>'+
          '</div>'+
        '</div>'+

        '<div class="form-row">'+
          '<div class="form-group col-md-3">'+
            '<label for="obito_filho'+i+'">Falecido</label>'+
            '<select id="obito_filho'+i+'" class="form-control filho obito_filho" num="'+i+'">'+
              '<option value="n">Não</option>'+
              '<option value="s">Sim</option>'+
            '</select>'+
          '</div>'+

          '<div class="form-group col-md-6 falecido_filho'+i+'" style="display: none;">'+
            '<label for="cidade_obito_filho'+i+'">Cidade do Falecimento</label>'+
            '<input type="text" class="form-control filho cidade_obito_filho" id="cidade_obito_filho'+i+'" placeholder="Cidade do Falecimento">'+
          '</div>'+

          '<div class="form-group col-md-3 falecido_filho'+i+'" style="display: none;">'+
            '<label for="estado_obito_filho'+i+'">Estado do Falecimento</label>'+
            '<select id="estado_obito_filho'+i+'" class="form-control filho estado_obito_filho">'+
              '<option value="">Selecione</option>'+
              '<option value="AC">Acre</option>'+
              '<option value="AL">Alagoas</option>'+
              '<option value="AP">Amapá</option>'+
              '<option value="AM">Amazonas</option>'+
              '<option value="BA">Bahia</option>'+
              '<option value="CE">Ceará</option>'+
              '<option value="DF">Distrito Federal</option>'+
              '<option value="ES">Espírito Santo</option>'+
              '<option value="GO">Goiás</option>'+
              '<option value="MA">Maranhão</option>'+
              '<option value="MT">Mato Grosso</option>'+
              '<option value="MS">Mato Grosso do Sul</option>'+
              '<option value="MG">Minas Gerais</option>'+
              '<option value="PA">Pará</option>'+
              '<option value="PB">Paraíba</option>'+
              '<option value="PR">Paraná</option>'+
              '<option value="PE">Pernambuco</option>'+
              '<option value="PI">Piauí</option>'+
              '<option value="RJ">Rio de Janeiro</option>'+
              '<option value="RN">Rio Grande do Norte</option>'+
              '<option value="RS">Rio Grande do Sul</option>'+
              '<option value="RO">Rondônia</option>'+
              '<option value="RR">Roraima</option>'+
              '<option value="SC">Santa Catarina</option>'+
              '<option value="SP">São Paulo</option>'+
              '<option value="SE">Sergipe</option>'+
              '<option value="TO">Tocantins</option>'+
            '</select>'+
          '</div>'+
        '</div>'+

        '<div class="form-row">'+

          '<div class="form-group col-md-3 falecido_filho'+i+'" style="display: none;">'+
            '<label for="data_obito_filho'+i+'">Data do Falecimento</label>'+
            '<input type="text" class="form-control filho date data_obito_filho" id="data_obito_filho'+i+'" placeholder="Data do Falecimento">'+
          '</div>'+

          '<div class="form-group col-md-9 falecido_filho'+i+'" style="display: none;">'+
            '<label for="motivo_obito_filho'+i+'">Motivo do Falecimento</label>'+
            '<input type="text" class="form-control filho motivo_obito_filho" id="motivo_obito_filho'+i+'" placeholder="Motivo do Falecimento...">'+
          '</div>'+
        '</div>'+

        '<div class="form-row">'+
          '<div class="form-group col-md-3">'+
            '<label>Empregado</label>'+
            '<select class="form-control filho empregado_filho" num="'+i+'">'+
              '<option value="n">Não</option>'+
              '<option value="s">Sim</option>'+
            '</select>'+
          '</div>'+
          '<div class="form-group col-md-3 empregado_filho'+i+'" style="display: none;">'+
            '<label for="pis_pasep_filho'+i+'">PIS/PASEP</label>'+
            '<input type="text" class="form-control filho pis_pasep pis_pasep_filho'+i+'" id="pis_pasep_filho'+i+'" placeholder="">'+
          '</div>'+
          '<div class="form-group col-md-3 empregado_filho'+i+'" style="display: none;">'+
            '<label for="admissao_filho'+i+'">Data Admissão</label>'+
            '<input type="text" class="form-control filho date admissao_filho admissao_filho'+i+'" id="admissao_filho'+i+'" placeholder="">'+
          '</div>'+
          '<div class="form-group col-md-3 empregado_filho'+i+'" style="display: none;">'+
            '<label for="demissao_filho'+i+'">Data Demissão</label>'+
            '<input type="text" class="form-control filho date demissao_filho demissao_filho'+i+'" id="demissao_filho'+i+'" placeholder="">'+
          '</div>'+
        '</div>'+

        '<div class="form-row empregado_filho'+i+'" style="display: none;">'+
          '<div class="form-group col-md-2 empregado_filho'+i+'" style="display: none;">'+
            '<label for="remuneracao_filho'+i+'">Remuneração</label>'+
            '<input type="text" class="form-control filho remuneracao_filho'+i+' valor" id="remuneracao_filho'+i+'" placeholder="0,00" value="0,00">'+
          '</div>'+
          '<div class="form-group col-md-4">'+
            '<label for="empregador_filho'+i+'">Nome do Empregador</label>'+
            '<input type="text" class="form-control filho empregador_filho'+i+'" id="empregador_filho'+i+'" placeholder="">'+
          '</div>'+
          '<div class="form-group col-md-3">'+
            '<label for="cnpj_empregador_filho'+i+'">CNPJ do Empregador</label>'+
            '<input type="text" class="form-control filho cnpj cnpj_empregador_filho'+i+'" id="cnpj_empregador_filho'+i+'" placeholder="">'+
          '</div>'+
          '<div class="form-group col-md-3">'+
            '<label for="cargo_filho'+i+'">Cargo</label>'+
            '<input type="text" class="form-control filho cargo_filho'+i+'" id="cargo_filho'+i+'" placeholder="">'+
          '</div>'+
        '</div>'+

        '<div class="form-row empregado_filho'+i+'" style="display: none;">'+
          '<div class="form-group col-md-3">'+
            '<label for="cep_logradouro_empregador_filho'+i+'">CEP&nbsp;do&nbsp;Empre.</label>'+
            '<input type="text" class="form-control filho cep cep_logradouro_empregador_filho'+i+'" id="cep_logradouro_empregador_filho'+i+'">'+
          '</div>'+

          '<div class="form-group col-md-4">'+
            '<label for="endereco_empregador_filho'+i+'">Endereço&nbsp;do&nbsp;Empre.</label>'+
            '<input type="text" class="form-control filho endereco_empregador_filho'+i+'" id="endereco_empregador_filho'+i+'">'+
          '</div>'+

          '<div class="form-group col-md-2">'+
            '<label for="num_logradouro_empregador_filho'+i+'">N°&nbsp;do&nbsp;Empre.</label>'+
            '<input type="text" class="form-control filho num_logradouro_empregador_filho'+i+'" id="num_logradouro_empregador_filho'+i+'">'+
          '</div>'+

          '<div class="form-group col-md-3">'+
            '<label for="bairro_empregador_filho'+i+'">Bairro&nbsp;do&nbsp;Empre.</label>'+
            '<input type="text" class="form-control filho bairro_empregador_filho'+i+'" id="bairro_empregador_filho'+i+'">'+
          '</div>'+
        '</div>'+

        '<div class="form-row empregado_filho'+i+'" style="display: none;">'+
          '<div class="form-group col-md-8">'+
            '<label for="cidade_empregador_filho'+i+'">&nbsp;</label>'+
            '<input type="text" class="form-control filho cidade_empregador_filho'+i+'" id="cidade_empregador_filho'+i+'" placeholder="Cidade do Empregador">'+
          '</div>'+

          '<div class="form-group col-md-4">'+
            '<label for="estado_empregador_filho'+i+'">&nbsp;</label>'+
            '<select id="estado_empregador_filho'+i+'" class="form-control filho estado_empregador_filho'+i+'">'+
              '<option value="">Estado do Empregador</option>'+
              '<option value="AC">Acre</option>'+
              '<option value="AL">Alagoas</option>'+
              '<option value="AP">Amapá</option>'+
              '<option value="AM">Amazonas</option>'+
              '<option value="BA">Bahia</option>'+
              '<option value="CE">Ceará</option>'+
              '<option value="DF">Distrito Federal</option>'+
              '<option value="ES">Espírito Santo</option>'+
              '<option value="GO">Goiás</option>'+
              '<option value="MA">Maranhão</option>'+
              '<option value="MT">Mato Grosso</option>'+
              '<option value="MS">Mato Grosso do Sul</option>'+
              '<option value="MG">Minas Gerais</option>'+
              '<option value="PA">Pará</option>'+
              '<option value="PB">Paraíba</option>'+
              '<option value="PR">Paraná</option>'+
              '<option value="PE">Pernambuco</option>'+
              '<option value="PI">Piauí</option>'+
              '<option value="RJ">Rio de Janeiro</option>'+
              '<option value="RN">Rio Grande do Norte</option>'+
              '<option value="RS">Rio Grande do Sul</option>'+
              '<option value="RO">Rondônia</option>'+
              '<option value="RR">Roraima</option>'+
              '<option value="SC">Santa Catarina</option>'+
              '<option value="SP">São Paulo</option>'+
              '<option value="SE">Sergipe</option>'+
              '<option value="TO">Tocantins</option>'+
            '</select>'+
          '</div>'+
        '</div>'+
        '<div class="form-row empregado_filho'+i+'" style="display: none;">'+
          '<div class="form-group col-md-12">'+
            '<label for="anotacoes_empregador_filho'+i+'">Anotações</label>'+
            '<input type="text" class="form-control filho anotacoes_empregador_filho'+i+'" id="anotacoes_empregador_filho'+i+'" placeholder="">'+
          '</div>'+
        '</div>'+

        '<div class="form-row">'+
          '<div class="form-group col-md-3">'+
            '<label>Atestado Médico</label>'+
            '<select id="atestadofilho'+i+'" class="form-control filho atestado_filho" num="'+i+'">'+
              '<option value="n">Não</option>'+
              '<option value="s">Sim</option>'+
            '</select>'+
          '</div>'+

          '<div class="form-group col-md-7 atestado_filho'+i+'" style="display: none;">'+
            '<label for="descricao_atestado_filho'+i+'">Descrição do Atestado</label>'+
            '<input type="text" class="form-control filho'+i+' descricao_atestado_filho'+i+'" id="descricao_atestado_filho'+i+'" placeholder="">'+
          '</div>'+

          '<div class="form-group col-md-2 atestado_filho'+i+'" style="display: none;">'+
            '<label for="data_atestado_filho'+i+'">Data do Atestado</label>'+
            '<input type="text" class="form-control filho'+i+' data_atestado_filho'+i+' date" id="data_atestado_filho'+i+'">'+
          '</div>'+
        '</div>'
    }

    $("#grupofilhos").html(htmlfilho);
    $('.date').mask('99/99/9999');
    $('.cpf').mask('999.999.999-99');
    $('.pis_pasep').mask('999.99999.99-9');
    $('.cnpj').mask('99.999.999/9999-99');
    $('.rg').mask('99.999.999-9');
    $('.te').mask('9999 9999 9999');
    $('.valor').maskMoney({
      allowNegative: false, 
      thousands:'', 
      decimal:',', 
      affixesStay: false
    });

    for (var i = 1; i <= parseInt(maxfilho); i++) {
      if ($('input[name^="sexofilho_opc'+i+'"]:checked').val() == 'M') {
        var sexofilho = 'M';
      }
      else{
        var sexofilho = 'F';
      }
      $('#sexo_filho'+i).val(sexofilho);
      $('#cidade_filho'+i).val($('#cidadefilho_opc'+i).val().toUpperCase());
      $('#estado_filho'+i).val($('#estadofilho_opc'+i).val().toUpperCase());

      if (parseInt($("#idadefilho_opc"+i).val()) >= 16) {
        $('#te_filho'+i).val(app.gerarNumeroTituloEleitor());
      }

      var ano_nasc_filho = anoatual - parseInt($("#idadefilho_opc"+i).val());
      var mes_nasc_filho = mesatual;
      var dia_nasc_filho = diaatual;

      var data_nasc_filho = dia_nasc_filho+'/'+mes_nasc_filho+'/'+ano_nasc_filho;
      $("#nasc_filho"+i).val(data_nasc_filho);
    }

    //CARREGO A DATA ATUAL PARA O OBITO
    var ano_obito = anoatual;
    var mes_obito = mesatual;
    var dia_obito = diaatual;
    $(".data_obito_filho").val(dia_obito+'/'+mes_obito+'/'+ano_obito);

    //MOSTRA/ESCONDE DADOS DO FALECIMENTO FILHO
    $('.obito_filho').change(function(){
      var num = $(this).attr('num');
      if ($(this).val() == 's') {
        $(".falecido_filho"+num).css("display","");
        $("#cidade_obito_filho"+num).val($('#cidade_filho'+num).val().toUpperCase());
        $("#estado_obito_filho"+num).val($('#estado_filho'+num).val().toUpperCase());
      }
      else{
        $(".falecido_filho"+num).css("display","none");
        $("#cidade_obito_filho"+num).val("");
        $("#estado_obito_filho"+num).val("");
        $("#motivo_obito_filho"+num).val("");
      }
    });

    //MOSTRA/ESCONDE DADOS DO EMPREGADOR DO FILHO
    $('.empregado_filho').change(function(){
      var num = $(this).attr('num');
      var possui_pis_pasep_filho = $(this).val();
      if ($(this).val() == 's') {
        $(".empregado_filho"+num).css("display","");
        $("#pis_pasep_filho"+num).val(app.gerarNumeroPIS_PASEP());
        $("#cnpj_empregador_filho"+num).val(app.gerarNumeroCNPJ());
        $("#cidade_empregador_filho"+num).val($("#cidade_filho"+num).val().toUpperCase());
        $("#estado_empregador_filho"+num).val($("#estado_filho"+num).val());

        app.criaEndereco();
        $("#endereco_empregador_filho"+num).val($("#tipo_moradia").val()+' '+$("#logradouro").val());
        $("#num_logradouro_empregador_filho"+num).val($("#num_logradouro").val());
        $("#cep_logradouro_empregador_filho"+num).val($("#cep_logradouro").val());
        $("#bairro_empregador_filho"+num).val($("#bairro").val());
      }
      else{
        $(".empregado_filho"+num).css("display","none");
        $("#pis_pasep_filho"+num).val("");
        $("#cnpj_empregador_filho"+num).val("");
        $("#cidade_empregador_filho"+num).val("");
        $("#estado_empregador_filho"+num).val("");
        $("#endereco_empregador_filho"+num).val("");
        $("#num_logradouro_empregador_filho"+num).val("");
        $("#cep_logradouro_empregador_filho"+num).val("");
        $("#bairro_empregador_filho"+num).val("");
      }
    });
    
    var modelo_texto_atestado = 'Atesto para os devidos fins, que o Sr. [NOME_PACIENTE], inscrito no CPF n.º [NUM_CPF_PACIENTE], foi atendido no dia [DATA_ATESTADO] às [HORA_ATESTADO] apresentando quadro de [PROBLEMA_SAUDE] e necessita de [DIA_REPOUSO] dias de repouso.'

    //MOSTRA/ESCONDE DADOS DO ATESTADO
    $('.atestado_filho').change(function(){
      var num = $(this).attr('num');
      if ($(this).val() == 's') {
        $(".atestado_filho"+num).css("display","");
        $("#data_atestado_filho"+num).val(diaatual+'/'+mesatual+'/'+anoatual);

        var aux_modelo_texto_atestado = modelo_texto_atestado;
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[NOME_PACIENTE]',$("#nome_filho"+num).val());
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[NUM_CPF_PACIENTE]',$("#cpf_filho"+num).val());
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[DATA_ATESTADO]',$("#data_atestado_filho"+num).val());
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[HORA_ATESTADO]','12:00');
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[PROBLEMA_SAUDE]','febre');
        var aux_modelo_texto_atestado = aux_modelo_texto_atestado.replace('[DIA_REPOUSO]','15');

        $("#descricao_atestado_filho"+num).val(aux_modelo_texto_atestado);
      }
      else{
        $(".atestado_filho"+num).css("display","none");
        $("#descricao_atestado_filho"+num).val("");
        $("#data_atestado_filho"+num).val("");
      }
    });

    //CARREGO A DATA ATUAL PARA A ADMISSAO
    $(".admissao_filho").val(diaatual+'/'+mesatual+'/'+anoatual);
  },

  verificaDadosFalecidoFilho: function() {
    var retorno = false;
    $('.obito_filho').each(function(){
      if ($(this).val() == 's') {
        var num = $(this).attr('num');
        if ($("#cidade_obito_filho"+num).val() == '' || $("#estado_obito_filho"+num).val() == '' || $("#data_obito_filho"+num).val() == '' || $("#motivo_obito_filho"+num).val() == '') {
          retorno = true;
        }
      }
    });
    return retorno;
  },

  verificaDadosEmpregadorFilho: function() {
    var retorno = false;
    $('.empregado_filho').each(function(){
      if ($(this).val() == 's') {
        var num = $(this).attr('num');
        if ($("#pis_pasep_filho"+num).val() == '' || $("#admissao_filho"+num).val() == '' || $("#empregador_filho"+num).val() == '' || $("#cnpj_empregador_filho"+num).val() == '' || $("#cargo_filho"+num).val() == '' || $("#endereco_empregador_filho"+num).val() == '' || $("#bairro_empregador_filho"+num).val() == '' || $("#cidade_empregador_filho"+num).val() == '' || $("#estado_empregador_filho"+num).val() == '') {
          retorno = true;
        }
      }
    });
    return retorno;
  },

  dateTime: function() {
    let now = new Date;
    let ano = now.getFullYear();
    let mes = now.getMonth() + 1;
    let dia = now.getDate();

    let hora = now.getHours();
    let min = now.getMinutes();
    let seg = now.getSeconds();

    if (parseInt(mes) < 10) {
      mes = '0'+mes;
    }
    if (parseInt(dia) < 10) {
      dia = '0'+dia;
    }
    if (parseInt(hora) < 10) {
      hora = '0'+hora;
    }
    if (parseInt(min) < 10) {
      min = '0'+min;
    }
    if (parseInt(seg) < 10) {
      seg = '0'+seg;
    }
    return ano+'-'+mes+'-'+dia+' '+hora+':'+min+':'+seg;
  },
  getIds: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        window.localStorage.setItem('userId',uid);
        $("#OneSignalUserId").val(uid);
        app.cadastraUser(uid);
      }
    });   
  },
  cadastraUser: function(uid) {
    console.log(uid)
    firebase.database().ref('gerador-de-documentos-users').child(uid).set({
      userId: uid,
      datacadastro: app.dateTime()
    });
  }
};

app.initialize();
if (!window.localStorage.getItem('userId')) {
  app.getIds();
}