#use the base image from docker hub

FROM node:20-alpine

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json files
COPY package*.json ./

#install dipendencies
RUN npm install

#copy the rest of application files
COPY . .

#expose the port your app will run on
EXPOSE 5173

#start the application
CMD [ "npm","run","dev" ]