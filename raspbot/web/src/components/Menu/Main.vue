<template>
  <section id="content">
    <nav class="options">
      <router-link to="/advanced/devices" class="row" v-if="this.$root.getUserType() === 'admin'">
        <div class="noselect">
          <div class="icon"><font-awesome-icon :icon="['far', 'hdd']"/></div>
          <div class="title">Mount/Unmount</div>
          <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </router-link>
      <router-link to="/control" class="row">
        <div class="noselect">
          <div class="icon"><font-awesome-icon icon="keyboard"/></div>
          <div class="title">Zmiana ustawień</div>
          <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </router-link>
      <router-link to="/settings" class="row">
        <div class="noselect">
          <div class="icon"><font-awesome-icon icon="sliders-h"/></div>
          <div class="title">Ustawienia</div>
          <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </router-link>
      <div class="row button-logout" v-on:click="logout" >
        <div class="noselect">
          <div class="icon"><font-awesome-icon icon="key"/></div>
          <div class="title">Wyloguj</div>
          <div class="arrow"><font-awesome-icon icon="angle-right"/></div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSlidersH, faKeyboard, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHdd } from '@fortawesome/free-regular-svg-icons';
import { methods } from '@/components/Menu/menu.js';

library.add(faHdd, faSlidersH, faKeyboard, faAngleRight);

export default {
  name: 'Menu',
  methods: methods,
}
</script>

<style scoped src="@/shared/general.css"></style>
<style scoped src="@/components/Menu/main.css"></style>
