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
FROM node:18-alpine

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install production dependencies
RUN yarn install --production

# Copy the .next directory from the previous stage
COPY --from=build /app/.next ./.next

# Copy the public directory from the previous stage (if you have one)
COPY --from=build /app/public ./public

# Start the application
CMD ["yarn", "start"]