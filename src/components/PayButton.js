import React, { useEffect } from "react";

function DonateButton() {
  useEffect(() => {
    // Load the PayPal SDK script dynamically
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=J29BV2FFYUDQ8";
    script.async = true;

    script.onload = () => {
      // Initialize the PayPal Button
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            // Set up the donation amount and currency
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Change this to the desired donation amount
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            // Capture the payment and handle the donation confirmation
            return actions.order.capture().then(function (details) {
              alert("Donation completed successfully!");
            });
          },
        })
        .render("#paypal-button-container"); // Replace with the ID of your button container
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="paypal-button-container">
        <button>Send</button>
      </div>
    </div>
  );
}

export default DonateButton;
