import React from "react";
import { Route } from "react-router";

function ContentRoute(props) {
  let { route } = props;
  let { path, exact, component: MyComponent, ...customValue } = route;
  return (
    <div>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return <MyComponent {...routeProps} {...customValue} />;
        }}
      />
    </div>
  );
}

export default ContentRoute;
