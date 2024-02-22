import RedClientEntrypoint from "../RedClientEntrypoint";
import GreenClientEntrypoint from "../GreenClientEntrypoint";

export default function StaticPage({
  searchParams: { theme },
}: {
  searchParams: { theme: "red" | "green" };
}) {
  theme = theme || "green";
  console.log({ theme });
  switch (theme) {
    case "red":
      return <RedClientEntrypoint />;
    case "green":
    default:
      return <GreenClientEntrypoint />;
  }
}
