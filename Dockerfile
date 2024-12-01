#Image Getting
From node:22.2

#Working Directory
WORKDIR /app

# COPY Files
COPY . .

#Install Packages
RUN npm install

#run the project
CMD ['node','app.js']
