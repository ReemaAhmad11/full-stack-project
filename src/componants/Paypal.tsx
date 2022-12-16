// import { useEffect } from "react";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";
// import { Center, Box, Heading } from "@chakra-ui/react";

// // This values are the props in the UI
// const amount = "2";
// const currency = "USD";
// const style = { layout: "vertical" };

// // Custom component to wrap the PayPalButtons and handle currency changes
// const ButtonWrapper = ({ currency, showSpinner }: any) => {
//   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//   // This is the main reason to wrap the PayPalButtons in a new component
//   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//   useEffect(() => {
//     dispatch({
//       type: "resetOptions",
//       value: {
//         ...options,
//         currency: currency,
//       },
//     });
//   }, [currency, showSpinner]);

//   return (
//     <>
//       {showSpinner && isPending && <div className="spinner" />}
//       <PayPalButtons
//         // style={style}
//         disabled={false}
//         forceReRender={[amount, currency, style]}
//         fundingSource={undefined}
//         createOrder={(data, actions) => {
//           return actions.order
//             .create({
//               purchase_units: [
//                 {
//                   amount: {
//                     currency_code: currency,
//                     value: amount,
//                   },
//                 },
//               ],
//             })
//             .then((orderId) => {
//               // Your code here after create the order
//               return orderId;
//             });
//         }}
//         onApprove={function (data, actions: any) {
//           return actions.order.capture().then(function () {
//             // Your code here after capture the order
//           });
//         }}
//       />
//     </>
//   );
// };

// const Payment2 = () => {
//   return (
//     <Center p={6}>
//       <Box maxW={"500px"} w={"full"} boxShadow={"2xl"} rounded={"md"} p={30}>
//         <Heading
//           fontWeight={600}
//           fontSize={"3xl"}
//           lineHeight={"110%"}
//           color={"green"}
//           marginBottom={"5"}
//           pl={"140"}
//         >
//           المبلغ المستحق
//         </Heading>

//         <Heading
//           fontWeight={600}
//           fontSize={"2xl"}
//           lineHeight={"50%"}
//           color={"black"}
//           marginBottom={"10"}
//           pl={"162"}
//         >
//           100 SAR
//         </Heading>

//         <div style={{ maxWidth: "750px", minHeight: "200px" }}>
//           <PayPalScriptProvider
//             options={{
//               "client-id": "test",
//               components: "buttons",
//               currency: "USD",
//             }}
//           >
//             <ButtonWrapper currency={currency} showSpinner={false} />
//           </PayPalScriptProvider>
//         </div>
//       </Box>
//     </Center>
//   );
// };

// export default Payment2;
// import React from "react";

// function Paypal() {
//   return <div>Paypal</div>;
// }

// export default Paypal;
import React from 'react'

function Paypal() {
  return (
    <div>Paypal</div>
  )
}

export default Paypal