import { button } from "@/styles/button.css";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <button className={
        button({
            size: "large"
        })
    }>See</button>
    </main>
  );
}
