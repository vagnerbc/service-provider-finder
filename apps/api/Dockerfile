FROM node:22-alpine AS base
WORKDIR /workspace
COPY package*.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
COPY packages/shared/package.json packages/shared/package.json
RUN npm install

FROM base AS development
COPY . .
EXPOSE 3333

FROM base AS build
COPY . .
RUN npm run build --workspace @faxinal-conectado/api

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /workspace/node_modules ./node_modules
COPY --from=build /workspace/apps/api/dist ./dist
COPY apps/api/package.json ./package.json
EXPOSE 3333
CMD ["node", "dist/main.js"]
