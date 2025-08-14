# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose Next.js port
EXPOSE 3000

# Set environment variables (optional, most will come from .env or docker-compose)
ENV NODE_ENV=production

# Build Prisma client and Next.js app
RUN npm run build

# Start the application
CMD ["npm", "start"]