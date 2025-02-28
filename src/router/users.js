import AboutView from '@/views/users/AboutView.vue';
import HomeView from '@/views/users/HomeView.vue';
export default [
    {
      path: '/',
      component: () => import('@/layouts/ClientLayout.vue'),
      children: [
        { 
          path: '/', 
          name: 'HomeView',
          component: HomeView
        },
        { 
            path: '/about-us', 
            name: 'About',
            component: AboutView
          },
       
      ],
    },
  ];
  