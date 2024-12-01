# Image Getting
FROM node:22.2

# Working Directory
WORKDIR /app

# Copy Files
COPY . .

# Install Packages
RUN npm install

# Run the project
CMD ["node", "app.js"]