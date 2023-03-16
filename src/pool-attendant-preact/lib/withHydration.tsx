import { h } from "preact";
import { Component, ComponentType, Fragment, FunctionComponent } from "react";
import HydrationData from "./hydrationData";

export default <P extends any>(Component: ComponentType) => (
  props: any
) => {
  const hid = HydrationData.storeProps(Component, props);
  return (
    <div>
      <script type="application/hydration-marker" data-hid={hid} />
      <Component {...props} />
    </div>
  );
};
