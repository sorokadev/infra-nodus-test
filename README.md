# Statement Manager - Full-Stack Application

A modern full-stack application for managing and filtering text statements with a clean, responsive UI and robust backend architecture.

## 🚀 Features

### Core Functionality
- **Text Splitting**: Submit large text blocks and automatically split them into smaller statements (max 280 characters)
- **Statement Management**: 
  - View all statements in a clean, organized list
  - Add new statements manually
  - Remove specific statements
  - Filter statements by keyword search
- **Tagging System**: Add, edit, and remove tags for each statement
- **Persistent Storage**: Data is stored locally using JSON file storage

### Technical Features
- **Modern UI/UX**: Beautiful gradient design with hover effects and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Search**: Instant filtering as you type
- **Modal Dialogs**: Clean tag editing interface
- **Error Handling**: Comprehensive error management and user feedback

## 🏗️ Architecture

The application follows a clean monorepo structure with clear separation of concerns:

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── services/       # API communication layer
│   │   └── App.jsx         # Main application component
│   └── package.json
├── server/                 # Express.js backend
│   ├── controllers/        # HTTP request handlers
│   ├── routes/            # API route definitions
│   ├── services/          # Business logic layer
│   ├── models/            # Data structure definitions
│   └── index.js           # Server entry point
├── shared/                # Shared code between frontend/backend
│   ├── constants.js       # Shared constants
│   └── types.js           # Type definitions
└── package.json           # Root package with development scripts
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **CSS-in-JS** - Inline styles for component styling

### Backend
- **Express.js** - Web framework
- **lowdb** - Lightweight JSON database
- **CORS** - Cross-origin resource sharing
- **nodemon** - Development server with auto-reload

### Development Tools
- **concurrently** - Run multiple npm scripts simultaneously
- **ES Modules** - Modern JavaScript module system

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd infra-nodus-test
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```

This will start both the frontend (port 5173) and backend (port 3001) servers concurrently.

## 🚀 Usage

### Development Scripts

From the root directory:

```bash
npm run dev          # Start both client and server
npm run dev:client   # Start only the frontend
npm run dev:server   # Start only the backend
```

### API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/statements` - Get all statements (with optional query parameter for filtering)
- `POST /api/statements/split` - Split large text into multiple statements
- `POST /api/statements` - Add a single statement
- `DELETE /api/statements/:id` - Remove a statement
- `PATCH /api/statements/:id/tags` - Update tags for a statement

### Using the Application

1. **Adding Statements**:
   - Use "Add as single statement" for individual statements
   - Use "Split text" for large text blocks that will be automatically divided

2. **Managing Statements**:
   - View all statements in the main list
   - Use the search bar to filter by keywords
   - Click "Edit tags" to manage statement tags
   - Click "Delete" to remove statements

3. **Tagging System**:
   - Add multiple tags per statement
   - Tags are displayed as colored badges
   - Edit tags through the modal interface

## 📁 Project Structure

### Frontend Components

- **`StatementForm`**: Form for adding new statements or splitting text
- **`StatementList`**: Displays all statements with actions
- **`StatementFilter`**: Search and filter functionality
- **`TagEditor`**: Modal for editing statement tags

### Backend Services

- **`statementService`**: Core business logic for statement management
- **`StatementController`**: HTTP request handling
- **`statementRoutes`**: API route definitions

## 🔧 Configuration

### Environment Variables

The application uses default ports but can be configured:

- Frontend: `http://localhost:5173` (Vite default)
- Backend: `http://localhost:3001` (configurable via `PORT` environment variable)

### Database

The application uses `lowdb` with a JSON file (`server/db.json`) for data persistence. The database is automatically initialized with the required structure.

## 🎨 UI/UX Features

- **Modern Design**: Gradient backgrounds and smooth animations
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and focus states
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Empty States**: Helpful messages when no data is present

## 🚀 Deployment

### Frontend Deployment
The React app can be built and deployed to any static hosting service:

```bash
cd client
npm run build
```

### Backend Deployment
The Express server can be deployed to any Node.js hosting platform:

```bash
cd server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Built with ❤️ using React, Express.js, and modern web technologies**
