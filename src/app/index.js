import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Clock } from "./components/Clock";
import { Welcome } from "./components/Welcome";
import { WelcomeGuest } from "./components/WelcomeGuest";
import { MyWebDevTechStack } from "./components/MyWebDevTechStack";
import { ComponentDefinition } from "./components/ComponentDefinition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      homeLink: "React",
      isLoggedIn: false
    }
  }

  describeYourself() {
    var divElem = document.createElement("div");
    divElem.id = 'description';
    document.getElementById('skills').appendChild(divElem);
    var appDescription = divElem.innerHTML = `Hello my name is App. I am an extension of the React.Component`;
    this.setState({
      description: appDescription
    });
  }

  changeLinkName(newName) {
    console.log('newN', newName);
    this.setState({
      homeLink: newName
    });
  }

  getLoginStatus() {
    const loginStatus = this.state.isLoggedIn;
    this.setState({
      isLoggedIn: !loginStatus
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    var user = {
      name: 'Anthony Elam',
      skills: ['web development', 'investing'],
      webDevLangs: ['Javascript ES2015', 'JQuery', 'Angular v4.x', 'RxJs', 'HTML', 'CSS', 'SASS', 'BootStrap', 'NPM', 'GIT CLI', 'Gulp', 'WebPack']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={() => this.getLoginStatus()}>{isLoggedIn ? "Log Out" : "Log In"}</button>
            {isLoggedIn
              ? <Welcome user={user}>
                <Clock />
                <MyWebDevTechStack user={user}></MyWebDevTechStack>
                {"Hey Man!"}
              </Welcome>
              : <WelcomeGuest isLoggedIn={!isLoggedIn}></WelcomeGuest>
            }
            <Home
              user={user}
              getDescription={this.describeYourself.bind(this)}
              changeLink={this.changeLinkName.bind(this)}
            >
              <p>
                I am a child of the "HOME" Component.
                <br />App Description: {this.state.description}
              </p>
            </Home>
            <ComponentDefinition name={"Tony"}></ComponentDefinition>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));