import DiscourseRoute from 'discourse/routes/discourse';

/**
 * Route for the path `/notebook` as defined in `../notebook-route-map.js.es6`.
 */
export default DiscourseRoute.extend({
  renderTemplate() {
    // Renders the template `../templates/notebook.hbs`
    this.render('notebook');
  }
});
