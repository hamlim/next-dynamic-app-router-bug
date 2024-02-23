export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <header className="demo-header foo">Demo Header!</header>
      {children}
    </div>
  );
}
