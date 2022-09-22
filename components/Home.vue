<template>
  <div>
    <section id="home" class="height-100-vh position-relative d-flex align-items-center justify-content-center min-height-600">
      <b-carousel
        id="carousel-home"
        :interval="5000"
        no-hover-pause
        fade
        class="h-100 col-12 px-0"
      >
        <b-carousel-slide>
          <div class="h-100 bg-home-1" />
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-2" />
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-3" />
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-4" />
        </b-carousel-slide>
      </b-carousel>
      <div class="container z-index-5 mt-xs-110 mt-sm-100 mt-md-90 pt-lg-60 mt-lg-150 pt-xl-60 pt-xs-0 mt-xl-150 position-absolute">
        <h1 class="text-white text-uppercase fs-xs-28 col-xl-10 mx-auto text-center fw-700">
          Com a exce<span class="text-vermelho">ll</span>ence detectives você tem <span class="text-vermelho">profissionalismo</span>
        </h1>
        <p class="text-center col-lg-9 px-0 mt-3 mx-auto text-white">
          A Excellence Agência Detectives nasceu em 1995 com a intenção de levar
          a nossos clientes o conhecimento de toda a verdade que estão buscando.
          Oferecemos serviços de Investigação Privada para:
          Casos Empresariais, Conjugais, Políticos, Busca de Bens/Veículos,
          Localização de Pessoas Desaparecidas, Provas para advogados e muito mais!
        </p>
        <div class="d-flex justify-content-center">
          <button class="btn btn-vermelho d-flex align-items-center text-uppercase py-10 px-30 border-radius-25 text-white" @click.prevent="ServicosHome">
            <span>Conheça nossos serviços</span> <ion-icon class="fs-24 ml-2" name="arrow-forward-circle-outline" />
          </button>
        </div>
        <div class="d-flex shadow bg-opac border-radius-10 overflow-hidden row mx-auto mt-80">
          <div class="col-lg px-0 d-flex row mx-0">
            <div class="col-md bg-caixa-home py-35 d-flex row mx-0 align-items-center">
              <div class="col-12 px-0">
                <div class="d-flex justify-content-center">
                  <ion-icon class="fs-50" name="heart-dislike-outline" />
                </div>
                <h6 class="text-uppercase mt-15 mb-1 text-center fw-700 fs-15">
                  Investigação conjugal
                </h6>
                <p class="mb-0 fs-14 fw-500 text-center">
                  Coletamos informações valiosas que vão
                  te ajudar a identificar uma possível infidelidade conjugal.
                </p>
                <div class="d-flex mt-15 justify-content-center">
                  <button class="btn text-uppercase d-flex py-1 pr-1 align-items-center fs-13 border-radius-20 pl-20 fw-600 btn-outline-vermelho-home" @click.prevent="InvestigacaoConjugal">
                    Ver mais <ion-icon class="fs-22 text-vermelho ml-2" name="arrow-forward-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
            <div class="border-separation mx-auto my-auto" />
            <div class="col-md bg-caixa-home py-35 d-flex row mx-0 align-items-center">
              <div class="col-12 px-0">
                <div class="d-flex justify-content-center">
                  <ion-icon class="text-vermelho fs-50" name="bar-chart-outline" />
                </div>
                <h6 class="text-uppercase mt-15 mb-1 text-center fw-700 fs-15">
                  Investigação empresarial
                </h6>
                <p class="mb-0 fs-14 fw-500 text-center">
                  Descobrimos qualquer violação ou desvio que esteja afetando
                  a política e a reputação da sua empresa.
                </p>
                <div class="d-flex mt-15 justify-content-center">
                  <button class="btn text-uppercase d-flex py-1 pr-1 align-items-center fs-13 border-radius-20 pl-20 fw-600 btn-outline-vermelho-home" @click.prevent="InvestigacaoEmpresarial">
                    Ver mais <ion-icon class="fs-22 text-vermelho ml-2" name="arrow-forward-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="border-separation mx-auto d-md-none d-lg-block my-auto" />
          <div class="col-lg px-0 d-flex row mx-0">
            <div class="col-md bg-caixa-home py-35 d-flex row mx-0 align-items-center">
              <div class="col-12 px-0">
                <div class="d-flex justify-content-center">
                  <ion-icon class="text-vermelho fs-50" name="diamond-outline" />
                </div>
                <h6 class="text-uppercase mt-15 mb-1 col-11 px-0 mx-auto text-center fw-700 fs-15">
                  Solução Master!
                </h6>
                <p class="mb-0 fs-14 fw-500 text-center">
                  Sim! a Excellence possui uma solução MASTER, obtenha
                  todas as informações na palma da sua mão.
                </p>
                <div class="d-flex mt-15 justify-content-center">
                  <button class="btn text-uppercase d-flex py-1 pr-1 align-items-center fs-13 border-radius-20 pl-20 fw-600 btn-outline-vermelho-home" @click.prevent="CelularEspiao">
                    Ver mais <ion-icon class="fs-22 text-vermelho ml-2" name="arrow-forward-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
            <div class="border-separation mx-auto my-auto" />
            <div class="col-md bg-caixa-home py-35 d-flex row mx-0 align-items-center">
              <div class="col-12 px-0">
                <div class="d-flex justify-content-center">
                  <ion-icon class="text-vermelho fs-50" name="reader-outline" />
                </div>
                <h6 class="text-uppercase mt-15 mb-1 text-center fw-700 fs-15">
                  Provas para advogados
                </h6>
                <p class="mb-0 fs-14 fw-500 text-center">
                  A Excellence Detectives é especializada em fornecer ajuda para advogados
                  coletando provas de forma legal.
                </p>
                <div class="d-flex mt-15 justify-content-center">
                  <button class="btn text-uppercase d-flex py-1 pr-1 align-items-center fs-13 border-radius-20 pl-20 fw-600 btn-outline-vermelho-home" @click.prevent="ProvasAdvogados">
                    Ver mais <ion-icon class="fs-22 text-vermelho ml-2" name="arrow-forward-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    ScrollTodosOsServicos () {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -215
      })
    },
    ScrollServicos () {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    },
    ServicosHome () {
      this.$router.push('/servicos/#servicos')
    },
    InvestigacaoEmpresarial () {
      this.$router.push('/servicos/investigacao-empresarial/#servicos')
    },
    InvestigacaoConjugal () {
      this.$router.push('/servicos/investigacao-conjugal/#servicos')
    },
    ProvasAdvogados () {
      this.$router.push('/servicos/provas-para-advogados/#servicos')
    },
    CelularEspiao () {
      this.$router.push('/servicos/celular-VIP/#servicos')
    }
  }
}
</script>
<style scoped>
  .z-index-5{
    z-index: 5;
  }
  @media (min-width: 1px) and (max-width: 767.98px) {
    .border-separation{
      border-bottom: 1px solid #636363b9;
      width: 250px;
    }
  }
  @media (min-width: 768px) {
    .border-separation{
      border-left: 1px solid #636363b9;
      height: 150px;
    }
  }
  button span{
    margin-top: 1px;
  }
  .btn-outline-vermelho-home{
    border-color: var(--vermelho);
  }
  .btn-outline-vermelho-home:hover{
    border-color: var(--white);
    background-color: var(--white);
    color: var(--dark) !important;
  }
  .btn-outline-vermelho-home:hover ion-icon{
    color: var(--dark) !important;
  }
  .bg-caixa-home, ion-icon, .bg-caixa-home h6, .bg-caixa-home p{
    transition: .3s;
    -o-transition: .3s;
    -moz-transition: .3s;
    -webkit-transition: .3s;
  }
  .bg-caixa-home:hover{
    background-color: var(--vermelho);
  }
  .bg-caixa-home ion-icon{
    color: var(--vermelho);
  }
  .bg-caixa-home:hover ion-icon{
    color: var(--white);
  }
  .bg-caixa-home h6, .bg-caixa-home p{
    color: var(--dark);
  }
  .bg-caixa-home:hover h6, .bg-caixa-home:hover p{
    color: var(--white);
  }
  .bg-caixa-home:hover .btn-outline-vermelho-home{
    border-color: var(--white);
    color: var(--white);
  }
  .bg-opac{
    background-color: #ffffffdc;
  }
  .bg-home-1{
    background: linear-gradient(180deg, #000000d5, #00000093), url(../assets/img/img-investigacao-empresarial.webp) bottom center no-repeat;
    -o-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/img-investigacao-empresarial.webp) bottom center no-repeat;
    -moz-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/img-investigacao-empresarial.webp) bottom center no-repeat;
    -webkit-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/img-investigacao-empresarial.webp) bottom center no-repeat;
    background-size: cover;
  }
  .bg-home-2{
    background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/detetive.webp) center center no-repeat;
    -o-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/detetive.webp) center center no-repeat;
    -moz-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/detetive.webp) center center no-repeat;
    -webkit-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/detetive.webp) center center no-repeat;
    background-size: cover;
  }
  .bg-home-3{
    background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -o-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -moz-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -webkit-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    background-size: cover;
  }
  .bg-home-4{
    background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -o-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -moz-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -webkit-background: linear-gradient(180deg, #000000d5, #000000a6), url(../assets/img/celular-espiao.webp) center center no-repeat;
    background-size: cover;
  }
</style>
