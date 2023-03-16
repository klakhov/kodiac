import { h } from "preact";
import { Component, ComponentType, Fragment, FunctionComponent } from "react";
import HydrationData from "./hydrationData";

export default function withHydration<P>(Component: ComponentType<P>) {
  const builder = (
    props: any
  ) => {
    const hid = HydrationData.storeProps(Component, props);
    return (
      <div>
        <script type="application/hydration-marker" data-hid={hid} />
        <Component {...props} />
      </div>
    );
  }
  builder.displayName='withHydro'
  return builder;
} 
