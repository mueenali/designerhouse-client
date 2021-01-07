import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

//require all components in the current directory and sub directory
const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/)

requireComponent.keys().forEach(c => {
  const componentConfig = requireComponent(c);
  const fileName = c.split('/').pop().replace(/\.\w+$/, '');
  const componentName = upperFirst(camelCase(fileName));

  Vue.component(componentName, componentConfig.default||componentConfig);
});
