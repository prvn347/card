import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_100%_200px,#FF7757,transparent)]">
            <div></div>
          </div>
        </div>

      <Card />
      </div>
    </div>
  );
}

export default App;
