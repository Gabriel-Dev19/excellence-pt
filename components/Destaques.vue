<template>
  <div class="bg-cinza py-70 mt-100">
    <div class="container d-flex row mx-auto">
      <div class="col-lg-4 px-0">
        <h3 class="fw-700 text-xs-center text-sm-center text-lg-left">
          Uma equipe <span class="text-vermelho">profissional, especializada</span> em todos os
          segmentos na área de <span class="text-vermelho">investigação.</span>
        </h3>
        <p class="fw-500 text-xs-justify text-sm-justify text-lg-left fs-sm-14 mt-3">
          A Excellence Agência de Detetives vem ao longo dos anos se especializando em todos os tipos de casos, incluindo
          <b>casos conjugais, casos empresariais, casos de funcionários desleais, cursos de detective
            privado com certificado e diversos outros serviços.
          </b>
        </p>
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <btn-whatsapp class="mt-1" />
        </div>
      </div>
      <div class="col-lg px-0 d-flex row mx-auto mt-xs-60 mt-sm-60 mt-lg-0 ml-lg-50">
        <div class="col-md px-0">
          <img src="../assets/img/img-investigacao-empresarial.webp" class="img-fluid shadow-sm" alt="Investigação empresarial Investigação de funcionário fraude em empresas roubos empresariais">
          <h5 class="fw-700 text-xs-center text-sm-center text-md-left mt-20">
            Casos empresariais
          </h5>
          <p class="fs-14 text-xs-justify text-sm-justify text-md-left fw-500">
            A investigação empresarial é um conjunto de práticas aplicadas para descobrir o que há de errado
            com o andamento e desenvolvimento de uma empresa. Essas práticas têm como objetivo, encontrar
            irregularidades nos setores internos da organização.
          </p>
          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-md-start">
            <button class="btn btn-press-dark d-flex align-items-center" @click.prevent="InvestigacaoEmpresarial">
              <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
              <span style="margin-bottom: -2px;">Casos empresariais</span>
            </button>
          </div>
        </div>
        <div class="col-md px-0 mt-xs-60 mt-sm-60 mt-md-0 ml-md-3">
          <img src="../assets/img/img-investigacao-conjugal.webp" class="img-fluid shadow-sm" alt="Investigação conjugal Investigação de funcionário fraude em empresas roubos empresariais">
          <h5 class="fw-700 text-xs-center text-sm-center text-md-left mt-20">
            Casos conjugais
          </h5>
          <p class="fs-14 text-xs-justify text-sm-justify text-md-left fw-500">
            A Excellence Agência de Detetives possui larga experiência em investigação de infidelidade conjugal.
            Utilizamos métodos tradicionais e modernos, e contamos com equipamentos de alta tecnologia, para garantir
            a precisão das informações coletadas.
          </p>
          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-md-start">
            <button class="btn btn-press-dark d-flex align-items-center" @click.prevent="InvestigacaoConjugal">
              <ion-icon class="fs-22 mr-2" name="heart-dislike-outline" />
              <span style="margin-bottom: -2px;">Casos conjugais</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnWhatsapp from './buttons/BtnWhatsapp.vue'
export default {
  components: { BtnWhatsapp },
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
      this.ScrollServicos()
    },
    InvestigacaoConjugal () {
      this.$router.push('/servicos/investigacao-conjugal/#servicos')
      this.ScrollServicos()
    }
  }
}
</script>
<style scoped>
  .bg-cinza{
    background-color: #e8e8e8;
  }
</style>
