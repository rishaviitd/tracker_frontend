import NavBar from "./components/NavBar";
import { useState } from "react";
import FundamentalPage from "./pages/FundamentalPage"; // Import your pages here
import CollagePage from "./pages/CollagePage";
import ExpensesPage from "./pages/ExpensesPage";

export default function App() {
  const [tabName, setTabName] = useState("Fundamentals");

  const onTabChange = (newTab) => {
    setTabName(newTab);
  };

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">
        <div className="flex-grow text-gray-800">
          <NavBar onTabChange={onTabChange} />

          {/* Conditional rendering based on tabName */}
          {tabName === "Fundamentals" && <FundamentalPage tabName={tabName} />}
          {tabName === "Collage Stuff" && <CollagePage tabName={tabName} />}
          {tabName === "Expenses" && <ExpensesPage tabName={tabName} />}
        </div>
      </div>
    </>
  );
}
