import ClientEntrypoint from "../client-entrypoint";

export default async function EdgePage({
  searchParams: { theme },
}: {
  searchParams: { theme: "red" | "green" };
}) {
  theme = theme || "green";
  // next/dynamic for style loading:

  switch (theme) {
    case "red": {
      // @ts-expect-error
      await import("../styles-a.css");
      break;
    }
    case "green":
    default: {
      // @ts-expect-error
      await import("../styles-b.css");
      break;
    }
  }
  // @ts-ignore
  return (
    <div className={`theme-${theme}`}>
      <ClientEntrypoint theme={theme} />
    </div>
  );
}
