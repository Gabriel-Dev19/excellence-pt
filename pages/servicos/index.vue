<template>
  <div class="container d-flex align-items-sm-stretch row mx-auto">
    <div class="col-md-6 col-lg-4 d-flex align-items-center pl-0 pr-xs-0 pr-sm-0 pr-md-10">
      <h1 class="fw-700 text-xs-center text-sm-center text-md-left text-white mb-1">
        Conheça nossas habilidades em <span class="text-vermelho">Serviços
          de Detetive</span>
      </h1>
    </div>
    <div class="col-md-6 col-lg-4 mt-xs-80 mt-sm-80 mt-md-0 text-white px-xs-0 px-sm-0 pl-md-10 pr-md-0 px-lg-5">
      <div class="borda-servicos h-100 shadow position-relative px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="bar-chart-outline" />
        </div>
        <h5 class="text-white mt-15">
          Casos empresariais
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          A investigação empresarial é um conjunto de práticas aplicadas para descobrir o que há de errado com o andamento
          e desenvolvimento de uma empresa. Essas práticas têm como objetivo, encontrar irregularidades nos setores internos
          da organização.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="InvestigacaoEmpresarial">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Casos empresariais</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-xs-60 mt-sm-60 mt-lg-0 text-white px-xs-0 px-sm-0 pr-md-10 pl-md-0 pl-lg-10 pr-lg-0">
      <div class="borda-servicos h-100 shadow position-relative px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="heart-dislike-outline" />
        </div>
        <h5 class="text-white mt-15">
          Casos conjugais
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          A Excellence Agência de Detetives possui larga experiência em investigação de infidelidade conjugal.
          Utilizamos métodos tradicionais e modernos, e contamos com equipamentos de alta tecnologia, para garantir
          a precisão das informações coletadas.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="InvestigacaoConjugal">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Casos conjugais</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pl-md-10 pr-md-0 pr-lg-10 pl-lg-0">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="cash-outline" />
        </div>
        <h5 class="text-white mt-15">
          Casos políticos
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          Tem se tornado cada dia mais frequente os casos de corrupção relacionados a processos eleitorais.
          As técnicas avançadas de investigação são um grande auxilio ao longo do processo
          investigativo dos candidatos que parecem suspeitos aos olhos de alguns.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="InvestigacaoPolitica">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Casos políticos</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pr-md-10 pl-md-0 px-lg-5">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="reader-outline" />
        </div>
        <h5 class="text-white mt-15">
          Provas para advogados
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          A Excellence Agência de Detetives, oferece também serviços direcionados ao atendimento da classe advocatícia.
          Contamos com profissionais especializados, e durante a investigação fornecemos provas válidas
          para processos e inquéritos policiais.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="ProvasAdvogados">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Provas para advogados</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pl-md-10 pr-md-0 pl-lg-10 pr-lg-0">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="compass-outline" />
        </div>
        <h5 class="text-white mt-15">
          Pessoas desaparecidas
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          A localização de pessoas é um dos serviços mais complexos na área da investigação, isso porque envolve vários
          tipos de providências: ferramentas modernas, tecnologias inovadoras e investigadores treinados
          para obtermos sucesso na investigação.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="PessoasDesaparecidas">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Pessoas desaparecidas</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pr-md-10 pl-md-0 pr-lg-10 pl-lg-0">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="phone-portrait-outline" />
        </div>
        <h5 class="text-white mt-15">
          Celular espião para filhos
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          Imagine saber tudo que seu filho faz e fala no celular dele e tudo isso ainda em tempo real sem
          que ele saiba de nada. Imagine observar todas as ligações telefônicas do seu filho, ler as mensagens
          de textos, ouvir áudios, enfim ter acesso a todas as suas redes sociais.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="CelularEspiao">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Celular VIP</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pl-md-10 pr-md-0 px-lg-5">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="school-outline" />
        </div>
        <h5 class="text-white mt-15">
          Curso de detetive particular
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          Venha se especializar com quem é especialista no ramo de Investigação Particular. Realizando nosso Curso
          de Detetive Particular, você estará recebendo online um material de qualidade para estudar em suas horas
          vagas, sem sair de casa e tudo dentro do seu próprio ritmo.
        </p>
        <div class="d-flex mt-3">
          <button class="btn btn-press-vermelho d-flex align-items-center" @click.prevent="CursoDetetive">
            <ion-icon class="fs-22 mr-2" name="bar-chart-outline" />
            <span style="margin-bottom: -2px;">Curso de detetive</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-4 mt-60 text-white px-xs-0 px-sm-0 pl-lg-10 pr-lg-0">
      <div class="borda-servicos h-100 position-relative shadow px-3 py-4 border-radius-20">
        <div id="icon-services" class="bg-dark">
          <ion-icon class="fs-60 text-vermelho-escuro mr-2" name="call-outline" />
        </div>
        <h5 class="text-white mt-15">
          Contate nossa equipe
        </h5>
        <p class="text-white mb-0 fs-sm-15">
          A Excellence está totalmente preparada para lhe atender seja qual for sua necessidade no
          meio investigativo. Dominamos todos os tipos de investigação, incluindo conjugal e empresarial
          dentre diversos outros serviços.
        </p>
        <div class="d-flex mt-3">
          <btn-form :name-btn="'Página de contato'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnForm from '../../components/buttons/BtnForm.vue'
export default {
  components: {
    BtnForm
  },
  layout: 'LayoutServicos',
  mounted () {
    if (window.location.href === 'https://excellencedetetives.com.br/servicos/#servicos') {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    }
  },
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
      this.$router.push('/servicos/curso-de-detetive-particular/#servicos')
    }
  }
}
</script>
<style scoped>
  .borda-servicos{
    border: 3px solid var(--vermelho_escuro);
  }
  #icon-services{
    position: absolute;
    top: -40px;
    left: 40px;
    padding-left: 15px;
    padding-right: 5px;
  }
</style>
