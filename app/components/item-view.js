import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  init() {
    this._super(...arguments);

    Ember.setProperties(this, {
      viewportEnabled                 : true,
      viewportUseRAF                  : true,
      viewportSpy                     : false,
      viewportUseIntersectionObserver : true,
      viewportScrollSensitivity       : 1,
      viewportRefreshRate             : 150,
      intersectionThreshold           : 0,
      scrollableArea                  : null,
      viewportTolerance: {
        top    : 100,
        bottom : 100,
      }
    });
  },
  didEnterViewport() {
    let id = this.get('itemId');
    this.set('isLoading', true);
    Ember.$.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((data) => {
      this.set('item', data);
      this.set('isLoading', false);
      console.log(data);
    });
  },

  didExitViewport() {
    console.log('exited');
  },
});
