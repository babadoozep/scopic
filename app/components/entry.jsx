import React from "react"
import {Link, RouteHandler} from "react-router"

export default class Entry extends React.Component{



  render(){
    return <div>
      <Link to="/freelance-code">Freelance</Link>
      <button>Hiring</button>

    </div>
  }
}

