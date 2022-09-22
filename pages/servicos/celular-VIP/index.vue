<template>
  <div class="container shadow-lg border-radius-10 px-0 overflow-hidden d-flex align-items-start row mx-auto">
    <div class="col bg-vermelho-pouco-escuro py-0 px-0 overflow-y-scroll">
      <div class="col-3 d-xl-block d-xs-none d-sm-none float-left mr-20 mb-20 border-radius-10 overflow-hidden px-0 bg-grafite">
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -5px;" name="bar-chart-outline" />
          Casos empresariais
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-26 text-vermelho-escuro  mr-2" style="margin-top: -3px;" name="heart-dislike-outline" />
          Casos conjugais
        </button>
        <button class="btn col-12 border-radius-0 border-bottom navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="cash-outline" />
          Casos políticos
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-26 mr-2 text-vermelho-escuro" style="margin-top: -3px;" name="reader-outline" />
          Provas para advogados
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="PessoasDesaparecidas">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="compass-outline" />
          Pessoas desaparecidas
        </button>
        <button class="btn col-12 border-radius-0 bg-vermelho-pouco-escuro position-relative py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CelularEspiao">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -3px;" name="phone-portrait-outline" />
          Telemóvel VIP
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
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
            :slot-img="require('../../../assets/img/celular-espiao.webp')"
            :slot-alt="'Celular tecnologia software para monitorar filhos'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Telemóvel VIP
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Seu filho anda mentindo para você? Desconfia que ele possa estar usando drogas?
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Temos a solução certa para você! Entre em contacto conosco e saiba mais.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Imagine você conseguindo ler as mensagens de textos e ouvir todos os áudios trocados por ele
          em suas redes sociais, ou seja, saber tudo que  ele envia e recebe do aparelho telemóvel imperceptivelmente,
          ligar a câmera do telefone remotamente e ver tudo sem que ele desconfie, sem que descubra que
          você está de olho no telemóvel dele.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Acha que isso é coisa de filme? Não é não, a Excellence Detectives terá o prazer de lhe apresentar
          esta tecnologia que certamente deixará suas noites de sono muito mais tranquilas.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Mas por favor use na legalidade e compreenda que monitoramento de telemóvel,
          são legais somente para o monitoramento de filhos menores de idade e que você é responsável
          legal por eles .
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
    title: 'Excellence - Telemóvel VIP - Monitoramos tudo que seu filho menor de idade faz nas redes sociais e no telemóvel'
  },
  mounted () {
    if (window.location.href === 'https://excellencedetectives.pt/servicos/celular-VIP/#servicos') {
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
