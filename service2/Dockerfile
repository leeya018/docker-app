# Step 1: Use a base Node.js image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose the service port
EXPOSE 3000

# Step 6: Define the command to run the app
CMD ["node", "app.js"]
