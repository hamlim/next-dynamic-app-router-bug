// import RedEntrypoint from "../RedEntrypoint";
// import GreenEntrypoint from "../GreenEntrypoint";

import { lazy } from "react";

let RedEntrypoint = lazy(() => import("../RedEntrypoint"));
let GreenEntrypoint = lazy(() => import("../GreenEntrypoint"));

export default function StaticPage({
  searchParams: { theme },
}: {
  searchParams: { theme: "red" | "green" };
}) {
  theme = theme || "green";
  return (
    <div className={`theme-${theme}`}>
      {(() => {
        switch (theme) {
          case "red":
            return <RedEntrypoint />;
          case "green":
          default:
            return <GreenEntrypoint />;
        }
      })()}
    </div>
  );
}
