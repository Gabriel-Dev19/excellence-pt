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
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="cash-outline" />
          Casos políticos
        </button>
        <button class="btn col-12 border-radius-0 bg-vermelho-pouco-escuro position-relative py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -3px;" name="reader-outline" />
          Provas para advogados
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
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
            :slot-img="require('../../../assets/img/img-provas-para-advogados.webp')"
            :slot-alt="'provas para advogados detective para coletar provas para advogados advogados criminais'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Provas para advogados
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detectives, oferece também serviços direcionados ao atendimento da classe advocatícia.
          Percebemos ao longo dos anos e de acordo com nossa experiencia a necessidade de aprimorar nossas habilidades
          e sistemas no sentido de atender a classe de advogados que lidam com causas cada vez mais complexas.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Contamos com profissionais especializados no atendimento personalizado para advogados.
          As provas obtidas durante a investigação são válidas para processos e podem influenciar em inquéritos policiais.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Vale lembrar de imediato que a atuação do detective privado na produção de provas judiciais é lícita.
          Porém, o profissional precisa respeitar a legislação. Destacamos a Lei 13.432/2017 que traz a regulamentação
          sobre o exercício da profissão.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Observemos o artigo 2º da Lei 13.432/2017:
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          “Para os fins desta Lei, considera-se detective privado o profissional que, habitualmente, por conta
          própria ou na forma de sociedade civil ou empresarial, planeje e execute coleta de dados e informações
          de natureza não criminal, com conhecimento técnico e utilizando recursos e meios tecnológicos permitidos,
          visando ao esclarecimento de assuntos de interesse privado do contratante. ”
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          O trecho, por si só, não deixa dúvidas de que o nosso trabalho enquanto detective privado é lícito. Mas
          aqui se faz necessário esclarecer que a uma linha muito tênue entre o licito e o ilícito. Geralmente,
          o trabalho do detective privado na produção de provas judiciais ocorre em um contexto complexo que pode ser
          considerado evasivo ou até intimidador. Neste caso, as provas podem ser consideradas ilícitas.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          O fato é que as investigações são feitas sem que o alvo a ser investigado saiba. Neste contexto é importante
          que a investigação seja realizada por profissional habilitado, que saiba distinguir os limites entre investigação
          e a violação dos direitos à intimidade, à honra e à imagem do investigado.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Sendo assim, listamos abaixo exemplos de situações que são objetos de demandas junto aos órgãos do Direito
          e cujas questões nossa empresa diariamente acolhe.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Área Trabalhista/Família
        </h4>
        <p class="text-white mb-2 mt-4">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Comprovação de Capacidade Laborativa, Física e Psíquica de empregados e ex-empregados, para fins de suspensão de indenização, aposentadoria e pensão;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Comprovação de Duplicidade Empregatícia;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Comprovação de real situação financeira/padrão de vida, para fins de separação, divórcios, pensão alimentícia e herança;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Levantamento de Bens Móveis e Imóveis (inclusive os não registrados junto a Cartórios), para fins de separação, divórcio, herança;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Levantamento de Informações Cartoriais: Bens, Certidões de Nascimento, Casamento, Óbito, entre outras;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Levantamento de situação criminal, bons antecedentes, etc.;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Localização e Confirmação de moradas para entrega de citações.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Área Empresarial
        </h4>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Desvios internos ( valores, matérias-primas e equipamentos);
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Desvio de combustíveis, equipamentos, máquinas e animais – em trânsito;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Desvio de Conduta de Colaboradores, com prejuízo às atividades laborais ( ex.: relacionamento amoroso entre funcionários);
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Concorrência desleal;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Comprovação de Quebra de Contrato de Franqueados ou de Representação Comercial com exclusividade;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Desvio de Conduta de Fornecedores e Terceirizados;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Venda/repasse de Informações, documentos e dados corporativos;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Desacordos comerciais e societários;
        </p>
        <p class="text-white mb-2">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Contra-espionagem;
        </p>
        <p class="text-white">
          <ion-icon class="text-white fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
          Assessoria completa com juntada de documentos e materiais comprobatórios para causas jurídicas;
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
    title: 'Excellence - Provas para advogados - Auxiliamos advogados na missão de reunir provas'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('servicos'),
      duration: 500,
      offset: -170
    })
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
