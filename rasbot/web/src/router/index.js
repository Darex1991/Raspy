import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main/Main.vue';
import Browser from '@/components/Browser/Main/Main.vue';
import File from '@/components/Browser/File/File.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';
import Settings from '@/components/Settings/Main.vue';
import SettingsAccount from '@/components/Settings/Account/Account.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/browse',
      name: 'Browser',
      component: Browser,
      meta: {
				tab: 1,
				requiresAuth: true
			}
    },
    {
			path: '/browse/:path',
			name: 'Directory',
			component: Browser,
			props: true,
			meta: {
				tab: 1,
				requiresAuth: true
			}
		},
    {
			path: '/browser/file/:path',
			name: 'File',
			component: File,
			props: true,
			meta: {
				tab: 1,
				requiresAuth: true
			}
		},
    {
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
			meta: {
				tab: 2,
				requiresAuth: true
			}
		},
    {
			path: '/settings',
			name: 'Settings',
			component: Settings,
			meta: {
				tab: 3,
				requiresAuth: true
			}
		},
    {
      path: '/settings/account',
      name: 'SettingsAccount',
      component: SettingsAccount,
      meta: {
        tab: 3,
        requiresAuth: true
      }
    }
  ]
});
