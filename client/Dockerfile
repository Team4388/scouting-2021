FROM node:16.9.1-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN npm install
# COPY . ./
EXPOSE 3000
RUN chown -R node /app/node_modules
USER node
CMD [ "npm", "start"]
