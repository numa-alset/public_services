# Use the official Node.js image as the base image
FROM node:10.16.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY public ./
COPY src ./
COPY package.json ./

# Install the application dependencies
RUN npm install --force --legacy-peer-deps

# Build the React application
RUN npm run build --force --legacy-peer-deps

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]