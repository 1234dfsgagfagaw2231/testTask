# Mini-app (React, Nodejs - Express, PosgreSQL)

## Get start

### Backend launch

1. Run next command
```sh
cd server
npm install
```
2. Make a .env file on server directory with next params: 
```sh
PORT=5000 //server port
DB_NAME=postgres //database name
DB_USER=postgres //database login
DB_PASSWORD=root //database password
DB_HOST=localhost //database host
DB_PORT=5432 //database port
DATABASE_URL=postgres://postgres:root@localhost:5432/postgres //database url
```
3. Migrate data
 ```sh
npm run migrate
```

5. Backend launch
```sh
npm run dev
```

### Frontend launch
```sh
cd client
npm install
npm start
```
