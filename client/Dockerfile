# build
FROM node:alpine as build

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm ci --silent

COPY . .

RUN npm run build

# production
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]