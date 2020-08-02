FROM node:buster-slim
EXPOSE 3000
WORKDIR /root/
ADD index.js .
ADD package-lock.json .
ADD package.json .
RUN npm install
ENTRYPOINT ["node", "./index.js"]
