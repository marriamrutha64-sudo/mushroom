# ammu-elite-bags

## Project Overview
The ammu-elite-bags project is a full-stack application designed to manage and showcase a variety of bags. It consists of a frontend built with React and a backend powered by Node.js and Express.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **src/components**: Contains reusable React components.
- **src/pages**: Contains page components that define different views of the application.
- **src/services/api.ts**: Handles API calls to the backend.
- **src/types**: Contains TypeScript types and interfaces.
- **src/main.tsx**: Entry point for the React application.
- **package.json**: Configuration file for frontend dependencies and scripts.
- **tsconfig.json**: TypeScript configuration for the frontend.

### Backend
- **src/config**: Configuration files for the backend, including database settings.
- **src/controllers**: Contains business logic for handling requests.
- **src/middleware**: Middleware functions for request handling.
- **src/models**: Database schema definitions.
- **src/routes**: Route definitions mapping endpoints to controllers.
- **src/services**: Business logic and model interaction.
- **src/types**: TypeScript types and interfaces for the backend.
- **src/server.ts**: Entry point for the backend application.
- **package.json**: Configuration file for backend dependencies and scripts.
- **tsconfig.json**: TypeScript configuration for the backend.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ammu-elite-bags
   ```

2. **Install dependencies**:
   - For the frontend:
     ```
     cd frontend
     npm install
     ```
   - For the backend:
     ```
     cd ../backend
     npm install
     ```

3. **Environment Variables**:
   - Copy the `.env.example` file to `.env` and update the variables as needed.

4. **Run the applications**:
   - Start the backend server:
     ```
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```
     cd frontend
     npm start
     ```

## Usage
Once both the frontend and backend are running, you can access the application in your web browser at `http://localhost:3000` (or the port specified in your backend configuration).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.