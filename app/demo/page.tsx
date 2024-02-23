import "./header.css";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function DemoPage() {
  await sleep(2000);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
