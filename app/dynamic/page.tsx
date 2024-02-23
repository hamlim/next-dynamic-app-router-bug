import ClientEntrypoint from "../client-entrypoint";

export default function DynPage({
  searchParams: { theme },
}: {
  searchParams: { theme: "red" | "green" };
}) {
  theme = theme || "green";
  // next/dynamic for style loading:
  // @ts-ignore
  return (
    <div className={`theme-${theme}`}>
      <ClientEntrypoint theme={theme} />
    </div>
  );
}
