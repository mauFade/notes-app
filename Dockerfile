FROM node:latest
WORKDIR ./app
COPY ./package.json ./
COPY prisma ./prisma/
RUN yarn
RUN yarn prisma generate
RUN yarn prisma migrate dev
COPY ./ ./
RUN yarn test
RUN yarn build
EXPOSE 3003
CMD ["npm", "start"]