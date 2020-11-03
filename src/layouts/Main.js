import React from "react"
// react library for routing
import { Route, Switch, Redirect } from "react-router-dom"

import routes from "routes.js"
import MainNavbar from "components/Navbars/MainNavbar"
import MainFooter from "components/Footers/MainFooter"

class Main extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.mainContent.scrollTop = 0
    document.body.classList.add("bg-default")
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default")
  }
  componentDidUpdate(e) {
    if (e.history.pathname !== e.location.pathname) {
      document.documentElement.scrollTop = 0
      document.scrollingElement.scrollTop = 0
      this.refs.mainContent.scrollTop = 0
    }
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views)
      }
      if (prop.layout === "main") {
        return <Route path={prop.path} component={prop.component} key={key} />
      } else {
        return null
      }
    })
  }
  render() {
    return (
      <>
        <div className='main-content' ref='mainContent'>
          <MainNavbar />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from='*' to='/login' />
          </Switch>
        </div>
        <MainFooter />
      </>
    )
  }
}

export default Main
