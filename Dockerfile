# Step 1: Use an official Node image
FROM node:18

# Step 2: Create app directory
WORKDIR /app

# Step 3: Install app dependencies
COPY package*.json ./
RUN npm install


# Step 4: Bundle app source
COPY ..

# Step 5: Build app
RUN npm run build

# Step 6: Expose port
EXPOSE 8080

CMD ["npm", "run", "dev"]