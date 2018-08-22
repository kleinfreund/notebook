export default Ember.Controller.extend({
  init() {
    this._super();
    this.set('notes', []);
    this.fetchNotes();
  },

  fetchNotes() {
    this.store.findAll('note')
      .then(result => {
        for (const note of result.content) {
          this.notes.pushObject(note);
        }
      })
      .catch(console.error);
  },

  actions: {
    createNote(content) {
      if (!content) {
        return;
      }

      const noteRecord = this.store.createRecord('note', {
        id: Date.now(),
        content: content
      });

      noteRecord.save()
        .then(result => {
          this.notes.pushObject(result.target);
        })
        .catch(console.error);
    },

    deleteNote(note) {
      this.store.destroyRecord('note', note)
        .then(() => {
          this.notes.removeObject(note);
        })
        .catch(console.error);
    }
  }
});
