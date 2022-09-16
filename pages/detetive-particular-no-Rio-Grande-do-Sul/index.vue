<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detetive particular no Rio Grande do Sul
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está no Rio Grande do Sul</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detetive Particular no Rio Grande do Sul acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detetives Particulares está no Rio Grande do Sul a mais de 25 anos proporcionando a seus clientes
        a verdade que eles tanto buscam, tudo isso dentro do mais absoluto sigilo e discrição. Nosso objetivo é levar o
        resultado no menor tempo possível e com a eficiência necessária.
      </p>
      <p class="fw-500 text-justify">
        Ao longo desses anos, temos centenas e até mesmo milhares de casos resolvidos. Não deixe mais
        a dúvida assombrar sua vida, a insegurança e incerteza não devem existir.
      </p>
      <p class="fw-500 text-justify">
        Somos especialista em casos Conjugais, Empresariais, Políticos, Localização de Pessoas Desaparecidas, trabalhamos
        em parceria com advogados para obtenção de provas,
        e muitos outros casos. Entre em contato conosco que teremos a satisfação de ajudá-lo a sanar todas as suas dúvidas.
      </p>
      <h4 class="text-uppercase flex-fill text-center mt-40 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Fale com um detetive na sua cidade
      </h4>
      <section class=" col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades A -->
          <div class="position-relative border shadow border-radius-10 overflow-hidden col-12 mt-30 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AltoFeliz">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Alto Feliz - RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Alvorada">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Alvorada - RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AmaralFerrador">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Amaral Ferrador – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AntaGorda">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Anta Gorda – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Arambare">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arambaré – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ararica">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Araricá – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ArroioDoMeio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arroio do Meio – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ArroioDoSal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arroio do Sal – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ArroioDoTigre">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arroio do Tigre – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ArroioDosRatos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arroio dos Ratos – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Arvorezinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Arvorezinha – RS
              </a>
            </div>
          </div>
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                B
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioPinhal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Pinhal - RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Barao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Barão - RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BaraoDoTriunfo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Barão do Triunfo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BomRetiroDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Bom Retiro do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BoqueirãoDoLeao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Boqueirão do Leão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BomPrincipio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Bom Princípio – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Brochier">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Brochier – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Butiá">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Butiá – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BarraDoRibeiro">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Barra do Ribeiro – RS
              </a>
            </div>
          </div>
          <!-- Cidades C -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CachoeiraDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cachoeira do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cachoeirinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cachoeirinha – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Camaqua">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Camaquã – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampoBom">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campo Bom – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CerroBranco">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cerro Branco – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CerroGrandeDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cerro Grande do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Charqueadas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Charqueadas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Candelaria">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Candelária – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Canoas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Canoas – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CanudosDoVale">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Canudos do Vale – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CapaoDaCanoa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Capão da Canoa – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Chuvisca">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Chuvisca – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cidreira">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cidreira – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Colinas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Colinas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CapelaDeSantana">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Capela de Santana – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Capitao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Capitão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CapivariDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Capivari do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Caraa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Caraá – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CoqueiroBaixo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Coqueiro Baixo – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cristal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cristal – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CruzeiroDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cruzeiro do Sul – RS
              </a>
            </div>
          </div>
          <!-- Cidades D -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                D
              </h5>
            </div>
            <div class="col-lg mt-4 px-0">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DoisIrmaos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Dois Irmãos – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DomFeliciano">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Dom Feliciano – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DomPedroDeAlcantara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Dom Pedro de Alcântara – RS
              </a>
            </div>
          </div>
          <!-- Cidades E -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                E
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="EldoradoDoSul">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Eldorado do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Esteio">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Esteio – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Estrela">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Estrela – RS
            </a>
          </div>
          <!-- Cidades F -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                F
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="FazendaVilanova">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Fazenda Vilanova – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Feliz">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Feliz – RS
            </a>
          </div>
          <!-- Cidades G -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                G
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="GeneralCamara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> General Câmara – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Glorinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Glorinha – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Gravatai">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Gravataí – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Guaiba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Guaíba – RS
              </a>
            </div>
          </div>
          <!-- Cidades H -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                H
              </h5>
            </div>
            <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Harmonia">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Harmonia – RS
            </a>
          </div>
          <!-- Cidades I -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                I
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ibirama">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ibirama – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Igrejinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Igrejinha – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ilopolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ilópolis – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Imigrante">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Imigrante – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itati">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itati – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ivoti">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ivoti – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Imbe">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Imbé – RS
              </a>
            </div>
          </div>
          <!-- Cidades L -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                L
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lagoao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lagoão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lajedo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lajedo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="LindolfoCollor">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lindolfo Collor – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="LinhaNova">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Linha Nova – RS
              </a>
            </div>
          </div>
          <!-- Cidades M -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Maquine">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Maquiné – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MarianaPimentel">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mariana Pimentel – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MarquesDeSouza">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Marques de Souza – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MatoLeitao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mato Leitão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MinasDoLeao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Minas do Leão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Montenegro">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Montenegro – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MorrinhosDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Morrinhos do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MorroReuter">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Morro Reuter – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Mostardas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mostardas – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Mucum">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mucum – RS
              </a>
            </div>
          </div>
          <!-- Cidades N -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                N
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="NovaBrescia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Nova Bréscia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="NovaHartz">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Nova Hartz – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="NovaSantaRita">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Nova Santa Rita – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="NovoHamburgo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Novo Hamburgo – RS
              </a>
            </div>
          </div>
          <!-- Cidades O -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                O
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Osorio">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Osório – RS
            </a>
          </div>
          <!-- Cidades P -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PalmaresDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Palmares do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PantanoGrande">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pantano Grande – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PareciNovo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pareci Novo – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Parobe">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Parobé – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PassoDoSobrado">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Passo do Sobrado – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Paverema">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Paverema – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PoçoDasAntas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Poço das Antas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Portao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Portão – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PortoAlegre">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Porto Alegre – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PousoNovo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pouso Novo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PresidenteLucena">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Presidente Lucena – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Progresso">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Progresso – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Putinga">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Putinga – RS
              </a>
            </div>
          </div>
          <!-- Cidades R -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                R
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Relvado">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Relvado – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioPardo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio Pardo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RocaSales">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Roca Sales – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Rolante">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rolante – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Riozinho">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Riozinho – RS
              </a>
            </div>
          </div>
          <!-- Cidades S -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                S
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SalvadorDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Salvador do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaClaraDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Clara do Sul - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaCruzDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Cruz do Sul - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaMariaDoHerval">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Maria do Herval - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantoAntonioDaPatrulha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santo Antônio da Patrulha - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJeronimo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Jerônimo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoseDoHortencio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São José do Hortêncio – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoLeopoldo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Leopoldo – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoSebastiaoDoCai">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Sebastião do Cai – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoVendelino">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Vendelino – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sapiranga">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sapiranga – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SapucaiaDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sapucaia do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Segredo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Segredo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SentinelaDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sentinela do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Serio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sério – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SertaoSantana">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sertão Santana – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sinimbu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sinimbu – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sobradinho">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sobradinho – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantanaDoLivramento">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santana do Livramento – RS
              </a>
            </div>
          </div>
          <!-- Cidades T -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                T
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tabai">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tabaí – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tapes">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tapes – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Taquara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Taquara – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Travesseiro">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Travesseiro – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tunas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tunas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Taquari">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Taquari – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tavares">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tavares – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TerraDeAreia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Terra de Areia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TresCachoeiras">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Três Cachoeiras – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TresCoroas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Três Coroas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tupandi">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tupandi – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Teutonia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Teutônia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Torres">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Torres – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tramandai">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tramandaí – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TresForquilhas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Três Forquilhas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Triunfo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Triunfo – RS
              </a>
            </div>
          </div>
          <!-- Cidades U -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                U
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Uruguaiana">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Uruguaiana – RS
            </a>
          </div>
          <!-- Cidades V -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                V
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ValeDoSol">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vale do Sol – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ValeReal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vale Real – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Viamao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Viamão – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ValeVerde">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vale Verde – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VenancioAires">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Venâncio Aires – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VeraCruz">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vera Cruz – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VespasianoCorreia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vespasiano Correia – RS
              </a>
            </div>
          </div>
          <!-- Cidades X -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                X
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="XangriLa">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Xangri-Lá – RS
            </a>
          </div>
        </div>
      </section>
      <h4 class="text-uppercase flex-fill text-center mt-60 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Entre em contato com a Excellence!
      </h4>
      <p class="text-center fs-15 col-xl-8 px-0 mt-3 mx-auto fw-600">
        Preencha nosso formulário de contato com seu nome, e-mail e outros dados para que possamos entrar em
        contato com você, ou fale conosco diretamente pelo WhatsApp.
      </p>
      <div class="d-flex row mx-auto mt-4 justify-content-center">
        <BtnForm class="col-xs-12 col-sm-12 px-0 col-md-auto" />
        <BtnWhatsapp class="mt-xs-10 mt-sm-10 mt-md-0 ml-md-3 col-xs-12 col-sm-12 px-0 col-md-auto" />
      </div>
    </div>
  </div>
