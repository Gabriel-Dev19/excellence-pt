<template>
  <div class="container pt-100">
    <h1 class="text-vermelho mb-1 fs-xs-30 text-uppercase fw-700 text-center">
      Do que você precisa?
    </h1>
    <div class="col-12 mt-100 px-0 d-flex justify-content-center">
      <div class="col-9 px-0 d-flex position-relative align-items-center justify-content-between">
        <div class="traco-do-meio col-12" />
        <div class="bolinha-select cursor-pointer d-flex justify-content-center align-items-center position-relative" :class="{'active': Bolinha1}" @click.prevent="ToSlide1">
          <div class="circulo-bolinha" />
          <h6 class="text-bolinha text-uppercase fs-13 fw-600 text-dark text-center">
            Garantia e confiança
          </h6>
        </div>
        <div class="bolinha-select cursor-pointer d-flex justify-content-center align-items-center position-relative" :class="{'active': Bolinha2}" @click.prevent="ToSlide2">
          <div class="circulo-bolinha" />
          <h6 class="text-bolinha text-uppercase fs-13 fw-600 text-dark text-center">
            detectives dedicados
          </h6>
        </div>
        <div class="bolinha-select cursor-pointer d-flex justify-content-center align-items-center position-relative" :class="{'active': Bolinha3}" @click.prevent="ToSlide3">
          <div class="circulo-bolinha" />
          <h6 class="text-bolinha text-uppercase fs-13 fw-600 text-dark text-center">
            Provas e fatos
          </h6>
        </div>
      </div>
    </div>
    <div class="mt-70">
      <b-carousel
        id="carousel-valores"
        ref="carouselVal"
        :value="1"
        :interval="6000"
        @sliding-start="VerificaSlide"
      >
        <b-carousel-slide>
          <div class="d-flex align-items-center row pb-15 mx-auto">
            <div id="img-valores" class="col-lg-5 position-relative pb-20 px-0">
              <div class="div-vermelha-valores border-radius-20" />
              <img src="../assets/img/garantia-e-confianca.webp" class="border-radius-20 valores" alt="Documento acordo contrato confiança garantias">
            </div>
            <div class="col-lg mt-xs-40 px-0 mt-sm-40 mt-lg-0 ml-lg-35">
              <h3 class="text-uppercase text-xs-center fs-xs-23 text-sm-center text-lg-left text-vermelho fw-700">
                Garantia e confiança
              </h3>
              <p class="fw-500 text-justify mb-0">
                Somos uma das maiores agências de detectives privados de Portugal,
                com mais de 25 anos de atuação no mercado Nacional, contamos com equipa
                altamente qualificada para prestar o melhor serviço de investigação que você
                está precisando, seja ele pessoal ou corporativo. Entre em contacto conosco hoje mesmo!
              </p>
              <div class="d-flex justify-content-xs-center mt-20 justify-content-sm-center justify-content-lg-start">
                <btn-ligue />
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="d-flex align-items-center pb-15 row mx-auto">
            <div id="img-valores" class="col-lg-5 position-relative pb-20 px-0">
              <div class="div-vermelha-valores border-radius-20" />
              <img src="../assets/img/detetives-dedicados.webp" class="border-radius-20 valores" alt="">
            </div>
            <div class="col-lg mt-xs-40 px-0 mt-sm-40 mt-lg-0 ml-lg-35">
              <h3 class="text-uppercase text-xs-center fs-xs-23 text-sm-center text-lg-left text-vermelho fw-700">
                Detectives dedicados
              </h3>
              <p class="fw-500 text-justify mb-0">
                Temos uma equipa de atendimento profissional e especializada, pronta para sanar todas
                as suas dúvidas e prestar toda a assessoria na contratação do serviço de investigação.
                Não fique mais na dúvida, entre em contacto conosco agora!
              </p>
              <div class="d-flex justify-content-xs-center mt-20 justify-content-sm-center justify-content-lg-start">
                <btn-form :name-btn="'Contato pelo formulário'" />
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="d-flex align-items-center row pb-15 mx-auto">
            <div id="img-valores" class="col-lg-5 position-relative pb-20 px-0">
              <div class="div-vermelha-valores border-radius-20" />
              <img src="../assets/img/provas-e-fatos.webp" class="border-radius-20 valores" alt="">
            </div>
            <div class="col-lg mt-xs-40 px-0 mt-sm-40 mt-lg-0 ml-lg-35">
              <h3 class="text-uppercase text-xs-center fs-xs-23 text-sm-center text-lg-left text-vermelho fw-700">
                Provas e fatos
              </h3>
              <p class="fw-500 text-justify mb-0">
                Ao contratar um detective privado, é importante que o material de investigação fornecido
                seja coletado na forma correta, seguindo os critérios legais para que tenha validade. A Excellence Agência Detectives
                fornecerá a você todo o material necessário, com fotos, vídeos e gravações para seu processo judicial.
              </p>
              <div class="d-flex justify-content-xs-center mt-20 justify-content-sm-center justify-content-lg-start">
                <btn-whatsapp :name-btn="'Mande uma mensagem'" />
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
import BtnForm from './buttons/BtnForm.vue'
import BtnLigue from './buttons/BtnLigue.vue'
import BtnWhatsapp from './buttons/BtnWhatsapp.vue'
export default {
  components: {
    BtnForm,
    BtnLigue,
    BtnWhatsapp
  },
  data () {
    return {
      slide: 0,
      Bolinha1: false,
      Bolinha2: true,
      Bolinha3: false
    }
  },
  methods: {
    ToSlide1 () {
      this.$refs.carouselVal.setSlide(0)
    },
    ToSlide2 () {
      this.$refs.carouselVal.setSlide(1)
    },
    ToSlide3 () {
      this.$refs.carouselVal.setSlide(2)
    },
    VerificaSlide (slide) {
      if (slide === 0) {
        this.Bolinha1 = true
        this.Bolinha2 = false
        this.Bolinha3 = false
      }
      if (slide === 1) {
        this.Bolinha1 = false
        this.Bolinha2 = true
        this.Bolinha3 = false
      }
      if (slide === 2) {
        this.Bolinha1 = false
        this.Bolinha2 = false
        this.Bolinha3 = true
      }
    }
  }
}
</script>
<style scoped>
  .bolinha-select{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--dark);
    transition: all .3s;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
  }
  .circulo-bolinha{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--vermelho);
    display: none;
  }
  @media (min-width: 1px) {
    #img-valores{
      height: 250px;
    }
  }
  @media (min-width: 576px) {
    #img-valores{
      height: 350px;
    }
  }
  @media (min-width: 768px) {
    #img-valores{
      height: 450px;
    }
  }
  @media (min-width: 992px) {
    #img-valores{
      height: 260px;
    }
  }
  @media (min-width: 1200px) {
    #img-valores{
      height: 310px;
    }
  }
  img.valores{
    position: absolute;
    top: 0;
    left: 0;
    width: 97%;
    height: 95%;
  }
  .div-vermelha-valores{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 95%;
    height: 95%;
    background-color: var(--vermelho);
  }
  .bolinha-select.active{
    background-color: var(--vermelho) !important;
  }
  .bolinha-select.active .circulo-bolinha{
    display: block;
  }
  .bolinha-select.active .text-bolinha{
    color: var(--vermelho) !important;
  }
  .text-bolinha{
    position: absolute;
    width: 90px;
    top: -47px;
  }
  .traco-do-meio{
    position: absolute;
    border-top: 1px solid var(--dark);
  }
</style>
