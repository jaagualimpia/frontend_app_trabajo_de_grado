FROM node:20.10-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci 

COPY . /app

RUN npm run build

FROM node:20.10-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js


RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]