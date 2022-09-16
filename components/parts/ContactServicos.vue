<template>
  <div>
    <img :src="slotImg" class="img-fluid" :alt="slotAlt">
    <div class="bg-grafite px-3 py-20">
      <h6 class="text-center text-white fw-600 text-uppercase">
        Entre em contato
      </h6>
      <p class="fs-13 text-white text-center">
        Clique em algum dos botões abaixo e entre em contato com nossos
        especialistas
      </p>
      <div class="d-flex justify-content-center">
        <div>
          <a v-smooth-scroll="{duration: 500, offset: -100}" href="#contato" class="d-flex fs-15 text-white align-items-center">
            <div class="bolinha-vermelha d-flex mr-2 align-items-center justify-content-center">
              <ion-icon class="fs-22 text-white" name="document-text-outline" />
            </div>
            Preencha nosso formulário
          </a>
          <a class="d-flex mt-3 fs-15 cursor-pointer text-white align-items-center" @click.prevent="$root.$emit('ShowModalWhatsApp')">
            <div class="bolinha-vermelha d-flex mr-2 align-items-center justify-content-center">
              <ion-icon class="fs-22 text-white" name="logo-whatsapp" />
            </div>
            Fale em nosso WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slotImg: {
      type: String,
      required: false,
      default: ''
    },
    slotAlt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style scoped>
  .bolinha-vermelha{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--vermelho_pouco_escuro);
  }
</style>
