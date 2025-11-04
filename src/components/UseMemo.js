import React, { useMemo } from "react";

/**
 * Shows how useMemo caches derived/computed values from props.
 * We also compute a derived label to demonstrate memoization.
 */
export default function UseMemo({ counter, longCalcResult }) {
  const label = useMemo(() => {
    if (counter === 0) return "Start clicking!";
    if (counter < 5) return "Warming up…";
    if (counter < 10) return "Rolling!";
    return "Zooming!!";
  }, [counter]);

  return (
    <div className="card" id="usememo-card">
      <h2>useMemo Output</h2>
      <p>
        <strong>Counter label:</strong> <span data-test-id="label">{label}</span>
      </p>
      <p>
        <strong>Heavy calc (memoized):</strong>{" "}
        <span data-test-id="heavy-value">{longCalcResult}</span>
      </p>
    </div>
  );
}
