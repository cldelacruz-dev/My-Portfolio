# Use official Node.js runtime
FROM node:20.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install git
RUN apk add --no-cache git

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Run fetch.js first, then start React
CMD ["sh", "-c", "node fetch.js && npm start"]
