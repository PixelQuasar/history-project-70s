FROM node:18-alpine

EXPOSE 3443

WORKDIR /ai-retail-frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]