</template>
<script>
import BtnForm from '../../components/buttons/BtnForm.vue'
import BtnWhatsapp from '../../components/buttons/BtnWhatsapp.vue'
export default {
  components: { BtnForm, BtnWhatsapp },
  layout: 'LayoutSobre',
  head: {
    title: 'Excellence - Detetive particular no Rio Grande do Sul'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  },
  methods: {
    AltoFeliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alto-Feliz-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Alvorada () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alvorada-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    AmaralFerrador () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Amaral-Ferrador-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    AntaGorda () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Anta-Gorda-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Arambare () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arambare-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ararica () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ararica-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ArroioDoMeio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Meio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ArroioDoSal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Sal-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ArroioDoTigre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Tigre-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ArroioDosRatos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-dos-Ratos-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Arvorezinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arvorezinha-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioPinhal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Balneario-Pinhal-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Barao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BaraoDoTriunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-do-Triunfo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BomRetiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Retiro-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BoqueirãoDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Boqueirao-do-Leao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BomPrincipio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Principio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Brochier () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Brochier-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Butiá () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Butia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BarraDoRibeiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barra-do-Ribeiro-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CachoeiraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeira-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Cachoeirinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeirinha-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Camaqua () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Camaqua-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CampoBom () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Campo-Bom-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CerroBranco () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Branco-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CerroGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Grande-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Charqueadas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Charqueadas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Candelaria () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Candelaria-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Canoas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canoas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CanudosDoVale () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canudos-do-Vale-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CapaoDaCanoa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capao-da-Canoa-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Chuvisca () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Chuvisca-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Cidreira () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cidreira-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Colinas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Colinas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CapelaDeSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capela-de-Santana-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Capitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capitao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CapivariDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capivari-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Caraa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Caraa-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CoqueiroBaixo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Coqueiro-Baixo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Cristal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cristal-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CruzeiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cruzeiro-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DoisIrmaos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dois-Irmaos-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DomFeliciano () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Feliciano-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DomPedroDeAlcantara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Pedro-de-Alcantara-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    EldoradoDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Eldorado-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Esteio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Esteio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Estrela () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Estrela-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    FazendaVilanova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Fazenda-Vilanova-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Feliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Feliz-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    GeneralCamara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-General-Camara-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Glorinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Glorinha-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Gravatai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Gravatai-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Guaiba () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Guaiba-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Harmonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Harmonia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ibirama-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Igrejinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Igrejinha-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ilopolis () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ilopolis-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Imigrante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imigrante-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Itati () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Itati-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ivoti () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ivoti-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Imbe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imbe-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lagoao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lagoao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lajedo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lajedo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    LindolfoCollor () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lindolfo-Collor-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    LinhaNova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Linha-Nova-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Maquine () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Maquine-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MarianaPimentel () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mariana-Pimentel-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MarquesDeSouza () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Marques-de-Souza-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MatoLeitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mato-Leitao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MinasDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Minas-do-Leao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Montenegro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Montenegro-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MorrinhosDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morrinhos-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MorroReuter () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morro-Reuter-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Mostardas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mostardas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Mucum () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mucum-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    NovaBrescia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Brescia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    NovaHartz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Hartz-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    NovaSantaRita () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Santa-Rita-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    NovoHamburgo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Novo-Hamburgo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Osorio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Osorio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PalmaresDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Palmares-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PantanoGrande () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pantano-Grande-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PareciNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pareci-Novo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Parobe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Parobe-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PassoDoSobrado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Passo-do-Sobrado-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Paverema () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Paverema-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PoçoDasAntas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Poço-das-Antas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Portao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Portao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PortoAlegre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Porto-Alegre-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PousoNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pouso-Novo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PresidenteLucena () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Presidente-Lucena-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Progresso () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Progresso-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Putinga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Putinga-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Relvado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Relvado-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioPardo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rio-Pardo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RocaSales () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Roca-Sales-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Rolante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rolante-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Riozinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Riozinho-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SalvadorDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Salvador-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaClaraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Clara-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaCruzDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Cruz-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaMariaDoHerval () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Maria-do-Herval-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantoAntonioDaPatrulha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santo-Antonio-da-Patrulha-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJeronimo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jeronimo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJoseDoHortencio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jose-do-Hortencio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoLeopoldo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Leopoldo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoSebastiaoDoCai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Sebastiao-do-Cai-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoVendelino () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Vendelino-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sapiranga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapiranga-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SapucaiaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapucaia-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Segredo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Segredo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SentinelaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sentinela-do-Sul-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Serio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Serio-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SertaoSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sertao-Santana-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sinimbu () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sinimbu-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sobradinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sobradinho-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantanaDoLivramento () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santana-do-Livramento-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tabai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tabai-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tapes () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tapes-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Taquara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquara-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Travesseiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Travesseiro-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tunas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tunas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Taquari () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquari-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tavares () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tavares-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TerraDeAreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Terra-de-Areia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TresCachoeiras () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Cachoeiras-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TresCoroas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Coroas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tupandi () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tupandi-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Teutonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Teutonia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Torres () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Torres-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tramandai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tramandai-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TresForquilhas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Forquilhas-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Triunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Triunfo-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Uruguaiana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Uruguaiana-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ValeDoSol () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-do-Sol-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ValeReal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Real-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Viamao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Viamao-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ValeVerde () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Verde-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VenancioAires () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Venancio-Aires-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VeraCruz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vera-Cruz-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VespasianoCorreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vespasiano-Correia-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    XangriLa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Xangri-La-RS/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    }
  }
}
</script>
<style scoped>

</style>
