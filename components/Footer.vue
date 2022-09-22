<template>
  <footer class="pt-80 bg-grafite">
    <div class="container px-xs-2 d-flex row mx-auto">
      <div class="col-lg-3">
        <div>
          <img src="../assets/img/logo-excellence.webp" width="180" alt="">
        </div>
        <p class="fs-12 fw-300 mt-20">
          Oferecemos serviços de Investigação Privada para: Casos Empresariais, Conjugais, Políticos,
          Busca de Bens/Veículos e muito mais!
        </p>
        <div class="mt-20 d-flex">
          <a href="https://www.facebook.com/Excellence-Detetives-1046988452361673">
            <ion-icon class="fs-26" name="logo-facebook" />
          </a>
          <a href="https://www.instagram.com/excellencedetetives/" class="mx-15">
            <ion-icon class="fs-26" name="logo-instagram" />
          </a>
          <a href="https://br.pinterest.com/excellencedetetives/_saved/">
            <ion-icon class="fs-26" name="logo-pinterest" />
          </a>
          <a href="https://www.youtube.com/channel/UCj1qP7tCKe9lCSZZApw835A" class="mx-15">
            <ion-icon class="fs-26" name="logo-youtube" />
          </a>
          <a href="https://twitter.com/Excellencedet">
            <ion-icon class="fs-26" name="logo-twitter" />
          </a>
        </div>
      </div>
      <div class="col-lg-3 mt-xs-30 mt-sm-30 mt-lg-0">
        <h5 class="text-vermelho text-uppercase fw-600 fs-16">
          Serviços
        </h5>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-13 mr-1" name="bar-chart-outline" /> Investigação empresarial
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-13 mr-1" name="heart-dislike-outline" /> Investigação conjugal
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-13 mr-1" name="cash-outline" /> Investigação política
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-13 mr-1" name="reader-outline" /> Provas para advogados
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="PessoasDesaparecidas">
          <ion-icon class="fs-13 mr-1" name="compass-outline" /> Pessoas desaparecidas
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="CelularEspiao">
          <ion-icon class="fs-13 mr-1" name="phone-portrait-outline" /> Telemóvel VIP
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="CursoDetetive">
          <ion-icon class="fs-13 mr-1" name="school-outline" /> Curso de detective
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Politica">
          <ion-icon class="fs-13 mr-1" name="lock-closed-outline" /> Política de privacidade
        </button>
      </div>
      <div class="col-lg-3 mt-xs-30 mt-sm-30 mt-lg-0">
        <h5 class="text-vermelho text-uppercase fw-600 fs-16">
          Onde atendemos
        </h5>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Aveiro">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Aveiro
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Braga">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Braga
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Evora">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Évora
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Faro">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Faro
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Leiria">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Leiria
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Lisboa">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Lisboa
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Porto">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Porto
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Santarem">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Santarém
        </button>
        <button class="btn d-flex fs-13 align-items-center px-0 pb-1 pt-0" @click.prevent="Setubal">
          <ion-icon class="fs-13 mr-1" name="navigate-outline" /> Setúbal
        </button>
      </div>
      <div class="col-lg-3 mt-xs-30 mt-sm-30 mt-lg-0">
        <h5 class="text-vermelho text-uppercase fw-600 fs-16">
          Aceitamos
        </h5>
        <div id="icons-cartoes" class="d-flex col-12 px-0 pr-0 row mx-auto">
          <i class="fab mr-2 fa-cc-paypal fs-60" />
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-1">
              <img src="../assets/img/icons/icon-pix.webp" class="img-fluid" alt="PIX">
            </div>
          </div>
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-1">
              <img src="../assets/img/icons/icon-elo.webp" class="img-fluid" alt="ELO">
            </div>
          </div>
          <i class="fab mr-2 fa-cc-diners-club fs-60" />
          <i class="fab mr-2 fa-cc-amex fs-60" />
          <i class="fab mr-2 fa-cc-visa fs-60" />
          <i class="fab fa-cc-mastercard fs-60" />
          <div class="icon-card ml-7-px d-flex justify-content-center align-items-center mr-2">
            <div class="px-1">
              <img src="../assets/img/icons/icon-hiper.webp" class="img-fluid" alt="HIPER">
            </div>
          </div>
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-1">
              <img src="../assets/img/icons/icon-wu.webp" class="img-fluid" alt="WU">
            </div>
          </div>
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-1">
              <img src="../assets/img/icons/icon-money-gram.webp" class="img-fluid" alt="">
            </div>
          </div>
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-1">
              <img src="../assets/img/icons/icon-pag.webp" class="img-fluid" alt="PAG">
            </div>
          </div>
          <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
            <div class="px-2">
              <img src="../assets/img/icons/icon-mercado-pago.webp" class="img-fluid" alt="MP">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 mt-60 bg-preto">
      <div class="container d-flex justify-content-center">
        <p class="mb-0 col-12 px-0 text-center fs-14">
          &copy; 2021 - Excellence Detectives - Todos os direitos reservados |
          <a href="https://wa.me/5588996912604?text=Olá,+Gabriel+gostaria+de+receber+mais+informações+sobre+seu+trabalho+como+programador" target="_blank" rel="nopenner noreferrer">
            Desenvolvido por Gabriel Camurça <ion-icon class="fs-20" style="margin-bottom: -5px;" name="logo-vue" />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    ScrollServicos () {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    },
    InvestigacaoEmpresarial () {
      this.$router.push('/servicos/investigacao-empresarial/#servicos')
    },
    InvestigacaoConjugal () {
      this.$router.push('/servicos/investigacao-conjugal/#servicos')
    },
    InvestigacaoPolitica () {
      this.$router.push('/servicos/investigacao-politica/#servicos')
    },
    ProvasAdvogados () {
      this.$router.push('/servicos/provas-para-advogados/#servicos')
    },
    PessoasDesaparecidas () {
      this.$router.push('/servicos/localizacao-de-pessoas-desaparecidas/#servicos')
    },
    CelularEspiao () {
      this.$router.push('/servicos/celular-VIP/#servicos')
    },
    CursoDetetive () {
      this.$router.push('/servicos/curso-de-detective-privado/#servicos')
    },
    Politica () {
      this.$router.push('/politica-de-privacidade/#servicos')
    },

    // Cidades
    Aveiro () {
      this.$router.push('/detective-privado-em-Aveiro/#sobre')
      this.ScrollCidades()
    },
    Braga () {
      this.$router.push('/detective-privado-em-Braga/#sobre')
      this.ScrollCidades()
    },
    Evora () {
      this.$router.push('/detective-privado-em-Evora/#sobre')
      this.ScrollCidades()
    },
    Faro () {
      this.$router.push('/detective-privado-em-Faro/#sobre')
      this.ScrollCidades()
    },
    Leiria () {
      this.$router.push('/detective-privado-em-Leiria/#sobre')
      this.ScrollCidades()
    },
    Lisboa () {
      this.$router.push('/detective-privado-em-Lisboa/#sobre')
      this.ScrollCidades()
    },
    Porto () {
      this.$router.push('/detective-privado-em-Porto/#sobre')
      this.ScrollCidades()
    },
    Santarem () {
      this.$router.push('/detective-privado-em-Santarem/#sobre')
      this.ScrollCidades()
    },
    Setubal () {
      this.$router.push('/detective-privado-em-Setubal/#sobre')
      this.ScrollCidades()
    }
  }
}
</script>
<style scoped>
  footer{
    color: #ffffffcd;
    letter-spacing: 0.4px;
  }
  footer a, footer button{
    color: #ffffffcd;
    letter-spacing: 0.4px;
  }
  footer a:hover, footer button:hover{
    color: #ffffff;
  }
  #icons-cartoes i {
    color: #ffffffd4;
  }
  #icons-cartoes i:hover {
    color: #ffffff;
  }
  .icon-card {
    width: 67.5px;
    height: 53px;
    background-color: #ffffffd4;
    margin-top: 3px;
    border-radius: 6px;
  }
  .icon-card:hover {
    background-color: #ffffff;
  }
  .ml-7-px {
    margin-left: 7px;
  }
  .mr-7-px {
    margin-right: 7.5px;
  }
</style>
