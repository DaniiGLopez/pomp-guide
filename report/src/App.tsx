import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { PompPlan } from "./types/plan";
import { Report } from "./components/Report";

const SECURE_API_BASE = "https://secure.yourpomp.com";

function App() {
  const [clientId, setClientId] = useState("");
  const [plan, setPlan] = useState<PompPlan | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadPlan(id: string) {
    const cleanClientId = id.trim();

    if (!cleanClientId) {
      setError("Enter a client ID.");
      return;
    }

    setIsLoading(true);
    setError("");
    setPlan(null);

    try {
      const response = await fetch(
        `${SECURE_API_BASE}/api/client/${encodeURIComponent(cleanClientId)}`
      );

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(
          `Unable to load client (${response.status}): ${responseText}`
        );
      }

      const body = JSON.parse(responseText);
      const loadedPlan: PompPlan = body.snapshot ?? body;

      if (!loadedPlan?.client_id) {
        throw new Error("The client record did not contain a valid plan.");
      }

      setPlan(loadedPlan);

      const url = new URL(window.location.href);
      url.searchParams.set("client_id", cleanClientId);
      window.history.replaceState({}, "", url);
    } catch (loadError) {
      console.error("REPORT LOAD ERROR:", loadError);

      setError(
        loadError instanceof Error
          ? loadError.message
          : "Unable to load this report."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loadPlan(clientId);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlClientId = params.get("client_id");

    if (urlClientId) {
      setClientId(urlClientId);
      loadPlan(urlClientId);
    }
  }, []);

  if (plan) {
    return <Report plan={plan} />;
  }

  return (
    <main className="report-state">
      <h1>POMP Report Engine</h1>
      <p>Enter a client ID to generate the report.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="client-id">Client ID</label>

        <input
          id="client-id"
          type="text"
          value={clientId}
          onChange={(event) => setClientId(event.target.value)}
          placeholder="pomp_1784804503672_pqlq"
          autoComplete="off"
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading Report..." : "Generate Report"}
        </button>
      </form>

      {error && (
        <div className="report-error" role="alert">
          <strong>Report unavailable</strong>
          <p>{error}</p>
        </div>
      )}
    </main>
  );
}

export default App;