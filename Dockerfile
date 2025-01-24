FROM node:23
WORKDIR /app

COPY . .

RUN npm i pnpm --global
RUN pnpm install
RUN npx expo install

EXPOSE 8081

CMD ["npx", "expo", "start", "--web"]