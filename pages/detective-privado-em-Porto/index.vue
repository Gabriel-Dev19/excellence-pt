<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detective privado em Porto
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está em Porto</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detective Privado em Porto acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detectives Privados está em Porto a mais de 25 anos proporcionando a seus clientes
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
        e muitos outros casos. Entre em contacto conosco que teremos a satisfação de ajudá-lo a sanar todas as suas dúvidas.
      </p>
      <h4 class="text-uppercase flex-fill text-center mt-40 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Fale com um detective na sua cidade
      </h4>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                A
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Amarante">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Amarante
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                F
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Felgueiras">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Felgueiras
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                G
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Gondomar">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Gondomar
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                L
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lousada">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lousada
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                M
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Maia">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Maia
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="MarcoDeCanaveses">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Marco de Canaveses
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Matosinhos">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Matosinhos
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                P
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PacosDeFerreira">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Paços de Ferreira
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Paredes">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Paredes
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Penafiel">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Penafiel
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Porto">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Porto
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="PovoaDeVarzim">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Póvoa de Varzim
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                S
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantaMariaDeFeira">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santa Maria de Feira
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="SantoTirso">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santo Tirso
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                V
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Valongo">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Valongo
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VilaDoConde">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vila do Conde
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VilaNovaDeGaia">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vila Nova de Gaia
            </a>
          </div>
        </div>
      </section>
      <h4 class="text-uppercase flex-fill text-center mt-60 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Entre em contacto com a Excellence!
      </h4>
      <p class="text-center fs-15 col-xl-8 px-0 mt-3 mx-auto fw-600">
        Preencha nosso formulário de contacto com seu nome, e-mail e outros dados para que possamos entrar em
        contacto com você, ou fale conosco diretamente pelo WhatsApp.
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
    title: 'Excellence - Detective privado em Porto'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  },
  methods: {
    Amarante () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Amarante/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Felgueiras () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Felgueiras/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Gondomar () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Gondomar/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lousada () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Lousada/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Maia () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Maia/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    MarcoDeCanaveses () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Marco-de-Canaveses/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Matosinhos () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Matosinhos/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PacosDeFerreira () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Pacos-de-Ferreira/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Paredes () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Paredes/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Penafiel () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Penafiel/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Porto () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Porto/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    PovoaDeVarzim () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Povoa-de-Varzim/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantaMariaDeFeira () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Santa-Maria-de-Feira/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    SantoTirso () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Santo-Tirso/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Valongo () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Valongo/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VilaDoConde () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Vila-do-Conde/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VilaNovaDeGaia () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Vila-Nova-de-Gaia/#sobre')
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
