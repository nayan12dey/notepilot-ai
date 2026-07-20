# NotePilot AI

NotePilot AI is a modern, responsive AI-powered note-taking and management application built with Next.js 16 (App Router). It offers a seamless experience for creating, organizing, and exploring notes with the help of artificial intelligence.

## ✨ Key Features

- **AI-Powered Note Generation:** Leverage AI to quickly generate, summarize, or enhance your notes.
- **Secure Authentication:** Robust user authentication (Login/Register) powered by `better-auth` with MongoDB integration.
- **Beautiful & Responsive UI:** Crafted with Tailwind CSS v4 and HeroUI v3, featuring a premium design, glassmorphism effects, and smooth transitions.
- **Rich Markdown Support:** View and format your notes using comprehensive Markdown rendering with `react-markdown`.
- **Note Management System:** Easily create, manage, and explore your notes seamlessly.
- **Modern Landing & Layout:** Includes beautifully designed landing pages (Features, Testimonials, FAQ) for an engaging user experience.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **UI & Styling:** [HeroUI v3](https://heroui.com/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [Better Auth](https://better-auth.com/)
- **Icons:** [Lucide React](https://lucide.dev/), React Icons
- **Utilities:** React Hook Form, React Query, React Markdown, Recharts, Axios

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun
- A MongoDB database (local or cloud)

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone <your-repo-url>
   cd notepilot-ai
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and configure your MongoDB connection string and Better Auth secrets.
   ```env
   # Example .env.local configuration
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_SECRET=your_secret_key
   # Add other required environment variables here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app`: Contains the Next.js App Router pages (Home, Login, Register, Note Management, AI Generator, etc.).
- `src/components`: Reusable UI components categorized by feature (Home, Auth, Note, Shared, etc.).
- `src/lib`: Utility functions, database configuration, and helpers.
- `public`: Static assets.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
