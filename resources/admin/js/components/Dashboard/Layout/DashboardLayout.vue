<template>
    <div id="wrapper">
        <side-bar></side-bar>
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <top-navbar></top-navbar>
                <div class="container-fluid" id="container-fluid">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Chicorycom.net 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->
        </div>

    </div>
</template>

<script>
    import TopNavbar from './TopNavbar.vue'
    import SideBar from './SideBar.vue'
    export default {
        name: "DashboardLayout",
        components: {
            TopNavbar,
            SideBar
        }
    }
</script>

<style scoped>

</style>