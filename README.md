# Rock Paper Scissors Online Game

Welcome to the Rock Paper Scissors online game repository. This project allows players to enjoy a classic game of Rock Paper Scissors both offline and, in the future, online in real-time. The project is built using React for the frontend and Node.js for the backend.

![image](https://github.com/lasindu-ranasinghe/Rock-Paper-Scissor-Game/assets/116148700/2d4060bf-d23c-4660-862b-3bffead32a8b)


## Features

- **Offline Play**: Enjoy playing Rock Paper Scissors against a computer opponent.
- **Online Play (In Development)**: Real-time play between two users using WebSockets.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js
- **Real-time Communication**: WebSockets (In Development)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (v14 or higher)
- NPM or Yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/lasindu-ranasinghe/Rock-Paper-Scissor-Game.git
   cd Rock-Paper-Scissor-Game
   ```

2. **Install dependencies**:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

     or

     ```bash
     cd backend
     yarn install
     ```

   - For the frontend:

     ```bash
     cd ../frontend
     npm install
     ```

     or

     ```bash
     cd ../frontend
     yarn install
     ```

3. **Run the development servers**:

   - Start the backend server:

     ```bash
     cd backend
     nodemon index.js
     ```

     or

     ```bash
     cd backend
     yarn dev
     ```

   - Start the frontend server:

     ```bash
     cd ../frontend
     npm start
     ```

     or

     ```bash
     cd ../frontend
     yarn start
     ```

   The backend server should now be running on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
