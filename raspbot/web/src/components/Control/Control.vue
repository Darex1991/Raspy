<template>
  <section id="content">
    <div class="heading">Zmiana ustawień</div>
    <router-link class="row" to="/control/temp">
      <div class="icon"><font-awesome-icon icon="cog"/></div>
      <div class="title">Temp otwierania</div>
      <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
    </router-link>
    <router-link to="/control/update" class="row" v-if="this.$root.getUserType() === 'admin'">
      <div class="icon"><font-awesome-icon icon="download"/></div>
      <div class="title">Check for update</div>
      <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
    </router-link>
    <router-link to="/control/reboot" class="row" v-if="this.$root.getUserType() === 'admin'">
      <div class="icon"><font-awesome-icon icon="redo-alt"/></div>
      <div class="title">Reboot Raspbot</div>
      <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
    </router-link>
    <router-link to="/control/shutdown" class="row" v-if="this.$root.getUserType() === 'admin'">
      <div class="icon"><font-awesome-icon icon="power-off"/></div>
      <div class="title">Shutdown Raspbot</div>
      <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
    </router-link>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faPowerOff, faRedoAlt, faPlug, faAngleRight, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faDownload, faPowerOff, faRedoAlt, faPlug, faAngleRight, faCog);

export default {
  name: 'Control',
}
</script>

<style scoped src="@/shared/general.css"></style>
