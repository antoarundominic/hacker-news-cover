import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('top-stories', { path: '/' });
  this.route('new-stories');
  this.route('hn-show');
});

export default Router;
