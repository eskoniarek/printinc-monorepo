import Widget0, { config as widgetConfig0 } from "./widgets/onboarding-flow/onboarding-flow"
import Page0, { config as routeConfig0 } from "./routes/product-media/page"

const LocalEntry = {
  identifier: "local",
  extensions: [
    { Component: Widget0, config: { ...widgetConfig0, type: "widget" } },
    { Component: Page0, config: { ...routeConfig0, type: "route",  path: "/product-media" } }
  ],
}

export default LocalEntry