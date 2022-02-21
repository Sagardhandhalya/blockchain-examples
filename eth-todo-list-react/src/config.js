export const TODO_LIST_ADDRESS = '0x7D93A373a57cc66050404c931659ad60f702657B'

export const TODO_LIST_ABI = [{
    constant: true,
    inputs: [
      [Object]
    ],
    name: 'tasks',
    outputs: [
      [Object],
      [Object],
      [Object]
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8d977672'
  },
  {
    constant: true,
    inputs: [],
    name: 'taskCount',
    outputs: [
      [Object]
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb6cb58a5'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
    constant: undefined
  },
  {
    anonymous: false,
    inputs: [
      [Object],
      [Object],
      [Object]
    ],
    name: 'TaskCreated',
    type: 'event',
    signature: '0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660',
    constant: undefined,
    payable: undefined
  },
  {
    anonymous: false,
    inputs: [
      [Object],
      [Object]
    ],
    name: 'TaskCompleted',
    type: 'event',
    signature: '0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1',
    constant: undefined,
    payable: undefined
  },
  {
    constant: false,
    inputs: [
      [Object]
    ],
    name: 'createTask',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x111002aa'
  },
  {
    constant: false,
    inputs: [
      [Object]
    ],
    name: 'toggleCompleted',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x455f5024'
  }
]