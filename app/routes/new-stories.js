import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve, reject ) => {
      return Ember.$.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty").then((data) => {
        console.log(data);
        var flattenedItems = data.reduce(
          ( acc, cur ) => acc.concat(cur),
          []
        );
        flattenedItems.forEach((id) => { this.get('store').push({data: [{id: id, type: 'item'}]}) });
        let items = this.get("store").peekAll('item');
        return resolve(items);
      })
    })
  }
});
