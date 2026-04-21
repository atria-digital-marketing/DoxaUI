export { default as DXButton } from './components/DXButton.vue';
export { default as DXInput } from './components/DXInput.vue';
export { default as DXCheckbox } from './components/DXCheckbox.vue';
export { default as DXRadio } from './components/DXRadio.vue';
export { default as DXSwitch } from './components/DXSwitch.vue';
export { default as DXText } from './components/DXText.vue';
export { default as DXLink } from './components/DXLink.vue';
export { default as DXHeading } from './components/DXHeading.vue';
export { default as DXIcon } from './components/DXIcon.vue';

import { App } from 'vue';

export default {
  install(app: App) {
    app.component('DXButton', () => import('./components/DXButton.vue'));
    app.component('DXInput', () => import('./components/DXInput.vue'));
    app.component('DXCheckbox', () => import('./components/DXCheckbox.vue'));
    app.component('DXRadio', () => import('./components/DXRadio.vue'));
    app.component('DXSwitch', () => import('./components/DXSwitch.vue'));
    app.component('DXText', () => import('./components/DXText.vue'));
    app.component('DXLink', () => import('./components/DXLink.vue'));
    app.component('DXHeading', () => import('./components/DXHeading.vue'));
    app.component('DXIcon', () => import('./components/DXIcon.vue'));
  }
};