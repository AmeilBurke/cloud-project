FROM node:lts-alpine AS dependencies
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./
RUN npm ci
RUN npx prisma generate

FROM node:lts-alpine AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm ci
RUN NODE_ENV=production npm run build

FROM node:lts-alpine AS production
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
COPY --chown=node --from=builder /app/next.config.js ./
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=builder /app/.next ./.next
COPY --chown=node --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD npm run start