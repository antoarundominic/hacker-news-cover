import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    let id = this.get('itemId');
    Ember.$.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((data) => {
      this.set('item', data);
    });
  }
});
