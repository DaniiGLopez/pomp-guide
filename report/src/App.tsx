import { useState } from "react";
import type { ChangeEvent } from "react";

import { samplePlanFull } from "./data/samplePlanFull";
import type { PompPlan } from "./types/plan";
import { Report } from "./components/Report";

function App() {
  const [plan, setPlan] = useState<PompPlan>(samplePlanFull);
  const [error, setError] = useState<string | null>(null);

  function handleJsonUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const fileContents = reader.result;

        if (typeof fileContents !== "string") {
          throw new Error("The selected file could not be read.");
        }

        const parsedPlan = JSON.parse(fileContents) as PompPlan;

        setPlan(parsedPlan);
        setError(null);
      } catch (uploadError) {
        const message =
          uploadError instanceof Error
            ? uploadError.message
            : "The selected JSON file is invalid.";

        setError(message);
      }
    };

    reader.onerror = () => {
      setError("The selected file could not be read.");
    };

    reader.readAsText(file);
  }

  function restoreDemoPlan() {
    setPlan(samplePlanFull);
    setError(null);
  }

  return (
    <>
      <div
        className="pomp-top-bar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "12px 20px",
          background: "#ffffff",
          borderBottom: "1px solid #ddd5c8",
        }}
      >
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 16px",
            background: "#4c5c53",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Load plan JSON
          <input
            type="file"
            accept=".json,application/json"
            onChange={handleJsonUpload}
            style={{ display: "none" }}
          />
        </label>

        <button
          type="button"
          onClick={restoreDemoPlan}
          style={{
            padding: "10px 16px",
            background: "#ffffff",
            color: "#4c5c53",
            border: "1px solid #4c5c53",
            cursor: "pointer",
          }}
        >
          Restore demo
        </button>

        <button
          type="button"
          onClick={() => window.print()}
          style={{
            padding: "10px 16px",
            background: "#2b1200",
            color: "#ffffff",
            border: 0,
            cursor: "pointer",
          }}
        >
          Print report
        </button>

        <span style={{ marginLeft: "auto", fontSize: 13 }}>
          Viewing: {plan.person.full_name}
        </span>
      </div>

      {error && (
        <div
          className="pomp-top-bar"
          role="alert"
          style={{
            padding: "12px 20px",
            background: "#fff1ec",
            color: "#8b2f18",
            borderBottom: "1px solid #e8b8aa",
          }}
        >
          JSON error: {error}
        </div>
      )}

      <Report plan={plan} />
    </>
  );
}

export default App;
