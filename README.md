## Index

- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Commands](#commands)


## About

## Usage

### Installation

1. Clone the repository to your local machine: 
```
\$ git clone https://github.com/berzhavycha/Apartments-Rental-App.git
```
2. Navigate to the project directory:
```
\$ cd Apartments-Rental-App
```
3. Install dependencies: 
```
\$ cd client
\$ npm install 
\$ cd server 
\$ npm install 
```


### Commands
1. To run client: 
```
\$ cd client
\$ npm run dev
```
2. To run migrations: 
```
\$ npm run typeorm:run-migrations
```
2. To run seeds: 
```
\$ npm run run:seed
```
2. To run server: 
```
\$ cd server 
\$ npm run start:dev 
```

Make sure you have looked to the .env.example file in both client and server and assigned in your .env file in both client and server values for each of the environment variable.
