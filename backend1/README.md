# chessplayed

## Overview

This is the backend for the ChessPlayed application. It provides APIs to manage chess games, players, and other related functionalities.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chessplayed.git
    cd chessplayed/backend1
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/chessplayed
    ```

## Running the Backend

1. Start the MongoDB server:
    ```sh
    mongod
    ```

2. Start the backend server:
    ```sh
    npm start
    ```

3. The backend server should now be running at `http://localhost:3000`.

## API Endpoints

- `GET /api/games` - Retrieve all chess games
- `POST /api/games` - Create a new chess game
- `GET /api/games/:id` - Retrieve a specific chess game by ID
- `PUT /api/games/:id` - Update a specific chess game by ID
- `DELETE /api/games/:id` - Delete a specific chess game by ID

## Running Tests

To run the tests, use the following command:
```sh
npm test