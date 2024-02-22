import ClientEntrypoint from "../client-entrypoint";

export default function DynPage({ searchParams: { theme } }) {
  theme = theme || "green";
  // next/dynamic for style loading:
  // @ts-ignore
  return <ClientEntrypoint theme={theme} />;
}
