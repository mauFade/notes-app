FROM node:alpine
WORKDIR ./app
COPY package.json ./
COPY yarn.lock ./ 
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY ./ ./
RUN yarn
RUN yarn build
EXPOSE 3003
CMD ["npm", "start"]