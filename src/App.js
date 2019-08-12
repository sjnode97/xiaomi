import React,{Component} from 'react';
import "./components/indextop/index.scss"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from "./components/home"
import Tabbar from "./components/tabbar/index"
import My from "./components/my/index"
import Map from "./components/map/index"
import Shopcart from "./components/shopcart/index"
import Shopbuy from "./components/shop/index"

class App extends Component {
  render(){
        return (
            <Router>
                  <div>
                        <Switch>
                            <Route exact path={"/"} component={Home}></Route>
                            <Route path={"/map"} component={Map}></Route>
                            <Route path={"/my"} component={My}></Route>
                            <Route path={"/shopcart"} component={Shopcart}></Route>
                            <Route path={'/shopbuy/:shopid'} component={Shopbuy}></Route>

                        </Switch>
                      <Tabbar/>
                  </div>
            </Router>
        );
      }
}
export default App;
