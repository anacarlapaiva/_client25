import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Interests } from "./sections/Interests";
import { Areas } from "./sections/Areas";
import { Approach } from "./sections/Approach";
import { Scheduling } from "./sections/Scheduling";

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Interests />
        <Areas />
        <Approach />
        <Scheduling />
      </main>
      <Footer />
    </div>
  );
}

export default App;
