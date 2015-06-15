var React = require("react")
var App = require("./components/app")


var Router = require('react-router');
var Route = Router.Route;






var routes = (
    <Route handler={App} path="/scopic/index.html">
{/*<DefaultRoute handler={Home} />
<NotFoundRoute handler={UserRouteNotFound}/>*/}

</Route>
/*<NotFoundRoute handler={NotFound}/>*/

);



// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});