import React, { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import Invoice from "./Invoice";

export default function Paypal() {
  const paypal = useRef();
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Donate and Save Lives",
                amount: {
                  currency_code: "USD",
                  value: 2.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert("Donation successfull. Thank you.");
          setTransactionData({
            transactionId: order.id,
            amount: order.purchase_units[0].amount.value,
            status: order.status,
            date: order.update_time,
          });
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div
        ref={paypal}
        style={{
          height: "140px",
          overflowY: "hidden",
        }}
      ></div>
      {transactionData && <Invoice transactionData={transactionData} />}
    </div>
  );
}
