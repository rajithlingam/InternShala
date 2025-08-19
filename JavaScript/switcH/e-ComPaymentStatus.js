function eComPaymentStatus(status) {
  switch (status) {
    case 'success':
      console.log("Payment received. Process order.");
      break;
    case 'pending':
      console.log("Waiting for payment confirmation.");
      break;
    case 'failed':
      console.log("Payment failed. Show retry option.");
      break;
    case 'cancelled':
      console.log("Order cancelled by user.");
      break;
    default:
      console.log("Unknown payment status.");
  }
}

eComPaymentStatus();