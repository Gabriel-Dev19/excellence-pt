<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detetive particular em Lisboa
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está em Lisboa</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detetive Particular em Lisboa acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detetives Particulares está em Lisboa a mais de 25 anos proporcionando a seus clientes
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
          <!-- Cidades B -->
          <div class="position-relative border shadow border-radius-10 mt-30 overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-65">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="fw-600 mb-0">
                A
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Alcobaca">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Alcobaça
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Alenquer">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Alenquer
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Almada">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Almada
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Amadora">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Amadora
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
                B
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Barreiro">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Barreiro
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
                C
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Cascaes">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Cascaes
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Lisboa">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Lisboa
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Loures">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Loures
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Mafra">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Mafra
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Moita">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Moita
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Montijo">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Montijo
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
                O
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Odivelas">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Odivelas
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Oeiras">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Oeiras
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Palmela">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Palmela
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Santarem">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Santarém
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sesimbra">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sesimbra
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Setubal">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Setúbal
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="Sintra">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Sintra
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
                T
              </h5>
            </div>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="TorresVedras">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Torres Vedras
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-600 btn align-items-center" @click.prevent="VilaFrancaDeXira">
              <ion-icon class="fs-20 text-vermelho mr-2" name="navigate-outline" /> Vila Franca de Xira
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
    title: 'Excellence - Detetive particular em Lisboa'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  },
  methods: {
    Alcobaca () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Alcobaca/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Alenquer () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Alenquer/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Almada () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Almada/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Amadora () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Amadora/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Barreiro () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Barreiro/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Cascaes () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Cascaes/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Lisboa () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Lisboa/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Loures () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Loures/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Mafra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Mafra/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Moita () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Moita/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Montijo () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Montijo/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Odivelas () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Odivelas/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Oeiras () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Oeiras/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Palmela () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Palmela/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Santarem () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Santarem/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sesimbra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Sesimbra/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Setubal () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Setubal/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    Sintra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Sintra/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    TorresVedras () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Torres-Vedras/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    },
    VilaFrancaDeXira () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Vila-Franca-de-Xira/#sobre')
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
