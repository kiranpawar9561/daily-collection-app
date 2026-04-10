let customers = [];

export const setCustomers = (data) => {
  customers = data;
};

export const getCustomers = () => {
  return customers;
};

export const updateCustomer = (id, amount) => {
  customers = customers.map((c) => {
    if (c.id === id) {
      return {
        ...c,
        balance: parseFloat(c.balance) - parseFloat(amount),
      };
    }
    return c;
  });
};

export const getData = () => customers;
