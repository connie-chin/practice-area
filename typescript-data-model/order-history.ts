interface Order {
  quantity: number;
  total: string;
  orderNumber: string;
  orderDate: string;
  deliveryDate: string;
  returnWindowClose: string;
  itemName: string;
}

const orderHistory: Order[] = [
  {
    quantity: 1,
    total: '$34.00',
    orderNumber: '114-3941689-8772232',
    orderDate: 'August 4, 2020',
    deliveryDate: 'August 8, 2020',
    returnWindowClose: 'September 7, 2020',
    itemName: 'JavaScript for impatient programmers',
  },
  {
    quantity: 1,
    total: '$44.53',
    orderNumber: '113-9984268-1280257',
    orderDate: 'July 19, 2020',
    deliveryDate: 'July 20, 2020',
    returnWindowClose: 'August 19, 2020',
    itemName: 'The Timeless Way of Building',
  },
  {
    quantity: 1,
    total: '$17.22',
    orderNumber: '114-2875557-9059409',
    orderDate: 'July 4, 2020',
    deliveryDate: 'July 7, 2020',
    returnWindowClose: 'August 5, 2020',
    itemName:
      'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
  },
  {
    quantity: 2,
    total: '$138.93',
    orderNumber: '113-2883177-2648248',
    orderDate: 'July 3, 2020',
    deliveryDate: 'July 5, 2020',
    returnWindowClose: 'August 4, 2020',
    itemName: 'GameCubeController- Super Smash Bros. Edition(Nintendo Switch',
  },
];
// or if want to get specific, look at the differences in orders and build interfaces from that. can do an interface for item and an interface for order with diff props.
