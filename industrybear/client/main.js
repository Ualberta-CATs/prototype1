import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './lib/router.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
