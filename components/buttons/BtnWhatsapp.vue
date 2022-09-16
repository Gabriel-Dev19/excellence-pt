<template>
  <div>
    <button class="btn btn-press-vermelho col-12 d-flex justify-content-center align-items-center" @click.prevent="$root.$emit('ShowModalWhatsApp')">
      <ion-icon class="mr-2 fs-22" name="logo-whatsapp" /> {{ nameBtn }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    nameBtn: {
      type: String,
      required: false,
      default: 'Contato pelo whatsapp'
    }
  }
}
</script>
