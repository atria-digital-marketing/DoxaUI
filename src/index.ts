export { default as DXButton } from './components/DXButton.vue';
export { default as DXInput } from './components/DXInput.vue';
export { default as DXCheckbox } from './components/DXCheckbox.vue';
export { default as DXRadio } from './components/DXRadio.vue';
export { default as DXSwitch } from './components/DXSwitch.vue';

import { App } from 'vue';

export default {
  install(app: App) {
    app.component('DXButton', () => import('./components/DXButton.vue'));
    app.component('DXInput', () => import('./components/DXInput.vue'));
    app.component('DXCheckbox', () => import('./components/DXCheckbox.vue'));
    app.component('DXRadio', () => import('./components/DXRadio.vue'));
    app.component('DXSwitch', () => import('./components/DXSwitch.vue'));
  }
};