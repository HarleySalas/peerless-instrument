import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./AnimatedSwitch.scss";

import { useCompare } from "../../utils";

// const AnimatedSwitch = props => {
//   return (
//     <TransitionGroup
//       childFactory={child =>
//         React.cloneElement(child, {
//           classNames: props.location.state.transition,
//           timeout: 1000
//         })
//       }
//     >
//       <CSSTransition key={props.location.key} timeout={1000}>
//         <Switch location={props.location}>{props.children}</Switch>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };

const AnimatedSwitch = props => {
  const location = props.location;
  const timeout = 1000;
  const deviceWidth = window.innerWidth;

  const pathChanged = useCompare(location.pathname);

  const setTheTimeout = () => {
    let timeout = 1000;

    if (deviceWidth < 550) {
      if (props.history.action === "PUSH") {
        timeout = 1000;
      } else {
        timeout = 0;
      }
    }
    if (!pathChanged) {
      timeout = 0;
    }
    return timeout;
  };

  const setTheAnimation = () => {
    let animation = "none";
    if (deviceWidth >= 550) {
      animation = determineAnimationDirection();
    } else {
      if (props.history.action === "PUSH") {
        animation = determineAnimationDirection();
      }
    }
    if (!pathChanged) {
      animation = "none";
    }
    return animation;
  };

  const determineAnimationDirection = () => {
    let animationDirection = "none";
    if (location.pathname === "/") {
      animationDirection = "slideRight";
    } else {
      animationDirection = "slideLeft";
    }

    return animationDirection;
  };

  return (
    <TransitionGroup
      className="sliderTransitionGroup"
      childFactory={child =>
        React.cloneElement(child, {
          timeout: setTheTimeout(),
          classNames: setTheAnimation(),
          mountOnEnter: true,
          unmountOnExit: true
        })
      }
    >
      <CSSTransition key={location.key} timeout={timeout} mountOnEnter unmountOnExit>
        <Switch location={location}>{props.children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(AnimatedSwitch);
