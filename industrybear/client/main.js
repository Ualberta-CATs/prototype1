import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './imports/lib/router.js';
import './main.html';

Meteor.startup(() => {
  console.log('hehe the startup function is caled');
  render(renderRoutes(), document.getElementById('app'));
});
