import AboutView from '@/views/users/AboutView.vue';
import HomeView from '@/views/users/HomeView.vue';
import ProductView from '@/views/users/ProductView.vue';
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
            name: 'AboutView',
            component: AboutView
          },
        {
          path: '/products',
          name: 'ProductView',
          component: ProductView
        }
       
      ],
    },
  ];
  