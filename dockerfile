FROM node:alpine

LABEL description="Profile page developed using MERN stack."

LABEL maintainer="sunilgaddi917@gmail.com"

WORKDIR /app/profile

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]
