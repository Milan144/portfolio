# Use node:18-alpine as base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY . .

# Build the application
RUN yarn build

# Start a new stage for production
FROM httpd:2.4

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/local/apache2/htdocs/