# Use node:18-alpine as base image
FROM node:18-alpine as base

# Set working directory
WORKDIR /home/node/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY . .

# Build the application
RUN yarn build

# Start a new stage for production
FROM nginx:alpine as production

# Copy the build output from the previous stage
COPY --from=base /home/node/app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf