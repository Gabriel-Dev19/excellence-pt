<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detetive particular no Paraná
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está no Paraná</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detetive Particular no Paraná acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detetives Particulares está no Paraná a mais de 25 anos proporcionando a seus clientes
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
          <div class="position-relative border shadow border-radius-10 overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Adrianopolis">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Adrianópolis - PR
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="AgudosDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Agudos do Sul - PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Antonina">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Antonina - PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Araucaria">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Araucária - PR
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
            <a class="d-flex col-12 mt-4 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BalsaNova">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Balsa Nova - PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="BocaiuvaDoSul">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Bocaiuva do Sul - PR
            </a>
          </div>
          <!-- Cidades C -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampoDoTenente">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campo do Tenente – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampoLargo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campo Largo – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cascavel">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cascavel – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampinaGrandeDoSul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campina Grande do Sul – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CampoMagro">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Campo Magro – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="CerroAzul">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cerro Azul – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Contenda">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Contenda – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Curitiba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Curitiba – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Colombo">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Colombo – PR
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="DoutorUlysses">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Doutor Ulysses – PR
              </a>
            </div>
          </div>
          <!-- Cidades F -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                F
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="FozDoIguacu">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Foz do Iguaçu – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="FazendaRioGrande">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Fazenda Rio Grande – PR
            </a>
          </div>
          <!-- Cidades G -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                G
              </h5>
            </div>
            <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Guaraquecaba">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Guaraqueçaba – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Guaratuba">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Guaratuba – PR
            </a>
          </div>
          <!-- Cidades I -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                I
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Itaperucu">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Itaperuçu – PR
            </a>
          </div>
          <!-- Cidades L -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                L
              </h5>
            </div>
            <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lapa">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lapa – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Londrina">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Londrina – PR
            </a>
          </div>
          <!-- Cidades M -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Mandirituba">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mandirituba – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Matinhos">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Matinhos – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Maringa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Maringá – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Morretes">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Morretes – PR
              </a>
            </div>
          </div>
          <!-- Cidades P -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Pinhais">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pinhais – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Piraquara">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Piraquara – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PontalDoParana">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pontal do Paraná – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PontaGrossa">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Ponta Grossa – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Paranagua">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Paranaguá – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Piên">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Piên – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PatoBranco">
                <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Pato Branco – PR
              </a>
            </div>
          </div>
          <!-- Cidades Q -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                Q
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Quitandinha">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Quitandinha – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="QuatroBarras">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Quatro Barras – PR
            </a>
          </div>
          <!-- Cidades R -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                R
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="RioBrancoDoSul">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Rio Branco do Sul – PR
            </a>
          </div>
          <!-- Cidades S -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                S
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SaoJoseDosPinhais">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> São José dos Pinhais – PR
            </a>
          </div>
          <!-- Cidades T -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                T
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TijucasDoSul">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tijucas do Sul – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TunasDoParana">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Tunas do Paraná – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Toledo">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Toledo – PR
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
    title: 'Excellence - Detetive particular no Paraná'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  },
  methods: {
    Adrianopolis () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Adrianopolis-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    AgudosDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Agudos-do-Sul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Antonina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Antonina-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Araucaria () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Araucaria-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    BalsaNova () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Balsa-Nova-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    BocaiuvaDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Bocaiuva-do-Sul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    CampoDoTenente () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-do-Tenente-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    CampoLargo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Largo-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Cascavel () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cascavel-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    CampinaGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campina-Grande-do-Sul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    CampoMagro () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Magro-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    CerroAzul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cerro-Azul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Contenda () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Contenda-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Curitiba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Curitiba-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Colombo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Colombo-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    DoutorUlysses () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Doutor-Ulysses-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    FozDoIguacu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Foz-do-Iguacu-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    FazendaRioGrande () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Fazenda-Rio-Grande-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Guaraquecaba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaraquecaba-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Guaratuba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaratuba-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Itaperucu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Itaperucu-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Lapa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Lapa-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Londrina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Londrina-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Mandirituba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Mandirituba-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Matinhos () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Matinhos-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Maringa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Maringa-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Morretes () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Morretes-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Pinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pinhais-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Piraquara () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Piraquara-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    PontalDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pontal-do-Parana-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    PontaGrossa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Ponta-Grossa-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Paranagua () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Paranagua-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Piên () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pien-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    PatoBranco () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pato-Branco-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Quitandinha () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quitandinha-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    QuatroBarras () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quatro-Barras-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    RioBrancoDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Rio-Branco-do-Sul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    SaoJoseDosPinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Sao-Jose-dos-Pinhais-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    TijucasDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tijucas-do-Sul-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    TunasDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tunas-do-Parana-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    },
    Toledo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Toledo-PR/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -170
      })
    }
  }
}
</script>
<style scoped>

</style>
