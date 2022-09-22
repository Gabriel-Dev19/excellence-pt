<template>
  <div>
    <div class="container bg-cinza py-30 px-lg-80 border-radius-10">
      <h3 class="text-uppercase fs-xs-23 fw-600 text-center">
        Legislação para a profissão de detective privado
      </h3>
      <p class="text-justify mt-3 fw-500">
        A Profissão de <b>Detetive Particular</b> tem suporte na legislação brasileira,
        uma vez que o
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button>
        torna o indivíduo capacitado para
        exercer o ofício de investigador desfrutando de todos os benefícios legais
        determinados à classe.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Detetive e a CBO - Classificação Brasileira de Ocupações
      </h4>
      <p class="text-justify mt-3 fw-500">
        A <b>Classificação Brasileira de Ocupações (CBO)</b> é o documento que define, identifica e sistematiza
        os títulos e caracteriza as ocupações do mercado de trabalho brasileiro. Sua inovação e progresso
        são devidos às extensas mudanças ocorridas no cenário socioeconômico e cultural do país nos anos
        mais recentes, resultando em transformações fundamentais no mercado de trabalho.
      </p>
      <p class="text-justify mt-3 fw-500">
        O ofício de Detetive Profissional está organizado na CBO da seguinte forma:
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Código da Ocupação: 3518-05
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Ocupação: Detetive profissional
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Títulos: Agente de investigação privada, Detetive privado, Investigador privado
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Descrição Sumária: Investigam crimes; elaboram perícias de objetos, documentos e locais de crime;
        planejam investigações; efetuam prisões, cumprindo determinação judicial ou em flagrante delito;
        identificam pessoas e cadáveres, coletando impressões digitais, palmares e plantares. Atuam
        na prevenção de crimes; gerenciam crises, socorrendo vítimas, intermediando negociações e resgatando reféns;
        organizam registros papiloscópicos e custodia de presos. Registram informações em laudos,
        boletins e relatórios; colhem depoimentos e prestam testemunho.
      </p>
      <p class="text-justify mt-3 fw-500">
        A formação no
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button>
        prepara o aluno a iniciar nesta profissão e se especializar
        em todas estas atividades relacionadas pela CBO.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Detetive e a Rais - Relação anual de informações sociais
      </h4>
      <p class="text-justify mt-3 fw-500">
        O gerenciamento governamental da seção do trabalho tem um significativo mecanismo de coleta
        de informações denominado de Relação Anual de Informações Sociais (RAIS). Ela foi instituída pelo Decreto
        nº 76.900, de 23 de dezembro de 1975 e tem como objetivos:
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        O provimento às necessidades de controle da atividade laboral no país;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        O fornecimento de informações para a produção de estatísticas laborais;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        A cessão de informações do ambiente laborativo às instituições governamentais.
      </p>
      <p class="text-justify mt-4 fw-500">
        As informações apuradas pela RAIS formam material significativo à assistência das obrigações:
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        das leis nacionais laborais;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        de gestão dos registros do FGTS;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        dos processos arrecadatórios e de cessão e direitos previdenciários;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        de análises técnicas de natureza cadastral e investigatória;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        de reconhecimento do trabalhador com direito ao abono salarial PIS/PASEP.
      </p>
      <p class="mt-3 text-justify fw-500">
        O ofício de Detetive Profissional foi catalogado pela Classificação Nacional das Atividades
        Econômicas (CNAE) na classe de Atividades de investigação, vigilância e segurança, sob o código 74.60-8
      </p>
      <p class="mt-3 text-justify fw-500">
        Ao completar o
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button> e receber seu Certificado de Conclusão,
        o aluno já estará apto a iniciar numa profissão categorizada oficialmente na CNAE.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-40 fw-600 text-center">
        Detetive e o Ministério da previdência social
      </h4>
      <p class="mt-3 text-justify fw-500">
        A Previdência Social é uma forma de garantia da renda do contribuinte e de sua família
        nos casos de doença, acidente, gravidez, prisão, morte e velhice. Vários benefícios são ofertados
        garantindo tranquilidade no momento atual e assegurando um rendimento futuro. Para receber essa
        proteção é preciso se inscrever na Previdência e contribuir mensalmente.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Leis e decretos
      </h4>
      <p class="mt-3 text-justify fw-500">
        A profissão de investigação privada é governada pela Lei Federal nº 3.099/1957
        e pelo Decreto Federal nº 50.532/1961. Confira a seguir nos links:
      </p>
      <a
        href="https://www.planalto.gov.br/ccivil_03/Leis/1950-1969/L3099.htm"
        class="text-uppercase text-vermelho fw-700 d-block text-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lei n°. 3.099 - De 24 de fevereiro de 1957.
      </a>
      <a
        href="https://www.planalto.gov.br/ccivil_03/decreto/1950-1969/D50532.htm"
        class="text-uppercase text-vermelho fw-700 d-block text-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Decreto Federal n°. 50.532 - De 03 de maio de 1961.
      </a>
      <p class="mt-3 text-justify fw-500">
        Ao finalizar o
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button> você estará legalmente amparado para contribuir
        com sua previdência privada, assegurando seu futuro e sua aposentadoria legal.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Detetive nos âmbitos municipais, estaduais e federais
      </h4>
      <p class="mt-3 text-justify fw-500">
        Para exercer a profissão nas prefeituras municipais, os Detetives Particulares devem cumprir
        a lei municipal, sendo que um dos encargos é o pagamento do ISS (Imposto Sobre Serviços),
        devendo se cadastrar no Cadastro de Contribuição Mobiliária (CCM), uma vez que os códigos
        de contribuição variam em cada município.
      </p>
      <p class="mt-3 text-justify fw-500">
        Algumas cidades brasileiras já têm as suas leis municipais, regulamentando o Dia do Detetive Particular em 26 de Junho.
      </p>
      <p class="mt-3 text-justify fw-500">
        O Detetive também é obrigado a pagar o Instituto Nacional de Seguridade Social (INSS) para fins de aposentadoria no futuro.
      </p>
      <p class="mt-3 text-justify fw-500">
        É obrigatório ao Detetive Profissional declarar os rendimentos à Secretaria da Receita Federal (Ministério da Fazenda), mediante declaração de imposto de renda, esteja atuando profissionalmente como pessoa física ou jurídica.
      </p>
      <p class="mt-3 text-justify fw-500">
        Por parte da polícia não há amparo legal quanto à exigência e/ou fiscalização do Detetive, pois essa é uma função reconhecida constitucionalmente somente às promotorias de justiça.
      </p>
      <p class="mt-3 mb-0 text-justify fw-500">
        Ao se graduar no
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button> você terá todos os benefícios ofertados
        por seu município, estado e também pelo governo federal.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'LayoutServicos',
  head: {
    link: [
      { rel: 'alternate', href: 'https://excellencedetetives.com.br/legislacao-para-a-profissao-de-detetive-particular/', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://excellencedetetives.com.br/legislacao-para-a-profissao-de-detetive-particular/', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://excellencedetectives.pt/legislacao-para-a-profissao-de-detective-privado/', hreflang: 'pt' }
    ]
  },
  methods: {
    CursoDetetive () {
      this.$router.push('/servicos/curso-de-detective-privado/#servicos')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    }
  }
}
</script>
<style scoped>

</style>
