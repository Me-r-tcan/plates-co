const deliveryCosts = {
  min: {
    deliveryCost: 4.95,
    amount: 50,
  },
  mid: {
    deliveryCost: 2.95,
    amount: 90,
  },
  max: {
    deliveryCost: 0,
    amount: 90,
  },
};

function calculateDeliveryCost(amount) {
  if (amount < deliveryCosts.min.amount) {
    return deliveryCosts.min.deliveryCost;
  }
  if (amount >= deliveryCosts.min.amount && amount < deliveryCosts.mid.amount) {
    return deliveryCosts.mid.deliveryCost;
  }

  if (amount >= deliveryCosts.max.amount) {
    return deliveryCosts.max.deliveryCost;
  }
}

exports.calculateDeliveryCost = calculateDeliveryCost;
