<template>
  <div id="wrapper" class="main-layout">
        <side-bar />
      <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <navbar />
              <div class="container-fluid" id="container-fluid">
                  <child />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SideBar from '~/components/SideBar'

export default {
  middleware: 'auth',
  name: 'MainLayout',

  components: {
    Navbar,
    SideBar
  }
}
</script>
