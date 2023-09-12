import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();

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
    </div>
  );
}
