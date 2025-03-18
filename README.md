# Pokemon API MERN Stack Project

## Description

This project is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application fetches data from a public Pokémon API and stores selected Pokémon details in a MongoDB database. The frontend displays Pokémon in a card-style format, allowing users to browse, filter, and manage their Pokémon collection.

## Features

- Fetch Pokémon data from an external API and store relevant fields in MongoDB.
- RESTful API with Express.js and Node.js for handling data operations.
- React frontend that displays Pokémon like collectible cards.
- State management using Zustand (or Context API, if preferred).
- CRUD operations (Create, Read, Update, Delete) for Pokémon data.
- Search and filter functionality to find specific Pokémon.
- Responsive UI built with modern React best practices.

## Tech Stack

- **Frontend:** React, Zustand/Context API, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **API Fetching:** Axios or Fetch API
- **State Management:** Zustand or Context API

## Installation

### Clone the repository:

\`\`\`sh
git clone https://github.com/yourusername/pokemon-api-mern.git
cd pokemon-api-mern
npm install
\`\`\`

## Backend Setup

\`\`\`sh
cd server
npm install
\`\`\`

### Create a `.env` file and set up environment variables:

\`\`\`sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
POKEMON_API=https://pokeapi.co/api/v2/pokemon
\`\`\`

### Start the backend server:

\`\`\`sh
npm run dev
\`\`\`

## Frontend Setup

\`\`\`sh
cd client
npm install
npm start
\`\`\`

## API Routes

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | `/api/pokemon`     | Fetch all stored Pokémon       |
| GET    | `/api/pokemon/:id` | Fetch a specific Pokémon by ID |
| POST   | `/api/pokemon`     | Add a new Pokémon to the DB    |
| PUT    | `/api/pokemon/:id` | Update Pokémon details         |
| DELETE | `/api/pokemon/:id` | Remove a Pokémon by ID         |

## Future Enhancements

- Implement user authentication (JWT, OAuth).
- Add pagination for large datasets.
- Improve UI with animations and better styling.
- Implement a battle simulator feature.

## License

This project is open-source and available under the MIT License.

## Author

[Your Name] - [Your GitHub](https://github.com/yourusername)
