import React, { useState } from "react";
import { calculateNoCostEMI } from "./utils";
import "./InputPanel.css";

const durations = [
  "3Months",
  "6Months",
  "9Months",
  "12Months",
  "15Months",
  "18Months",
  "21Months",
  "24Months"
];

export const InputPanel = ({result, setResult}) => {
    const [amount, setAmount]= useState("");
    const [time, setTime]= useState("");
    const [ROI, setROI]= useState("");
    const [processingFee, setProcessingFee]= useState("");
    const [GST, setGST]= useState("18");
    // Error state for validation messages
  const [errors, setErrors] = useState({
    amount: false,
    time: false,
    ROI: false,
    processingFee: false,
    GST: false,
  });

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
      };
      const handleTimeChange = (event) => {
        setTime(event.target.value.split("M")[0]);
      };
      const handleROIChange = (event) => {
        setROI(event.target.value);
      };
      const handleprocessingFee = (event) => {
        setProcessingFee(event.target.value);
      };
      const handleGST = (event) => {
        setGST(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const currentErrors= {};
        let flag= false;
        if(!amount) { currentErrors.amount=true; flag=true;}
        if(!time) {currentErrors.time=true; flag=true;}
        if(!ROI) {currentErrors.ROI=true; flag=true;}
        if(!processingFee) {currentErrors.amount=true; flag=true;}
        if(!GST) {currentErrors.GST=true; flag=true;}
        setErrors({...currentErrors});
        if(flag)
            {
                return;
            }
        const res= calculateNoCostEMI(amount, ROI, time, processingFee, GST);
        alert(JSON.stringify(res));
        setResult({amount: amount, ...res});
      };

      const handleReset = (event) => {
        setAmount("");
        setGST("");
        setProcessingFee("");
        setROI("");
        setTime("");
      };
      
  return (
    <form className="form-container" action="none">
      <div className="input-wrapper">
        <label className="label">Amount</label>
        <input
          className="input-field"
          type="number"
          name="amount"
          placeholder="Enter amount"
          min="0"
          value={amount}
          onChange={handleAmountChange}
        />
        {/* {errors.amount && <p className="error-message">Amount is required</p>} */}
      </div>

      <div className="input-wrapper">
        <label className="label">Duration</label>
        <div className="checkbox-wrapper">
          <div className="radio-group">
            {durations.map((duration) => (
              <label
                key={duration}
                className={`radio-label `}
              >
                <input type="radio" name="duration" value={duration} onChange={handleTimeChange}/>
                <span className="custom-radio"></span>
                {duration.replace("Months", " Months")}
              </label>
            ))}
          </div>
          {/* {errors.time && <p className="error-message">Duration is required</p>} */}
        </div>
      </div>

      <div className="input-wrapper">
        <label className="label">Rate of Interest</label>
        <input
          className="input-field"
          type="number"
          id="ROI"
          name="ROI"
          placeholder="Enter ROI (%)"
          min="0" max="100"
          value={ROI}
          onChange={handleROIChange}
        />
        <label className="label">%</label>
        {/* {errors.ROI && <p className="error-message">ROI must be between 1% and 50%</p>} */}
      </div>

      <div className="input-wrapper">
        <label className="label">Processing Fee</label>
        <input
          className="input-field"
          type="number"
          id="ProcessingFee"
          name="ProcessingFee"
          placeholder="Enter Processing Fee"
          min="0"
          value={processingFee}
          onChange={handleprocessingFee}
        />
        {/* {errors.processingFee && <p className="error-message">Processing Fee cannot be negative</p>} */}
      </div>

      <div className="input-wrapper">
        <label className="label">GST</label>
        <input
          className="input-field"
          type="number"
          id="GST"
          name="GST"
          placeholder="Enter GST (%)"
          min="0" max="100"
          value={GST}
          onChange={handleGST}
        />
        <label className="label">%</label>
      </div>
      {/* {errors.GST && <p className="error-message">GST must be between 0% and 28%</p>} */}

      <div className="button-group">
        <button className="button" type="submit" onClick={handleSubmit}>
          Calculate
        </button>
        <button className="button" type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};
