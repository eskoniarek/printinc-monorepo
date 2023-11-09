# Use the official lightweight Node.js 20 image.
# https://hub.docker.com/_/node
FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json, package-lock.json/yarn.lock files.
COPY package.json ./
COPY yarn.lock ./

# Install production dependencies.
RUN yarn install --frozen-lockfile

# Copy local code to the container image.
COPY . .

# Build the application.
RUN yarn build

# Run the web service on container startup using the production build.
CMD ["yarn", "start"]

# The application's default port is 3000.
EXPOSE 8000
