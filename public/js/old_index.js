// import Vue from 'vue'
// var vue = require('vue')
// console.log("Vue Version " + Vue.version );

var tipo_da_experiencia = []
var input_text_outros, txt_outros
var lista_checkboxs_tipos_de_violencia = []

// class GerenciadorDeEventos{
//     constructor(){
//         eventoTxtOutros()
//     }
// }

function show_hide_texto_historico(){
    //var btn = document.getElementById('bt_hide_show');
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var album_fotos = document.getElementsByClassName('album')
    var img_logo = document.getElementsByClassName('logo_gecal')

    if (txt_inicial.style.display == 'none'){
        txt_inicial.style.display = 'block';
        img_logo[0].style.display = 'block';
        txt_historico.style.display = 'none';
        projetos.style.display = 'none';
        pesquisadores.style.display = 'none';
        bolsistas.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        album_fotos[0].style.display = 'none'
    } else {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'block';
        img_logo[0].style.display = 'block';
        projetos.style.display = 'none';
        pesquisadores.style.display = 'none';
        bolsistas.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        album_fotos[0].style.display = 'none'
    }
}

function mostra_projetos_de_pesquisa(){

    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var album_fotos = document.getElementsByClassName('album')
    var img_logo = document.getElementsByClassName('logo_gecal')

    if (projetos.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        pesquisadores.style.display = 'none';
        bolsistas.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        projetos.style.display = 'block';
        album_fotos[0].style.display = 'none'
        img_logo[0].style.display = 'block';
    }
}

function mostra_projetos_de_extensao(){
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var album_fotos = document.getElementsByClassName('album')
    var img_logo = document.getElementsByClassName('logo_gecal')

    if (projetos_de_extensao.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        pesquisadores.style.display = 'none';
        bolsistas.style.display = 'none';
        projetos.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        projetos_de_extensao.style.display = 'block';
        album_fotos[0].style.display = 'none'
        img_logo[0].style.display = 'block';
    }
}

function alternar_abas(){
    var tab_content_projetos_em_andamento = document.getElementById("tabContent_projetos_em_andamento")
    var tab_content_projetos_concluidos = document.getElementById("tabContent_projetos_concluidos")

    if (tab_content_projetos_em_andamento.style.display == 'block'){
        tab_content_projetos_em_andamento.style.display = 'none'
        tab_content_projetos_concluidos.style.display = 'block'
    } else {
        tab_content_projetos_em_andamento.style.display = 'block'
        tab_content_projetos_concluidos.style.display = 'none'
    }

}

function alternar_abas_extensao(){
    var tab_content_proj_ext_andamento = document.getElementById("tabContent_proj_extensao_em_andamento")
    var tab_content_proj_ext_concluidos = document.getElementById("tabContent_projetos_ext_concluidos")

    if (tab_content_proj_ext_andamento.style.display == 'block'){
        tab_content_proj_ext_andamento.style.display = 'none';
        tab_content_proj_ext_concluidos.style.display = 'block';
    } else {
        tab_content_proj_ext_andamento.style.display = 'block';
        tab_content_proj_ext_concluidos.style.display = 'none';
    }
}

function mostra_pesquisadores() {
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var album_fotos = document.getElementsByClassName('album')
    var img_logo = document.getElementsByClassName('logo_gecal')

    if (pesquisadores.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        projetos.style.display = 'none';
        bolsistas.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        pesquisadores.style.display = 'block';
        album_fotos[0].style.display = 'none'
        img_logo[0].style.display = 'block';
    }
}

function mostra_bolsistas() {
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var album_fotos = document.getElementsByClassName('album')
    var img_logo = document.getElementsByClassName('logo_gecal')

    if (bolsistas.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        projetos.style.display = 'none';
        pesquisadores.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        formulario_denuncia2.style.display = 'none';
        bolsistas.style.display = 'block';
        album_fotos[0].style.display = 'none'
        img_logo[0].style.display = 'block';
    }
}

// function mostra_formulario() {
//     var txt_inicial = document.getElementById('tituloJumbo');
//     var txt_historico = document.getElementById('historico');
//     var projetos = document.getElementById('abas_projetos');
//     var pesquisadores = document.getElementById("lista_pesquisadores")
//     var bolsistas = document.getElementById("lista_de_bolsistas")
//     var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
//     var formulario_denuncia = document.getElementById("formulario_de_denuncias")
//     var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
//     var album_fotos = document.getElementsByClassName('album')
//
//     if (formulario_denuncia.style.display == 'none') {
//         txt_inicial.style.display = 'none';
//         txt_historico.style.display = 'none';
//         projetos.style.display = 'none';
//         pesquisadores.style.display = 'none';
//         projetos_de_extensao.style.display = 'none';
//         bolsistas.style.display = 'none';
//         formulario_denuncia2.style.display = 'none';
//         album_fotos[0].style.display = 'none'
//         formulario_denuncia.style.display = 'block';
//     }
// }

