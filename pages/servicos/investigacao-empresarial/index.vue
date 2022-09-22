<template>
  <div class="container shadow-lg border-radius-10 px-0 overflow-hidden d-flex align-items-start row mx-auto">
    <div class="col bg-vermelho-pouco-escuro py-0 px-0 overflow-y-scroll">
      <div class="col-3 d-xl-block d-xs-none d-sm-none float-left mr-20 mb-20 border-radius-10 overflow-hidden px-0 bg-grafite">
        <button class="btn col-12 border-radius-0 position-relative bg-vermelho-pouco-escuro py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -5px;" name="bar-chart-outline" />
          Casos empresariais
          <div class="bolinha-shadow-bottom" />
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="heart-dislike-outline" />
          Casos conjugais
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
            :slot-img="require('../../../assets/img/img-investigacao-empresarial.webp')"
            :slot-alt="'Investigação empresarial fraudes em empresas investigação de funcionários desleais equipe trabalhando junto'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Investigação empresarial
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A investigação empresarial é um conjunto de práticas aplicadas para descobrir o que há de errado
          com o andamento e desenvolvimento de uma empresa. Essas práticas têm como objetivo, encontrar
          irregularidades nos setores internos da organização, tais como: Desvios de dinheiro
          e conduta, venda de informações sigilosas a concorrentes prejuízos em geral.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Por mais que você confie nos colaboradores que trabalham na sua empresa, estes são seres humanos
          e infelizmente estão sujeitos a agirem de má fé para benefício próprio ou para o benefício de
          outras pessoas.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Em Portugal, pelo menos 70% das empresas já foram vítimas de alguns tipos de prejuízos empresarial causados
          por funcionários vinculados à própria empresa, ou seja, colaboradores internos, parceiros e até mesmo
          prestadores de serviços.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detectives conta com equipa qualificada em âmbito da investigação empresarial,
          que irá reunir provas para a confirmação ou não das suas suspeitas.
        </p>
        <h4 id="sinais-de-desvios-empresariais" class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Quando contratar um detective privado para casos empresariais?
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          O Instituto dos Auditores Internos do Brasil – AUDIBRA, define a fraude empresarial como uma forma
          de irregularidade envolvendo práticas criminosas para obter uma injustiça ou vantagem ilegal.
          A fraude pode ser caracterizada por:
        </p>
        <p class="text-white mb-2 mt-4">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Manipulação, falsificação ou alteração de registros ou documentos;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Apropriação indébita de ativos;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Supressão ou omissão de transações nos registros contábeis;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Registro de transações sem comprovação;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Aplicação de práticas contábeis indevidas;
        </p>
        <p class="text-white text-xs-justify mt-4 text-sm-justify text-md-left">
          Alguns sinais também podem ser percebidos como uma repentina elevação no padrão de vida
          de algum colaborador que passa a demonstrar gastos incompatíveis com seus rendimentos oficiais.
          Também pode ser notado o hábito de algum colaborador que prefere utilizar seu telefone privado
          para contatar fornecedores e prestadores de serviço.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Erros propositais em conferências realizadas em áreas de expedição podem favorecer
          a saída de mercadorias, assim como notas fiscais falsificadas elevam os reembolsos com
          despesas inexistentes.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Diante destas situações orientamos que os empresários e gestores reservem um tempo do seu
          dia para observar de perto seus colaboradores, cliente e prestadores de serviços,
          desta maneira você será capaz de identificar os riscos e oportunidades essenciais
          para garantir o sucesso da sua empresa.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Se você quer realmente confirmar suas suspeitas, não deixe de entrar em contacto conosco para que
          possamos ajudar você e resolver esta situação.
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
    title: 'Excellence - Investigação empresarial - Investigamos casos de fraude empresarial e funcionários infiéis'
  },
  mounted () {
    if (window.location.href === 'https://excellencedetectives.pt/servicos/investigacao-empresarial/#servicos') {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    }
    if (window.location.href === 'https://excellencedetectives.pt/servicos/investigacao-empresarial/#sinais-de-desvios-empresariais') {
      this.$smoothScroll({
        scrollTo: document.getElementById('sinais-de-desvios-empresariais'),
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
