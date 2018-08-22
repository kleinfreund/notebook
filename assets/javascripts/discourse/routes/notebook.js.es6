/**
 * Route for the path `/notebook` as defined in `../notebook-route-map.js.es6`.
 */
export default Discourse.Route.extend({
  renderTemplate() {
    // Renders the template `../templates/notebook.hbs`
    this.render('notebook');
  }
});
