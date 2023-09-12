// Invoice.js
import React from "react";
import jsPDF from "jspdf";

function Invoice({ transactionData }) {
  const generateInvoice = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Invoice", 10, 10);
    doc.text(`Transaction ID: ${transactionData.transactionId}`, 10, 20);
    doc.text(`Amount: $${transactionData.amount}`, 10, 30);
    doc.text(`Date: ${transactionData.date}`, 10, 40);
    doc.text(`Status: ${transactionData.status}`, 10, 50);

    // Save the PDF or display it in a new browser tab
    doc.save("invoice.pdf");
  };

  return (
    <div>
      <button onClick={generateInvoice}>Generate Invoice</button>
    </div>
  );
}

export default Invoice;
