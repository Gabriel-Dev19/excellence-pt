<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detetive particular em Santa Catarina
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está em Santa Catarina</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detetive Particular em Santa Catarina acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detetives Particulares está em Santa Catarina a mais de 25 anos proporcionando a seus clientes
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
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades A -->
          <div class="position-relative border border-radius-10 shadow overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Agrolandia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Agrolândia - SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Agronomica">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Agronômica - SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Apiuna">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Apiúna – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Araquari">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Araquari – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ascurra">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ascurra – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Atalanta">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Atalanta – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Aurora">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Aurora – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AguasMornas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Águas Mornas – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AlfredoWagner">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Alfredo Wagner – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Angelina">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Angelina – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Anitapolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Anitápolis – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AntonioCarlos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Antônio Carlos – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ararangua">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Araranguá – SC
              </a>
            </div>
          </div>
          <!-- Cidades B -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                B
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioBarraDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Barra do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioCamboriu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Camboriú - SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioPicarras">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Piçarras – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BarraVelha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Barra Velha – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BelaVistaDoToldo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Bela Vista do Toldo – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BeneditoNovo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Benedito Novo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Blumenau">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Blumenau – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Bombinhas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Bombinhas – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Botuvera">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Botuverá – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BracoDoTrombudo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Braço do Trombudo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Brusque">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Brusque – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioArroioDoSilva">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Arroio do Silva – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioGaivota">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Gaivota – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalnearioRincao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balneário Rincão – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Biguacu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Biguaçu – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BracoDoNorte">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Braço do Norte – SC
              </a>
            </div>
          </div>
          <!-- Cidades C -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Camboriu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Camboriú – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cacador">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Caçador – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CamposNovos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campos Novos – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Chapeco">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Chapecó – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Concordia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Concórdia – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampoAlegre">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campo Alegre – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Canoinhas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Canoinhas – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="ChapadaoDoLageado">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Chapadão do Lageado – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Corupa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Corupá – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Canelinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Canelinha – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CapivariDeBaixo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Capivari de Baixo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CocalDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cocal do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Criciuma">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Criciúma – SC
              </a>
            </div>
          </div>
          <!-- Cidades D -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                D
              </h5>
            </div>
            <div class="col-lg mt-4 px-0">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DonaEmma">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Dona Emma – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DoutorPedrinho">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Doutor Pedrinho – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DionisioCerqueira">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Dionísio Cerqueira – SC
              </a>
            </div>
          </div>
          <!-- Cidades E -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                E
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ermo">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ermo – SC
            </a>
          </div>
          <!-- Cidades F -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                F
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Florianopolis">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Florianópolis – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Forquilhinha">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Forquilhinha – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Fraiburgo">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Fraiburgo – SC
            </a>
          </div>
          <!-- Cidades G -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                G
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Garuva">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Garuva – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Gaspar">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Gaspar – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Guabiruba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Guabiruba – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Guanamirim">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Guanamirim – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="GovernadorCelsoRamos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Gov. Celso Ramos – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="GraoPara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Grão Pará – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Gravatal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Gravatal – SC
              </a>
            </div>
          </div>
          <!-- Cidades I -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                I
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ibirama">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ibirama – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ilhota">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ilhota – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Imbuia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Imbuia – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Indaial">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Indaial – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Irineopolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Irineópolis – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itaiopolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itaiópolis – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itajai">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itajaí – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itapema">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itapema – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itapoa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itapoá – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Ituporanga">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ituporanga – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Icara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Içara – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Imarui">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Imaruí – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Imbituba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Imbituba – SC
              </a>
            </div>
          </div>
          <!-- Cidades J -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                J
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Joinville">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Joinville – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="JaraguaDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Jaraguá do Sul – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="JoseBoiteux">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> José Boiteux – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="JacintoMachado">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Jacinto Machado – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Jaguaruna">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Jaguaruna – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Joacaba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Joaçaba – SC
              </a>
            </div>
          </div>
          <!-- Cidades L -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                L
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Laurentino">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Laurentino – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lages">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lages – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Laguna">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Laguna – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="LauroMuller">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lauro Muller – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="LeobertoLeal">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Leoberto Leal – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lontras">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lontras – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="LuisAlves">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Luís Alves – SC
              </a>
            </div>
          </div>
          <!-- Cidades M -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Mafra">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mafra – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MajorVieira">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Major Vieira – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Massaranduba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Massaranduba – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MajorGercino">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Major Gercino – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Maracaja">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Maracajá – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MorroDaFumaca">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Morro da Fumaça – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MirimDoce">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mirim Doce – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MonteCastelo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Monte Castelo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MorroGrande">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Morro Grande – SC
              </a>
            </div>
          </div>
          <!-- Cidades N -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                N
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Navegantes">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Navegantes – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="NovaTrento">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Nova Trento – SC
            </a>
          </div>
          <!-- Cidades O -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                O
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Orleans">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Orleans – SC
            </a>
          </div>
          <!-- Cidades P -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Papanduva">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Papanduva – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Penha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Penha – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Petrolandia">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Petrolândia – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Picarras">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Piçarras – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Pomerode">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pomerode – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PortoBelo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Porto Belo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PousoRedondo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pouso Redondo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PresidenteGetulio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Presidente Getúlio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PresidenteNereu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Presidente Nereu – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Palhoca">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Palhoça – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PassoDeTorres">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Passo de Torres – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PauloLopes">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Paulo Lopes – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PedrasGrandes">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pedras Grandes – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PescariaBrava">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pescaria Brava – SC
              </a>
            </div>
          </div>
          <!-- Cidades R -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                R
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioDoCampo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio do Campo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioDoOeste">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio do Oeste – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioFortuna">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio Fortuna – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioNegrinho">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio Negrinho – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Rodeio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rodeio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RanchoQueimado">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rancho Queimado – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioDosCedros">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio dos Cedros – SC
              </a>
            </div>
          </div>
          <!-- Cidades S -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                S
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Salete">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Salete – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaTerezinha">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Terezinha - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoBentoDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Bento do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoFranciscoDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Francisco do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoaquim">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Joaquim - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoaoDoItaperiu">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São João do Itaperiú – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Shroeder">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Shroeder – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sangao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sangão – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaRosaDeLima">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Rosa de Lima – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantoAmaroDaImperatriz">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santo Amaro da Imperatriz – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoBonifacio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Bonifácio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoaoBatista">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Jõao Batista – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoaoDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Jõao do Sul – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJose">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São José – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoLudgero">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Ludgero – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoMartinho">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Martinho – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoPedroDeAlcantara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São Pedro de Alcântara – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sideropolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Siderópolis – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sombrio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sombrio – SC
              </a>
            </div>
          </div>
          <!-- Cidades T -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                T
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Taio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Taió – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Timbo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Timbó – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TrombudoCentral">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Trombudo Central – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Treviso">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Treviso – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TrezeDeMaio">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Treze de Maio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tubarao">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tubarão – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Tijucas">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tijucas – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TimbeDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Timbé do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Turvo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Turvo – SC
              </a>
            </div>
          </div>
          <!-- Cidades U -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                U
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Urussanga">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Urussanga – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Urubici">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Urubici – SC
            </a>
          </div>
          <!-- Cidades V -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                V
              </h5>
            </div>
            <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VidalRamos">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vidal Ramos – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VitorMeireles">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vitor Meireles – SC
            </a>
          </div>
          <!-- Cidades W -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                W
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Witmarsum">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Witmarsum – SC
            </a>
          </div>
          <!-- Cidades X -->
          <div class="position-relative border border-radius-10 shadow mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                X
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Xanxere">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Xanxerê – SC
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
    title: 'Excellence - Detetive particular em Santa Catarina'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  },
  methods: {
    Agrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agrolandia-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Agronomica () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agronomica-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Apiuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Apiuna-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Araquari () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Araquari-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ascurra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ascurra-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Atalanta () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Atalanta-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Aurora () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aurora-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    AguasMornas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aguas-Mornas-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    AlfredoWagner () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Alfredo-Wagner-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Angelina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Angelina-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Anitapolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Anitapolis-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    AntonioCarlos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Antonio-Carlos-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ararangua () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ararangua-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioBarraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Barra-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioCamboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Camboriu-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioPicarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Picarras-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BarraVelha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Barra-Velha-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BelaVistaDoToldo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bela-Vista-do-Toldo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BeneditoNovo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Benedito-Novo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Blumenau () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Blumenau-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Bombinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bombinhas-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Botuvera () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Botuvera-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BracoDoTrombudo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Trombudo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Brusque () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Brusque-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioArroioDoSilva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Arroio-do-Silva-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioGaivota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Gaivota-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BalnearioRincao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Rincao-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Biguacu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Biguacu-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    BracoDoNorte () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Norte-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Camboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Camboriu-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Cacador () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cacador-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CamposNovos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campos-Novos-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Chapeco () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapeco-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Concordia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Concordia-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CampoAlegre () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campo-Alegre-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Canoinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canoinhas-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    ChapadaoDoLageado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapadao-do-Lageado-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Corupa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Corupa-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Canelinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canelinha-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CapivariDeBaixo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Capivari-de-Baixo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    CocalDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cocal-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Criciuma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Criciuma-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DonaEmma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dona-Emma-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DoutorPedrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Doutor-Pedrinho-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    DionisioCerqueira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dionisio-Cerqueira-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ermo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ermo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Florianopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Florianopolis-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Forquilhinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Forquilhinha-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Fraiburgo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Fraiburgo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Garuva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Garuva-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Gaspar () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gaspar-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Guabiruba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guabiruba-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Guanamirim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guanamirim-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    GovernadorCelsoRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Governador-Celso-Ramos-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    GraoPara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Grao-Para-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Gravatal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gravatal-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ibirama-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ilhota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ilhota-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Imbuia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbuia-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Indaial () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Indaial-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Irineopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Irineopolis-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Itaiopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itaiopolis-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Itajai () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itajai-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Itapema () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapema-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Itapoa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapoa-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Ituporanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ituporanga-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Icara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Icara-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Imarui () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imarui-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Imbituba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbituba-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Joinville () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joinville-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    JaraguaDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaragua-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    JoseBoiteux () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jose-Boiteux-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    JacintoMachado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jacinto-Machado-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Jaguaruna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguaruna-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Joacaba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joacaba-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Laurentino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laurentino-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lages () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lages-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Laguna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laguna-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    LauroMuller () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lauro-Muller-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    LeobertoLeal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Leoberto-Leal-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lontras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lontras-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    LuisAlves () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Luis-Alves-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mafra-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MajorVieira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Vieira-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Massaranduba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Massaranduba-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MajorGercino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Gercino-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Maracaja () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Maracaja-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MorroDaFumaca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-da-Fumaca-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MirimDoce () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mirim-Doce-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MonteCastelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Monte-Castelo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MorroGrande () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-Grande-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Navegantes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Navegantes-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    NovaTrento () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Nova-Trento-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Orleans () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Orleans-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Papanduva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Papanduva-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Penha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Penha-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Petrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Petrolandia-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Picarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Picarras-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Pomerode () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pomerode-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PortoBelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Porto-Belo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PousoRedondo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pouso-Redondo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PresidenteGetulio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Getulio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PresidenteNereu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Nereu-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Palhoca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Palhoca-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PassoDeTorres () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Passo-de-Torres-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PauloLopes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Paulo-Lopes-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PedrasGrandes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pedras-Grandes-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PescariaBrava () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pescaria-Brava-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioDoCampo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Campo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioDoOeste () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Oeste-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioFortuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Fortuna-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioNegrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Negrinho-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Rodeio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rodeio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RanchoQueimado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rancho-Queimado-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    RioDosCedros () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-dos-Cedros-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Salete () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Salete-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaTerezinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Terezinha-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoBentoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bento-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoFranciscoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Francisco-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJoaquim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joaquim-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJoaoDoItaperiu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Itaperiu-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Shroeder () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Shroeder-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sangao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sangao-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaRosaDeLima () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Rosa-de-Lima-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantoAmaroDaImperatriz () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santo-Amaro-da-Imperatriz-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoBonifacio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bonifacio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJoaoBatista () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-Batista-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJoaoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoJose () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Jose-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoLudgero () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Ludgero-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoMartinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Martinho-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SaoPedroDeAlcantara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Pedro-de-Alcantara-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sideropolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sideropolis-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sombrio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sombrio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Taio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Taio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Timbo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TrombudoCentral () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Trombudo-Central-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Treviso () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treviso-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TrezeDeMaio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treze-de-Maio-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tubarao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tubarao-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Tijucas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tijucas-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TimbeDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbe-do-Sul-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Turvo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Turvo-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Urussanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urussanga-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Urubici () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urubici-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VidalRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vidal-Ramos-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VitorMeireles () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vitor-Meireles-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Witmarsum () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Witmarsum-SC/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Xanxere () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Xanxere-SC/#sobre')
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
