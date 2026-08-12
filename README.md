# Lonch Frontend

The official frontend client for Lonch, a high-performance Platform as a Service (PaaS) designed for seamless application hosting. 
This repository serves as the user-facing web application that securely interfaces with the [Lonch Backend Architecture](https://github.com/iCoderabhishek/Lonch).

<video src="" 
   width="100%" autoplay loop muted playsinline></video>

## Links

- **Live Platform**: https://lonch.cloud/
- **Backend Repository**: https://github.com/iCoderabhishek/Lonch
- **Frontend Repository**: https://github.com/iCoderabhishek/client-lonch
- **Postman API Docs**: https://www.postman.com/iamabhishek-1310-s-team/workspace/lonch
- **Video Walkthrough**: https://www.youtube.com/@0bhishekk

## Overview

Built with Next.js 15 and React 19, this client provides a highly responsive, real-time deployment dashboard. It leverages a modern frontend stack to seamlessly handle project configurations, custom domains, and real-time Server-Sent Events (SSE) for build logs without taxing the client browser. 

### Key Features
- **Real-time Deployment Logs**: Streams live build logs directly from the backend via Server-Sent Events (SSE) so users can watch their Docker builds in real-time, exactly like Vercel.
- **Zero-Config UI**: An intuitive interface that automatically syncs inferred build configurations (Commands, Base Images) from the backend's auto-detector, allowing developers to easily override them on the fly.
- **Seamless Github Integrations**: Directly fetch repositories from Github, select branches, and initialize deployments with just two clicks.
- **Optimized Performance**: Heavily cached data fetching with React Query (`@tanstack/react-query`) to ensure instantaneous navigation between project dashboards and deployment histories.
- **Modern UI/UX**: Sleek, fully responsive dark-mode design powered by Tailwind CSS v4, shadcn/ui components, and Framer Motion for micro-animations.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui
- **State & Data Fetching**: Zustand, React Query
- **Icons & Animations**: Lucide React, Framer Motion
- **Package Manager**: bun / pnpm

## Local Development Setup

### Prerequisites
- Node.js (v20+) or Bun (v1+)
- pnpm or bun

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
Ensure you have configured the correct backend URL in your Docker environment variables.

## Contribution

Contributions are always welcome! Since this is part of a decoupled system:
1. Ensure any new API endpoints are tested against the [Lonch Backend](https://github.com/iCoderabhishek/Lonch).
2. Follow standard React/Next.js best practices.
3. Open a Pull Request with a clear description of the feature or fix.

## License

This project is licensed under the MIT License.
