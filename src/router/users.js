import AboutView from '@/views/users/AboutView.vue';
import HomeView from '@/views/users/HomeView.vue';
import ProductView from '@/views/users/ProductView.vue';
import ContactView from '@/views/users/ContactView.vue';
import ServiceView from '@/views/users/ServiceView.vue';
import SingleProductView from '@/views/users/SingleProductView.vue';
import EnquireView from '@/views/users/EnquireView.vue';

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
        },
        {
          path: '/contact-us',
          name: 'ContactView',
          component: ContactView
        },
        {
          path: '/services',
          name: 'ServiceView',
          component: ServiceView
        },
        {
          path :'/view-service',
          name: 'SingleProductView',
          component: SingleProductView
        },
        {
          path :'/enquire/:id',
          name: 'Product Details',
          component: EnquireView,
          props: true
        }
       
      ],
    },
  ];
  