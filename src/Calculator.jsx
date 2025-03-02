import React, {useState} from "react";
import "./Calculator.css"; // Import the external CSS file
import { InputPanel } from "./InputPanel";
import { OutputPanel } from "./OutputPanel";

export const Calculator = () => {
  const [result, setResult]= useState({});
  return (
    <main className="calculator-main">
      <article>
        <h2 className="calculator-title">Is your No-Cost EMI really No Cost?</h2>
        <h4 className="calculator-description">
          No-cost EMIs often come with hidden charges and taxes that can surprise you.
          <div className="highlight">Discover the real cost before you commit!</div>
        </h4>
      </article>
      <section className="calculator-section">
        <InputPanel result={result} setResult={setResult}/>
        {result.amount && <OutputPanel result={result}/>}
      </section>
    </main>
  );
};