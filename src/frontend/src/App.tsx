import { useState } from "react";
import DashboardScreen from "./pages/DashboardScreen";
import IntroScreen from "./pages/IntroScreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState<"intro" | "dashboard">(
    "intro",
  );

  const navigateToDashboard = () => {
    setCurrentScreen("dashboard");
  };

  const navigateToIntro = () => {
    setCurrentScreen("intro");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {currentScreen === "intro" ? (
        <IntroScreen onNavigate={navigateToDashboard} />
      ) : (
        <DashboardScreen onNavigateBack={navigateToIntro} />
      )}
    </div>
  );
}

export default App;
