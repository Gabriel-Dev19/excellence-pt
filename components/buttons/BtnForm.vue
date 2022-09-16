<template>
  <div>
    <a v-smooth-scroll="{duration: 500, offset: -100}" href="#contato" class="btn btn-press-vermelho d-flex justify-content-center align-items-center">
      <ion-icon class="mr-2 fs-22" name="document-text-outline" /> {{ nameBtn }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    nameBtn: {
      type: String,
      required: false,
      default: 'Preencha nosso formulário'
    }
  }
}
</script>
