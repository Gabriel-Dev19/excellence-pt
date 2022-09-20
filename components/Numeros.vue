<template>
  <div class="bg-cinza py-70">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col d-flex justify-content-between px-0 row ml-0 mr-xs-0 mt-sm-0 mr-lg-30">
        <div class="col-md-6 px-xs-0 px-xl-30">
          <h1 class="text-vermelho-escuro text-center mb-1 fs-50 fw-700">
            604
          </h1>
          <h5 class="fw-700 mb-1 text-center">
            Empresas atendidas
          </h5>
          <p class="fs-13 text-center mb-0 fw-500">
            Ao longo dos 25 anos de existência de Excellence Detetives
            já ajudamos diversas empresas a solucionar seus problemas e casos empresariais.
          </p>
        </div>
        <div class="col-md-6 px-xs-0 mt-xs-30 mt-sm-30 mt-md-0 px-xl-30">
          <h1 class="text-vermelho-escuro text-center mb-1 fs-50 fw-700">
            1678
          </h1>
          <h5 class="fw-700 mb-1 text-center">
            Clientes satisfeitos
          </h5>
          <p class="fs-13 text-center mb-0 fw-500">
            Com muito esforço e trabalho árduo conseguimos conquistar
            a aprovação de mais de 80% em nossos casos atendidos. Faça seu orçamento!
          </p>
        </div>
        <div class="col-md-6 px-xs-0 px-xl-30 mt-30">
          <h1 class="text-vermelho-escuro text-center mb-1 fs-50 fw-700">
            9
          </h1>
          <h5 class="fw-700 mb-1 text-center">
            Estados atendidos
          </h5>
          <p class="fs-13 text-center mb-0 fw-500">
            Nosso atendimento abrange 9 Estados brasileiros. Contamos com equipe
            treinada e capacitada para atender os mais variados casos investigativos.
          </p>
        </div>
        <div class="col-md-6 px-xs-0 px-xl-30 mt-30">
          <h1 class="text-vermelho-escuro text-center mb-1 fs-50 fw-700">
            1021
          </h1>
          <h5 class="fw-700 mb-1 text-center">
            Suspeitas confirmadas
          </h5>
          <p class="fs-13 text-center mb-0 fw-500">
            Sabemos que quando existe uma dúvida, existe um motivo. Por isso,
            dos nossos casos atendidos, 70% dos nossos clientes tinham razão em suas suspeitas.
          </p>
        </div>
      </div>
      <div class="col-md-10 col-lg-4 mt-xs-50 mt-sm-50 mt-lg-0 mx-auto pb-20 px-0">
        <img src="../assets/img/map-location.svg" class="img-fluid" alt="Atendimento Excellence Detetives">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .bg-cinza{
    background-color: #e8e8e8;
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
</style>
