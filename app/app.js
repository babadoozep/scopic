import React from "react"
import Router from "react-router"
import FreelanceCode from "./components/freelance-code.jsx"
import Entry from "./components/entry.jsx"
import Wrapper from "./components/wrapper.jsx"

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute


var routes = (

      <Route handler={Wrapper} path="/">
        <DefaultRoute handler={Entry}/>
        <Route handler={FreelanceCode} path="/freelance-code"></Route>

      {/*<NotFoundRoute handler={UserRouteNotFound}/>*/}

      </Route>



  /*<NotFoundRoute handler={NotFound}/>*/

);



// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});