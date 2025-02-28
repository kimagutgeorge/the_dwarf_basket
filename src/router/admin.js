import HomeView from '@/views/admin/HomeView.vue';


export default [
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        { 
          path: '/admin/dashboard', 
          name: 'HomeView',
          component: HomeView
        },
       
      ],
    },
  ];
  