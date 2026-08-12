# Build stage
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy dependency files first for better layer caching
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
COPY .env.prod .env.production
ENV NODE_ENV=production
RUN bun run build

# Production stage - smaller final image
FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["bun", "run", "server.js"]
