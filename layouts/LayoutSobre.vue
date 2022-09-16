<template>
  <div>
    <Navbar />
    <Home />
    <main>
      <Nuxt id="sobre" class="pt-100" />
    </main>
    <Valores />
    <Destaques />
    <section class="bg-dark py-70">
      <TodosOsServicos id="servicos" />
    </section>
    <Numeros />
    <ProvasSociais />
    <Contato />
    <Footer />
    <ModalWhatsapp />
    <BtnWhatsappFlutuante />
    <client-only>
      <Cookie />
    </client-only>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import { BootstrapVue } from '../node_modules/bootstrap-vue'
import VueSmoothScroll from '../node_modules/vue2-smooth-scroll'
import '../assets/scss/index.css'
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
import Valores from '../components/Valores.vue'
import Destaques from '../components/Destaques.vue'
import TodosOsServicos from '../pages/servicos/index.vue'
import Numeros from '../components/Numeros.vue'
import Contato from '../components/Contato.vue'
import Footer from '../components/Footer.vue'
import Vuelidate from '../node_modules/vuelidate'
import ProvasSociais from '~/components/ProvasSociais.vue'
import ModalWhatsapp from '~/components/ModalWhatsapp.vue'
import BtnWhatsappFlutuante from '~/components/buttons/BtnWhatsappFlutuante.vue'
import Cookie from '~/components/Cookie.vue'
Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)
Vue.use(Vuelidate)
Vue.directive('scroll', {
  inserted (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
export default {
  components: { Navbar, Home, Valores, Destaques, TodosOsServicos, Numeros, Contato, Footer, ProvasSociais, ModalWhatsapp, BtnWhatsappFlutuante, Cookie },
  mounted () {
    document.oncontextmenu = function () {
      return false
    }

    function EvitarSeleccion (target) {
      if (typeof target.onselectstart !== 'undefined') {
        target.onselectstart = function () {
          return false
        }
      } else if (typeof target.style.MozUserSelect !== 'undefined') {
        target.style.MozUserSelect = 'none'
      } else {
        target.style.cursor = 'default'
      }
    }

    EvitarSeleccion(document.body)
  }
}
</script>
<style lang="">
</style>
