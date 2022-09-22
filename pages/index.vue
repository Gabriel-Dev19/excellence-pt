<template>
  <div class="container">
    <h1 class="text-vermelho mb-1 fs-xs-30 text-uppercase fw-700 text-center">
      Conheça a Excellence
    </h1>
    <div class="d-flex justify-content-center">
      <ion-icon class="fs-30 text-vermelho" name="chevron-down-outline" />
    </div>
    <div class="mt-xs-20 mt-sm-20 mt-md-50">
      <h3 class="col-md-5 mb-xs-30 mb-sm-30 mb-md-10 mr-3 text-xs-center text-sm-center text-md-left px-0 fw-700 float-left">
        A Excellence é uma <span class="text-vermelho">empresa séria</span> que vem a mais de 25 anos
        <span class="text-vermelho">solucionando os mais variados casos</span> em todo o país.
      </h3>
      <p class="fw-500 text-justify">
        Com mais de 25 anos de experiência e centenas de casos resolvidos, atuamos em todo o Portugal,
        inclusive nas cidades do interior, executando nossos serviços de forma discreta e sigilosa, e trabalhando
        de forma rápida e eficaz, para proporcionar ao cliente resultado no menor tempo possível. Ajustamos nosso
        trabalho de acordo com a necessidade e exigência de cada cliente.
      </p>
      <p class="fw-500 text-justify">
        Se você quer localizar uma pessoa (um amigo perdido, parente ou devedor),
        ou suspeita que os seus funcionários ou sócios estão com comportamentos desonestos perante
        sua empresa,  suspeita que seu cônjuge não está sendo fiel a você, desconfia que seu filho/filha
        esteja envolvido com más companhias ou até mesmo está fazendo uso de drogas, ou ainda
        tem dúvidas de como sua empregada doméstica ou babá se comporta em sua residência durante sua ausência.
      </p>
      <p class="fw-500 text-justify">
        Não importa a complexidade do seu caso, nossos investigadores estão altamente capacitados
        e irão lhe atender com profissionalismo para que todas as suas dúvidas e esclarecimentos
        sejam sanadas, proporcionando a você a paz de espírito que você tanto necessita e merece.
      </p>
      <p class="fw-500 text-justify">
        Navegue pelo nosso site e conheça melhor nossos serviços e veja como a Excellence poderá lhe ajudar.
      </p>
      <h4 class="text-uppercase flex-fill text-center mt-40 fs-xs-20 fw-700 text-vermelho">
        <ion-icon class="text-vermelho fs-20 mr-1" style="margin-bottom: -2px;" name="send-outline" /> Entre em contacto com a Excellence!
      </h4>
      <p class="text-center fs-15 col-xl-8 px-0 mt-3 mx-auto fw-600">
        Preencha nosso formulário de contacto com seu nome, e-mail e outros dados para que possamos entrar em
        contacto com você, ou fale conosco diretamente pelo WhatsApp.
      </p>
      <div class="d-flex row mx-auto mt-4 justify-content-center">
        <BtnForm class="col-xs-12 col-sm-12 px-0 col-md-auto" />
        <BtnWhatsapp class="mt-xs-10 mt-sm-10 mt-md-0 ml-md-3 col-xs-12 col-sm-12 px-0 col-md-auto" />
      </div>
    </div>
  </div>
</template>
<script>
import BtnForm from '../components/buttons/BtnForm.vue'
import BtnWhatsapp from '../components/buttons/BtnWhatsapp.vue'
export default {
  components: { BtnForm, BtnWhatsapp },
  layout: 'LayoutSobre',
  head: {
    link: [
      { rel: 'alternate', href: 'https://excellencedetetives.com.br/', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://excellencedetetives.com.br/', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://excellencedetectives.pt/', hreflang: 'pt' }
    ]
  }
}
</script>
<style scoped>

</style>
