<template>
<NavBar/>
<ClientFooter/>
</template>

<script>
import NavBar from '@/components/users/NavBar.vue';
import ClientFooter from '@/components/users/ClientFooter.vue';

export default {
name: 'ProductView',
components: { NavBar, ClientFooter }
}
</script>