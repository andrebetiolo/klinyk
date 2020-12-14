<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Klinyk</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Calendario</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/patient-register">Cadastro de pacientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/patient-list">Lista de pacientes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container p-4">
    <router-view/>
  </main>

</template>

<script>
export default {
}
</script>

<style lang="scss">
body {
  font-family: 'Quicksand', sans-serif;
}
</style>
