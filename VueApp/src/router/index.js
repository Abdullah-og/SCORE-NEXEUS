

import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import DashboardView from '../views/DashboardView.vue';
import AddPlayerView from '../views/AddPlayerView.vue';
import ManagePlayersView from '../views/ManagePlayersView.vue'; 
import MatchScheduleView from '../views/MatchScheduleView.vue';
import ForgotPasswordView from '../views/ForgotPasswordView.vue';

const routes = [
  {
    path: '/',
    component: LoginView,
  },
  {
    path: '/signup',
    component: SignupView,
  },
  {
    path: '/dashboard',
    component: DashboardView,
  },
  {
    path: '/add-player',
    component: AddPlayerView,
  },
  {
    path: '/manage-players',
    component: ManagePlayersView,
  },
   {
    path: '/schedule',
    component: MatchScheduleView,
  },
  {
    path: '/dashboard/manage-players',
    component: ManagePlayersView, 
  },
   {
    path: '/dashboard/schedule',
    component: MatchScheduleView, 
  },
 
  {
    path: '/dashboard/add-player',
    component: AddPlayerView, 
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordView, 
  }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
