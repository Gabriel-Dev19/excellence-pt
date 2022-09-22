<template>
  <div class="container shadow-lg border-radius-10 px-0 overflow-hidden d-flex align-items-start row mx-auto">
    <div class="col bg-vermelho-pouco-escuro pt-0 pb-2 px-0 overflow-y-scroll">
      <div class="col-3 d-xl-block d-xs-none d-sm-none float-left mr-20 mb-20 border-radius-10 overflow-hidden px-0 bg-grafite">
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -5px;" name="bar-chart-outline" />
          Casos empresariais
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-26 text-vermelho-escuro  mr-2" style="margin-top: -3px;" name="heart-dislike-outline" />
          Casos conjugais
        </button>
        <button class="btn col-12 border-radius-0 bg-vermelho-pouco-escuro position-relative py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -3px;" name="cash-outline" />
          Casos políticos
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="reader-outline" />
          Provas para advogados
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="PessoasDesaparecidas">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="compass-outline" />
          Pessoas desaparecidas
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CelularEspiao">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="phone-portrait-outline" />
          Celular VIP
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 border-bottom d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CursoDetetive">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -2px;" name="school-outline" />
          Curso de detective
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="TodosOsServicos">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -2px;" name="grid-outline" />
          Todos os serviços
        </button>
      </div>
      <div class="px-3 pt-3">
        <div class="col-md-5 col-lg-4 shadow ml-md-3 mb-xs-50 mb-sm-50 mb-md-15 px-0 border-radius-10 overflow-hidden float-md-right">
          <ContactServicos
            :slot-img="require('../../../assets/img/img-investigacao-politica.webp')"
            :slot-alt="'identificar fraude em politico concorrente politico compra de votos investigação política'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Investigação política
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          As técnicas avançadas de investigação são um grande auxilio ao longo do processo
          investigativo dos candidatos que parecem suspeitos aos olhos de alguns.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Tem se tornado cada dia mais frequente os casos de corrupção relacionados a processos
          eleitorais e ao conjunto da Investigação Política em si. Com a atual situação política
          do nosso Pais é preciso que os políticos estejam cada vez mais atentos ao que fazem e
          falam para não dar nenhum motivo que possa ser enquadrado como crime eleitoral, podendo
          assim perder credibilidade, apoio e até mesmo votos da população.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Detetives poderá trabalhar com conjunto com os investigadores do estado,
          ajudando o contratante a descobrir mais sobre o seu oponente, estando ele eleito,
          reeleito ou até mesmo em fase eleitoral. Agimos totalmente dentro da lei e com recursos
          autorizados e legais, além de manter total sigilo ao longo da investigação.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Quando devo contratar serviço de Investigação Política?
        </h4>
        <p class="text-white mb-2 mt-4">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Investigação de compra e venda de votos;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Investigação de Propina eleitoral;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Investigação de Desvio de verbas;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Uso ilegal de transportes público;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Levantamento de empresas fantasmas;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Pessoas utilizadas como “laranjas”.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ContactServicos from '../../../components/parts/ContactServicos.vue'
export default {
  components: { ContactServicos },
  layout: 'LayoutServicos',
  head: {
    title: 'Excellence - Investigação política - Investigamos casos políticos de fraude eleitoral'
  },
  mounted () {
    if (window.location.href === 'https://excellencedetectives.pt/servicos/investigacao-politica/#servicos') {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    }
  },
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
    TodosOsServicos () {
      this.$router.push('/servicos/#servicos')
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
    }
  }
}
</script>
<style scoped>
  .borda-servicos{
    border: 3px solid var(--vermelho_escuro);
  }
  .bolinha-shadow-bottom{
    position: absolute;
    bottom: -24px;
    right: -1px;
    width: 23px;
    height: 23px;
    border-radius: 80%;
    box-shadow: 10px -10px 0px var(--vermelho_pouco_escuro);
    z-index: 1;
  }
  .bolinha-shadow-top{
    position: absolute;
    top: -24px;
    right: -1px;
    width: 23px;
    height: 23px;
    border-radius: 80%;
    box-shadow: 10px 10px 0px var(--vermelho_pouco_escuro);
    z-index: 1;
  }
  button{
    letter-spacing: 0.3px;
  }
  button.navigate:hover{
    background-color: #ffffff10;
  }
  button.border-bottom{
    border-bottom-color: #ffffff29 !important;
  }
  .overflow-y-scroll{
    min-height: 600px !important;
  }
  #icon-services{
    position: absolute;
    top: -40px;
    left: 40px;
    padding-left: 15px;
    padding-right: 5px;
  }
</style>
