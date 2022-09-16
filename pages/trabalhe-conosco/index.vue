<template>
  <div>
    <div class="container bg-cinza py-30 px-lg-80 border-radius-10">
      <h3 class="text-uppercase fs-xs-23 fw-600 text-center">
        Trabalhe conosco!
      </h3>
      <p class="text-justify mt-3 fw-500">
        Você que já trabalha como detetive particular em qualquer cidade dos 9 estados de atuação da
        Excellence Agência de Detetives e deseja se tornar um prestador de serviços para nossa agência
        faça contato pelo e-mail:
        <a
          href="mailto: contato@excellencedetetives.com.br"
          class="text-vermelho fw-600 text-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          contato@excellencedetetives.com.br
        </a>
      </p>
      <p class="text-justify mt-3 fw-500">
        Oferecemos uma oportunidade de você se tornar um profissional de destaque na sua região.
        Se acaso você tem interesse em ingressar na carreira de detetive particular, não perca mais tempo!
        Venha fazer o curso de profissionalização conosco e além de todo conhecimento que iremos lhe
        passar, ainda daremos a você a oportunidade de fazer parte da nossa equipe.
        Para saber mais clique no botão abaixo:
      </p>
      <div class="d-flex mt-4 justify-content-center">
        <button class="btn btn-vermelho d-flex align-items-center text-uppercase py-10 px-30 border-radius-25 text-white" @click.prevent="CursoDetetive">
          <span>Curso de Detetive <span class="d-xs-none">Particular</span></span> <ion-icon class="fs-24 ml-2" name="arrow-forward-circle-outline" />
        </button>
      </div>
      <h4 class="text-uppercase text-center fs-xs-20 mt-60 fw-600">
        Requisitos
      </h4>
      <p class="text-justify mt-3 fw-500">
        Os requisitos para se candidatar a uma vaga na nossa agência de detetives particulares são bem simples.
        Oferecemos oportunidades para novatos do nosso
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button> e também para profissionais que atuam na área a bastante tempo.
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Ser idôneo;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Ser habilitado carro/moto;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Experiência comprovada de pelo menos 3 anos em campanas próprias ou para agências
        <b>(para profissionais já habilitados por outras agências/instituições);</b>
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Possuir veículo em boas condições de uso.
      </p>
      <h4 class="text-uppercase text-center fs-xs-20 mt-60 fw-600">
        Vantagens
      </h4>
      <p class="text-justify mt-3 fw-500">
        Oferecemos vantagens para todos os casos de profissionais que desejam se juntar a nossa agência, desde pessoas que
        estão iniciando a pouco tempo no ramo de investigação até pessoas que já trabalham a muito tempo. Se você ainda
        não possui uma formação de detetive particular, confira nosso
        <button class="text-vermelho btn py-0 fw-600 px-0 btn-link text-underline" @click.prevent="CursoDetetive">
          Curso de Detetive Particular
        </button> e aproveite as ofertas especiais.
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Ampliar consideravelmente o seu volume de negócios na região;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Ter acesso a informações privilegiadas e técnicas de investigações avançadas;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Treinamento desde o atendimento ao cliente até a confecção de relatórios;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Excelente remuneração;
      </p>
      <p class="fw-500 text-justify mt-4">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Recompensa. O Detetive auxilia pessoas físicas e jurídicas na resolução de seus problemas;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Realização pelo cumprimento do dever;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Um Detetive Particular bem-sucedido destaca-se no meio;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Um Detetive favorece a história de muitas pessoas;
      </p>
      <p class="fw-500 text-justify">
        <ion-icon class="fs-20" style="margin-bottom: -4px;" name="checkmark-circle-outline" />
        Propicia na contribuição da resolução dos dramas pessoais.
      </p>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Porquê a Excellence Detetives?
      </h4>
      <div class="d-flex mt-30 row mx-auto">
        <div class="col-lg shadow border-dark border-radius-10 py-20">
          <div class="d-flex justify-content-center">
            <ion-icon class="fs-50 text-dark" name="medal-outline" />
          </div>
          <h6 class="text-uppercase fw-700 mt-10 text-center">
            Vasta experiência
          </h6>
          <p class="text-center fs-14 mb-0 fw-500">
            Mais de 25 anos de mercado, atuando com sucesso em todas as tarefas que recebemos.
          </p>
        </div>
        <div class="col-lg shadow mt-xs-3 mt-sm-3 mt-lg-0 border-dark border-radius-10 mx-lg-3 py-20">
          <div class="d-flex justify-content-center">
            <ion-icon class="fs-50 text-dark" name="ribbon-outline" />
          </div>
          <h6 class="text-uppercase fw-700 mt-10 text-center">
            Equipe especializada
          </h6>
          <p class="text-center fs-14 mb-0 fw-500">
            Equipe qualificada, com experiência em diversas funções e segmentos da investigação particular.
          </p>
        </div>
        <div class="col-lg shadow mt-xs-3 mt-sm-3 mt-lg-0 border-dark border-radius-10 py-20">
          <div class="d-flex justify-content-center">
            <ion-icon class="fs-50 text-dark" name="earth-outline" />
          </div>
          <h6 class="text-uppercase fw-700 mt-10 text-center">
            Área de atuação
          </h6>
          <p class="text-center fs-14 mb-0 fw-500">
            Temos profissionais atuando em 9 dos principais estados brasileiros com total profissionalismo.
          </p>
        </div>
      </div>
      <h4 class="text-uppercase fs-xs-20 mt-60 fw-600 text-center">
        Onde atuar?
      </h4>
      <p class="text-center text-uppercase col-lg-8 mx-auto fs-13 fw-500">
        Torne-se um detetive particular e tenha ótimos ganhos. Conquiste sua liberdade financeira!
      </p>
      <p class="mt-4 text-justify fw-500">
        <b>1) </b>Casos de infidelidade conjugal: acompanhamentos, levantamento por meio de registros telefônicos,
        monitoramento da pessoa investigada por meio de fotos, vídeos, áudios e relatórios.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>2) </b>Casos empresariais: busca de provas para defesa em processos contra ex-funcionários,
        monitoramento dos concorrentes, sociedades, além de informações gerais sobre o objeto pesquisado.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>3) </b>Localização de pessoas desaparecidas: pessoas separadas pelo destino, tais como: amigos,
        irmãos, um amor do passado, um filho procurando seus pais e vice-versa.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>4) </b>Pesquisa em cartórios: levantamento específico em busca de imóveis e documentos oficiais
        tais como: registro de nascimento, casamento, óbito e protestos.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>5) </b>Pesquisa de veículos no Detran: levantamento sobre o titular de um veículo ou que
        veículos uma pessoa específica tem registrados.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>6) </b>Casos de dependentes químicos: acompanhamento de pessoas envolvidas com drogas.
      </p>
      <p class="mt-3 text-justify fw-500">
        <b>7) </b>Averiguações em geral: incluindo fotos de propriedades, de veículos em determinados
        locais, pequenos acompanhamentos momentâneos, localização de pessoa em um determinado local.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'LayoutServicos',
  head: {
    title: 'Trabalhe conosco - Oportunidades de trabalho bem remunerado para quem busca independência financeira'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('servicos'),
      duration: 500,
      offset: -170
    })
  },
  methods: {
    CursoDetetive () {
      this.$router.push('/servicos/curso-de-detetive-particular/#servicos')
    }
  }
}
</script>
<style scoped>
  .border-dark{
    border: 3px solid var(--dark);
  }
</style>
