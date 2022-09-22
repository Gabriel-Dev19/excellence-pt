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
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-26 mr-2 text-vermelho-escuro" style="margin-top: -3px;" name="reader-outline" />
          Provas para advogados
        </button>
        <button class="btn col-12 border-radius-0 bg-vermelho-pouco-escuro position-relative py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="PessoasDesaparecidas">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -3px;" name="compass-outline" />
          Pessoas desaparecidas
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CelularEspiao">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="phone-portrait-outline" />
          Telemóvel VIP
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
            :slot-img="require('../../../assets/img/localizacao-de-pessoas.webp')"
            :slot-alt="'Localizar pessoas desaparecidas devedores filhos desaparecidos parentes desaparecidos homem com mapa'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Localização de pessoas desaparecidas
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A localização de pessoas é um dos serviços mais complexos na área da investigação,
          isso porque envolve vários tipos de providência, pois é necessário utilizarmos ferramentas
          modernas, tecnologias inovadoras e investigadores devidamente
          treinados para obtermos sucesso na investigação.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detectives conta com investigadores capacitados para ajudar a você que precisando
          localizar um filho, um parente desaparecido, um amigo/colega, ou até mesmo um grande
          amor do passado que se afastou e você não sabe quais foram as circunstâncias.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Caso você esteja iniciando um namoro virtual ou mesmo uma amizade, cuidado! Não se deixe
          enganar por pessoas mal-intencionadas. Para sua segurança verifique todas as informações
          em relação a esta pessoa antes que você acabe se envolvendo e esta pessoa venha a fazer
          parte da sua vida. Infelizmente a internet está cheia de ciladas, não seja você mais
          uma pessoa a cair no “conto do vigário”.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Se você está precisando localizar pessoas por motivos menos nobres, e caso tenha sido vítima
          de golpe, ou seja, foi lesado por alguém que lhe trouxe
          prejuízos emocionais e financeiros, entre em contacto com a Excellence Agência de Detectives, iremos ajudar
          você com muito sigilo e discrição.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          O trabalho de Localização de Pessoas é julgado um dos mais importantes da nossa agência
          de Detectives Privados, pois requer grande experiência em lidar com situações delicadas,
          sensíveis e privadas. <a v-smooth-scroll="{duration: 500, offset: -100}" href="#contato" class="text-white text-underline">Agende um encontro</a> para que juntos possamos encontrar soluções
          para o seu caso.
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
    title: 'Excellence - Localização de pessoas desaparecidas - Encontramos um parente distante ou um filho que você não vê a muito tempo'
  },
  mounted () {
    if (window.location.href === 'https://excellencedetectives.pt/servicos/localizacao-de-pessoas-desaparecidas/#servicos') {
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
