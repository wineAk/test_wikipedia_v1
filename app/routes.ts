import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/test_wikipedia_v1", "routes/layout.tsx", [
    index("routes/home.tsx"),
    route(":name", "routes/wikipedia.tsx"),
  ]),
] satisfies RouteConfig;
