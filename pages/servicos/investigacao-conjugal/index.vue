<template>
  <div class="container shadow-lg border-radius-10 px-0 overflow-hidden d-flex align-items-start row mx-auto">
    <div class="col bg-vermelho-pouco-escuro py-0 px-0 overflow-y-scroll">
      <div class="col-3 d-xl-block d-xs-none d-sm-none float-left mr-20 mb-20 border-radius-10 overflow-hidden px-0 bg-grafite">
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -5px;" name="bar-chart-outline" />
          Casos empresariais
        </button>
        <button class="btn col-12 border-radius-0 position-relative py-20 d-flex bg-vermelho-pouco-escuro align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -3px;" name="heart-dislike-outline" />
          Casos conjugais
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="cash-outline" />
          Casos políticos
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
            :slot-img="require('../../../assets/img/img-investigacao-conjugal.webp')"
            :slot-alt="'Investigação conjugal traição infidelidade conjugal amante marido com outra pessoa terceira pessoa'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Investigação conjugal
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detectives possui larga experiência em investigação de
          infidelidade conjugal.  Utilizamos métodos tradicionais e modernos, e contamos
          com uma tecnologia de ponta, para garantir a precisão das informações coletadas.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Relacionamentos baseados em dúvidas e incertezas podem afetar gravemente a sua qualidade
          de vida. Relacionamentos tóxicos muitas vezes são doentios, levando a parte afetada
          ao estresse e depressão. Em um relacionamento, se as dúvidas não poderem esclarecidas
          entre o casal, contratar um detective privado muitas vezes é a melhor opção para comprovar
          um eventual caso de traição.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detectives trata cada caso como único e de acordo com a necessidade de cada cliente,
          entendemos que esta procura acontece em um momento de estresse e decepção. Sabendo
          disso contamos com uma equipa de detectives experientes e preparados para trabalhar no
          seu caso com máximo sigilo e discrição.
        </p>
        <h4 id="sinais-de-infidelidade-conjugal" class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Quando contratar um detective privado para o seu caso conjugal?
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Sinais de uma possível infidelidade são notados através de mudanças de comportamentos,
          variação de humor, alteração na rotina, falta de companheirismo, falta de interesse por
          intimidades, viagens repentinas, uso de senhas de proteção em telemóveles e computadores
          e excesso de cuidado com esses dispositivos.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Abaixo alguns sinais que poder indicar que você esta sendo traído(a) e que podem
          ajudar na sua decisão de contratar um detective privado:
        </p>
        <p class="text-white mb-2 mt-4">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Nunca há ligações feitas ou recebidas no telemóvel do parceiro/parceira;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Mudanças radicais de horários;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Uso intensificado do computador e/ou smartphone em redes sociais;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Distanciamento da família e amigos;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Brigas recorrentes;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Acusações sem sentido;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Longas saídas para coisas rápidas;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Mudanças radicais de visual.
        </p>
        <p class="text-white text-xs-justify mt-4 text-sm-justify text-md-left">
          Estes são alguns sinais que podem influenciar uma suspeita de traição. No entanto a existência
          destas situações não quer dizer que você está sendo alvo de uma suposta traição.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Se você está passando por momentos que caminham para estes problemas, não espere mais.
          Entre em contacto com Excellence Agência de Detectives, contamos com profissionais de ampla experiência
          em levantamento de provas com segurança e sigilo total.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Sem qualquer compromisso, nossos profissionais terão o maior prazer em esclarecer suas
          dúvidas quanto à contratação de nossos serviços e as melhores opções de execução
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
    title: 'Excellence - Investigação conjugal - Investigamos casos de traição e infidelidade conjugal'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('servicos'),
      duration: 500,
      offset: -170
    })
    if (window.location.href === 'https://excellencedetectives.pt/servicos/investigacao-conjugal/#sinais-de-infidelidade-conjugal') {
      this.$smoothScroll({
        scrollTo: document.getElementById('sinais-de-infidelidade-conjugal'),
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
