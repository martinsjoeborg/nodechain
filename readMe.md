För att starta servrarna: 

npm run node-1,
npm run node-2,
npm run node-3

Endpoints för att se blockkedjan från alla noder men är inte synkroniserade (get):

http://localhost:3001/api/v1/blockchain,
http://localhost:3002/api/v1/blockchain,
http://localhost:3003/api/v1/blockchain,

Endpoint för att lägga till data i pendingList (post):

http://localhost:3001/api/v1/createLicence/broadcast,

tex med formatet:

{
    "name": "Martin Sjöborg"
}

Endpoint för att mine'a ett nytt block (get):

http://localhost:3001/api/v1/blockchain/mine-block

Endpoint för att lägga till en ny nod i nätverket (post):

http://localhost:3001/api/v1/node,

tex med formatet:

{
    "nodeUrl": "http://localhost:3003"
}

Endpoint för att ge den nya noden den korrekta kopian av längsta befintliga kedja (get):

http://localhost:3003/api/v1/consensus, använd den port till den nyligen tillagda noden.