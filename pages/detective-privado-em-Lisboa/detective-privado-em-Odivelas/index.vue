<template>
  <div class="container">
    <h2 class="text-vermelho mb-1 fs-xs-25 text-uppercase fw-700 text-center">
      Detective privado em Odivelas
    </h2>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence <span class="text-vermelho">está em Odivelas</span> a mais de 25 anos
        proporcionando a seus clientes <span class="text-vermelho">a verdade que eles tanto buscam.</span>
      </h3>
      <p class="fw-500 text-justify">
        Se você está procurando um Detective Privado em Odivelas acabou de encontrar!
      </p>
      <p class="fw-500 text-justify">
        A Excellence Agência de Detectives Privados está em Odivelas a mais de 25 anos proporcionando a seus clientes
        a verdade que eles tanto buscam, tudo isso dentro do mais absoluto sigilo e discrição. Nosso objetivo é levar o
        resultado no menor tempo possível e com a eficiência necessária.
      </p>
      <p class="fw-500 text-justify">
        Ao longo desses anos, temos centenas e até mesmo milhares de casos resolvidos. Não deixe mais
        a dúvida assombrar sua vida, a insegurança e incerteza não devem existir.
      </p>
      <p class="fw-500 text-justify">
        Somos especialista em casos Conjugais, Empresariais, Políticos, Localização de Pessoas Desaparecidas, trabalhamos
        em parceria com advogados para obtenção de provas,
        e muitos outros casos. Entre em contacto conosco que teremos a satisfação de ajudá-lo a sanar todas as suas dúvidas.
      </p>
      <h4 class="text-uppercase flex-fill text-center mt-40 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Entre em contacto com a Excellence!
      </h4>
      <p class="text-center fs-15 col-xl-8 px-0 mt-3 mx-auto fw-600">
        Clique no botão abaixo e ligue para um de nossos especialistas para falar mais sobre
        o seu caso, ou vá para a nossa seção de contacto e preencha o formulário de contacto.
      </p>
      <div class="d-flex row mx-auto mt-4 justify-content-center">
        <BtnForm :name-btn="'Formulário de contato'" />
      </div>
    </div>
  </div>
</template>
<script>
import BtnForm from '~/components/buttons/BtnForm.vue'
export default {
  components: { BtnForm },
  layout: 'LayoutSobre',
  head: {
    title: 'Excellence - Detective Privado em Odivelas'
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('sobre'),
      duration: 500,
      offset: -100
    })
  }
}
</script>
<style scoped>

</style>
