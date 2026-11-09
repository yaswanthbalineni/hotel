# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application files
COPY server.js ./
COPY public ./public

# Expose application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]