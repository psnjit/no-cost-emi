export function calculateNoCostEMI(amount, ROI, time, processingFee, GST) {
  // Convert all inputs to numbers to avoid unexpected results
  amount = Number(amount);
  ROI = Number(ROI);
  time = Number(time);
  processingFee = Number(processingFee);
  GST = Number(GST);

  // Step 1: Calculate Interest (Deducted from the Amount)
  let interest = (amount * ROI * time) / (12 * 100);

  // Step 2: Calculate GST on Interest
  let gstOnInterest = (interest * GST) / 100;

  // Step 3: Calculate Processing Fee including GST
  let processingFeeWithGST = processingFee + (processingFee * GST) / 100;

  // Step 4: Calculate Total Cost
  let totalCost = amount + gstOnInterest + processingFeeWithGST;

  // Output Results
  return {
    totalCost: totalCost.toFixed(2),
    extraCost: (processingFeeWithGST + gstOnInterest).toFixed(2),
  };
}
