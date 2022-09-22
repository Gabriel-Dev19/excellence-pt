<template>
  <div class="bg-vermelho">
    <div class="container d-flex row mx-auto">
      <div class="col-lg-6 pl-0 pr-xs-0 pr-sm-0 pr-lg-15 z-index-1 bg-vermelho py-40 d-flex row mx-0 align-items-center position-relative">
        <div class="seta-provas d-xs-none d-sm-none d-lg-block bg-vermelho" />
        <div>
          <b-carousel ref="carouselProvas" class="col-12 px-0" :interval="0">
            <b-carousel-slide>
              <div>
                <p class="text-white">
                  <i class="fa fa-quote-left mr-1 fw-400" /> Gostei bastante de como tudo correu, foram muito atenciosos com que eu precisava
                  dentro da minha investigação, vi muito profissionalismo no serviço deles. Após o término do serviço
                  eles me mostraram como eu poderia tornar minha empresa mais segura de fraudes e roubos, recomendo!! <i class="fa fa-quote-right ml-1 fw-400" />
                </p>
                <p class="text-italic text-white">
                  M.F.S, Forianópolis - SC
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide>
              <div>
                <p class="text-white">
                  <i class="fa fa-quote-left mr-1 fw-400" /> Procurei um detective para que pudesse monitorar minha esposa.
                  A Excellence Detectives fez um ótimo trabalho e todas as minhas dúvidas foram sanadas. <i class="fa fa-quote-right ml-1 fw-400" />
                </p>
                <p class="text-italic text-white">
                  V.B, Criciúma - SC
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide>
              <div>
                <p class="text-white">
                  <i class="fa fa-quote-left mr-1 fw-400" /> Excelentes profissionais, trabalharam com toda
                  discrição necessária e o alvo foi pego. <i class="fa fa-quote-right ml-1 fw-400" />
                </p>
                <p class="text-italic text-white">
                  B.C.S, São Paulo - SP
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide>
              <div>
                <p class="text-white">
                  <i class="fa fa-quote-left mr-1 fw-400" /> Uma funcionária que estava afastada a 4 anos, resolveu me colocar
                  na justiça pedindo pensão vitalícia, porém a mesma já estava trabalhando informalmente em outra empresa.
                  A Excellence Detectives conseguiu todas as provas necessária para que eu revertesse a situação. <i class="fa fa-quote-right ml-1 fw-400" />
                </p>
                <p class="text-italic text-white">
                  C.F.M, Curitiba - PR
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide>
              <div>
                <p class="text-white">
                  <i class="fa fa-quote-left mr-1 fw-400" /> Suspeitava que meu filho me escondia um grande segredo.
                  Contratei a Excellence Detectives e tudo foi descoberto. <i class="fa fa-quote-right ml-1 fw-400" />
                </p>
                <p class="text-italic text-white">
                  V.P, Brasília - DF
                </p>
              </div>
            </b-carousel-slide>
          </b-carousel>
          <div class="col-12 d-flex mt-2 px-0">
            <button class="border-radius-0 d-flex justify-content-center align-items-center btn" @click.prevent="$refs.carouselProvas.prev()">
              <i class="fa fs-37 text-vermelho fw-300 fa-angle-left" />
            </button>
            <button class="border-radius-0 d-flex justify-content-center align-items-center ml-10 btn" @click.prevent="$refs.carouselProvas.next()">
              <i class="fa fs-37 text-vermelho fw-300 fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-xs-none d-sm-none d-lg-block px-0">
        <img src="../assets/img/img-investigacao-empresarial.webp" class="img-fluid" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .seta-provas{
    position: absolute;
    right: -27px;
    width: 60px;
    height:60px;
    border-radius: 5px;
    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .z-index-1{
    z-index: 1;
  }
  .img-fluid{
    min-height: 100%;
  }
  button{
    background-color: var(--white);
    opacity: 0.7;
    width: 40px;
    height: 40px;
  }
  button:hover{
    background-color: var(--white);
    opacity: 1;
  }
</style>
