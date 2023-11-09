# Use the official Node.js 14 image as the parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your backend code into the container
COPY . .

# Build your application if required
# RUN yarn build # Uncomment if you have a build script in your package.json

# Expose the port your app runs on
EXPOSE 9000

# Command to run your app
CMD ["yarn", "start"] # Make sure this matches your actual start command
