export const exampleBook =
  [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ];

  //https://648b5cb117f1536d65eaddf2.mockapi.io/contacts/:endpoint

//{
//  "username": "$internet.userName",
//  "knownIps": ["$internet.ip", "$internet.ipv6"],
//  "profile": {
//    "firstName": "$name.firstName",
//    "lastName": "$name.lastName",
//    "staticData": [100, 200, 300]
//  }
//}

//Enable/disable endpoints and customize response JSON.
//
//By default Mockapi will return either a list of items or a single item depending on the request. To define more complex response, provide JSON template. You can reference Faker.js methods using `$`.
//
//$mockData - refers to the actual data stored in DB.
//$count - refers to the number of records stored in DB.

//$mockData

//{
//  "requestId": "$datatype.uuid",
//  "items": "$mockData",
//  "count": "$count",
//  "anyKey": "anyValue"
//}