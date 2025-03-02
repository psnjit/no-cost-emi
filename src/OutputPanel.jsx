import "./OutputPanel.css";

export const OutputPanel = ({ result }) => {
  return (
    <div className="output-container">
      <div>
        You pay with No Cost EMI{" "}
        <span className="result">{result.totalCost}</span>
      </div>
      <div>
        You pay without No Cost EMI{" "}
        <span className="result">{result.amount}</span>
      </div>
      <div>
        {"You pay "} 
        <span className="loss">{result.extraCost}</span>
        {" extra."} 
      </div>
    </div>
  );
};
