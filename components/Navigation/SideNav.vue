<template>
  <div class="sidenav-container">
    <nav class="sidenav">
      <div class="nav-item logo">
        <font-awesome-icon :icon="['fab', 'slack']" @click="$router.push('/')" />
      </div>
      <div class="nav-item">
        <nuxt-link to="/polls/">
          <font-awesome-icon :icon="['fas', 'file-signature']" />
          <p>Опросы</p>
        </nuxt-link>
      </div>
      <div class="nav-item">
        <nuxt-link to="/users">
          <font-awesome-icon :icon="['fas', 'users']" />
          <p>Пользователи</p>
        </nuxt-link>
      </div>
      <div class="nav-item">
        <nuxt-link to="/lists">
          <font-awesome-icon :icon="['fas', 'address-book']" />
          <p>Черные списки</p>
        </nuxt-link>
      </div>
      <div class="nav-item">
        <nuxt-link to="/calls">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <p>Колл центр</p>
        </nuxt-link>
      </div>
      <div class="nav-item help">
        <nuxt-link to="/helps">
          <font-awesome-icon :icon="['fas', 'question-circle']" />
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideNav"
};
</script>


<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo > svg {
  width: 80%;
  height: 80%;
  color: tomato;
  cursor: pointer;
}
.sidenav-container {
  width: 140px;
  border-right: 1px solid grey;
  opacity: 0.4;
}
.nav-item:last-child {
  justify-self: flex-end;
  margin-top: auto;
}
.sidenav {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-flow: column;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-item > a:not(.active) {
  border: 2px solid rgba(23, 133, 23, 0.795);
  color: rgba(23, 133, 23, 0.795);
}
.nav-item > a > svg {
  width: 30%;
  height: 30%;
  color: rgba(23, 133, 23, 0.795);
}
.nav-item {
  margin: 4px 0;
  flex-basis: 90px;
  height: 5%;
  padding: 8px;
}

.help {
  margin-top: auto;
}
.nav-item > a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: block;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  padding: 0 4px;
}
.nav-item > a > p {
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  font-stretch: condensed;
}
.active {
  background-color: lightgray;
}

.active svg {
  color: black !important;
}
.active > a > p {
  color: black;
}
/* .nav-item a:hover,
.nav-item a:active {
  color: red;
} */
</style>