function mostra_formulario_2() {
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var primeiro_formulario = document.getElementById("primeiro_formulario")
    var form_relato = document.getElementById("texto_relato")
    var img_logo = document.getElementsByClassName('logo_gecal')
    var album_fotos = document.getElementsByClassName('album')

    // console.log('img_logo.display')
    // console.log(img_logo[0].style.display)

    if (primeiro_formulario.style.display == 'none') {
        form_relato.style.display = 'none'
        primeiro_formulario.style.display = 'block'
    }

    if (formulario_denuncia2.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        projetos.style.display = 'none';
        pesquisadores.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        bolsistas.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        img_logo[0].style.display = 'none'
        album_fotos[0].style.display = 'none'

        formulario_denuncia2.style.display = 'block';
    }
}

function mostrarGaleria() {
    var txt_inicial = document.getElementById('tituloJumbo');
    var txt_historico = document.getElementById('historico');
    var projetos = document.getElementById('abas_projetos');
    var pesquisadores = document.getElementById("lista_pesquisadores")
    var bolsistas = document.getElementById("lista_de_bolsistas")
    var projetos_de_extensao = document.getElementById("abas_projetos_extensao")
    var formulario_denuncia = document.getElementById("formulario_de_denuncias")
    var formulario_denuncia2 = document.getElementById("formulario_de_denuncias2")
    var primeiro_formulario = document.getElementById("primeiro_formulario")
    var form_relato = document.getElementById("texto_relato")
    var img_logo = document.getElementsByClassName('logo_gecal')
    var album_fotos = document.getElementsByClassName('album')

    // console.log('img_logo.display')
    // console.log(img_logo[0].style.display)

    if (primeiro_formulario.style.display == 'none') {
        form_relato.style.display = 'none'
        primeiro_formulario.style.display = 'block'
    }

    if (formulario_denuncia2.style.display == 'none') {
        txt_inicial.style.display = 'none';
        txt_historico.style.display = 'none';
        projetos.style.display = 'none';
        pesquisadores.style.display = 'none';
        projetos_de_extensao.style.display = 'none';
        bolsistas.style.display = 'none';
        formulario_denuncia.style.display = 'none';
        img_logo[0].style.display = 'none';
        formulario_denuncia2.style.display = 'none';

        album_fotos[0].style.display = 'block'
    }
}


function habilita_desabilita_text_input(){
    txt_outros = document.getElementById("input_outros")

    // console.log("txt_outros.disabled")
    // console.log(txt_outros.disabled)

    if (txt_outros.disabled == true)
        txt_outros.disabled = false
    else if (txt_outros.disabled == false){
        txt_outros.disabled = true
        txt_outros.innerHTML == ''
    }

    txt_outros.focus()
}

function habilita_desabilita_text_input_django(){
    txt_outros = document.getElementById("id_txt_outros")

    // console.log("txt_outros.disabled")
    // console.log(txt_outros.disabled)

    if (txt_outros.disabled == true)
        txt_outros.disabled = false
    else if (txt_outros.disabled == false){
        txt_outros.disabled = true
        txt_outros.innerHTML == ''
    }

    txt_outros.focus()
}

function eventoTxtOutros(){
    let form = document.getElementById('form_denuncia')
    let btn_prosseguir = document.getElementById("botao_ch_form")
    let txt_outros = document.getElementById('input_outros')
    form.onkeydown = evt => {
        
        let spaceKey = 32
        let enterKey = 13
        if (evt.keyCode == enterKey || evt.keyCode == spaceKey){ //|| evt.keyCode == spaceKey)
            evt.preventDefault()
            if (evt.keyCode == spaceKey){
                txt_outros.value += ' '
                // console.log(txt_outros.value)
            }
        }

    }
}

function chama_formulario_de_descricao() {

    // let form = document.getElementById('form_denuncia')
    // let btn_prosseguir = document.getElementById("botao_ch_form")
    // btn_prosseguir.onkeydown = evt => {
    //     console.log('entrou no evento do botão', evt)
    //     console.log('evt.keyCode', evt.keyCode)
    //     let spaceKey = 32
    //     let enterKey = 13
    //     if (evt.keyCode == enterKey && evt.keyCode == spaceKey) {
    //         form.onkeydown = evt => {
    //             evt.preventDefault()
    //         }
    //     }
    //     if (evt.keyCode == spaceKey) {
    //         form.onkeydown = evt => {
    //             evt.preventDefault()
    //         }
    //         evt.preventDefault()
    //         btn_prosseguir.click()
    //     }
    // }

    tipo_da_experiencia = document.getElementsByClassName("rad_tipo")
    txt_outros = document.getElementById("input_outros")
    lista_checkboxs_tipos_de_violencia = document.getElementsByClassName("ch_violencia")

    var contador = 0

    for (var i = 0; i <  lista_checkboxs_tipos_de_violencia.length; i++){
        if (lista_checkboxs_tipos_de_violencia[i].checked == true)
            contador++
    }

    if (contador == 0) {
        alert("Nenhum tipo selecionado")
    } else {
        if (!txt_outros.disabled == true) {
            input_text_outros = document.getElementById("input_outros").value
            if (input_text_outros.length == 0){
                alert("Descrição de outros vazio!")
            } else {
                document.getElementById("primeiro_formulario").style.display = 'none'
                document.getElementById("texto_relato").style.display = 'block'
            }

        } else {
            document.getElementById("primeiro_formulario").style.display = 'none'
            document.getElementById("texto_relato").style.display = 'block'
        }

    }
        // document.getElementById("primeiro_formulario").style.display = 'none'
        // texto_relato = document.getElementById("texto_relato").style.display = 'block'
}

