# AI Content Scheduler and Generator Frontend

This is the frontend for the AI Content Scheduler and Generator project. It provides a user interface for generating content, scheduling posts, and viewing analytics.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Content generation using AI
- Post scheduling
- Analytics dashboard
- Responsive design using shadcn/ui components

## Technologies Used

- React
- shadcn/ui (UI component library)
- Fetch API for backend communication

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/ai-content-scheduler-frontend.git
   ```

2. Navigate to the project directory:
   ```
   cd ai-content-scheduler-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

1. **Content Generation**: Click the "Generate Content" button on the Content Generator component to create new content using AI.
2. **Scheduling**: Use the Scheduler component to create and view content schedules.
3. **Analytics**: View engagement rates and total posts in the Analytics component.

## Project Structure

```
src/
├── components/
│   ├── ContentGenerator.js
│   ├── Scheduler.js
│   └── Analytics.js
├── App.js
└── index.js
```

- `App.js`: Main component that renders all other components
- `components/`: Directory containing individual feature components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
