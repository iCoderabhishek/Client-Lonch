# Lonch Frontend

The official frontend client for Lonch, a high-performance Platform as a Service (PaaS) designed for seamless application hosting. 
This repository serves as the user-facing web application that securely interfaces with the [Lonch Backend Architecture](https://github.com/iCoderabhishek/Lonch).

<video src="[INSERT_VIDEO_URL_HERE]" 
   width="100%" autoplay loop muted playsinline></video>

## Links

- **Live Platform**: https://lonch.cloud/
- **Backend Repository**: https://github.com/iCoderabhishek/Lonch
- **Video Walkthrough**: https://www.youtube.com/@0bhishekk

## Overview

Built with Next.js and React, this client provides a highly responsive, real-time deployment dashboard. It leverages a modern frontend stack to seamlessly handle project configurations, custom domains, and real-time Server-Sent Events (SSE) for build logs without taxing the client browser. 

### Key Features
- **Real-time Deployment Logs**: Streams live build logs directly from the backend via Server-Sent Events (SSE) so users can watch their Docker builds in real-time.
- **Zero-Config UI**: An intuitive interface that allows developers to easily override auto-detected build configurations (Commands, Base Images).
- **Optimized Performance**: Heavily cached data fetching with React Query (`@tanstack/react-query`).
- **Modern UI/UX**: Sleek, fully responsive dark-mode design powered by Tailwind CSS and Radix UI components (shadcn/ui).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **State & Data Fetching**: Zustand, React Query
- **Icons & Animations**: Lucide React, Framer Motion
- **Package Manager**: pnpm / bun

## Local Development Setup

### Prerequisites
- Node.js (v20+) or Bun
- pnpm or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iCoderabhishek/client-lonch.git
   cd client-lonch
   bun install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root directory. Configure `NEXT_PUBLIC_API_URL` to point to your backend API instance.
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
   ```

3. **Start the Development Server**
   ```bash
   bun dev
   ```
   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Run with Docker

You can easily spin up the frontend using Docker:

```bash
docker build -t lonch-frontend .
docker run -p 3000:3000 lonch-frontend
```

## Contribution

Contributions are always welcome! Since this is part of a decoupled system:
1. Ensure any new API endpoints are tested against the [Lonch Backend](https://github.com/iCoderabhishek/Lonch).
2. Follow standard React/Next.js best practices.
3. Open a Pull Request with a clear description of the feature or fix.

## License

This project is licensed under the MIT License.
