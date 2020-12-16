export let MOCK_DASHBOARD = {
  sales: [{
      description: 'Venta de consolas',
      date: '02-10-2020',
      amount: 250000,
      buysAssociated: [1, 2]},
    {
      description: 'Venta de consolas',
      date: '02-10-2020',
      amount: 25000,
      buysAssociated: [3]},
    {
      description: 'Venta de consolas',
      date: '02-10-2020',
      amount: 50000,
      buysAssociated: [3]},
    {
      description: 'Venta de consolas',
      date: '02-10-2020',
      amount: 75000,
      buysAssociated: [4, 5]},
    {
      description: 'Venta de consolas',
      date: '02-10-2020',
      amount: 100000,
      buysAssociated: [6]},
  ],
  buys: [{
      id: 1,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '1',
      amount: 150000,
    status: 'FINISHED'
  },
    {
      id: 2,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '2',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 3,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '3',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 4,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '4',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 5,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '5',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 6,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '6',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 7,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '7',
      amount: 150000,
      status: 'FINISHED'
    },
    {
      id: 8,
      payment: 'EFECTIVO',
      date: '02-10-2020',
      approvedBudget: '7',
      amount: 150000,
      status: 'PENDING'
    },
  ],
  mails: [{
    message: 'Nuevo Presupuesto Generado',
    checked: true,
    date: '02-10-2020',},
    {
    message: 'Nuevo Presupuesto Generado',
    checked: false,
    date: '02-10-2020',
  }],
};
