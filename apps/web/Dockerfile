FROM node:22-alpine AS base
WORKDIR /workspace
COPY package*.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
COPY packages/shared/package.json packages/shared/package.json
RUN npm install

FROM base AS development
COPY . .
EXPOSE 5173

FROM base AS build
COPY . .
RUN npm run build --workspace @faxinal-conectado/web

FROM nginx:1.27-alpine AS production
COPY --from=build /workspace/apps/web/dist /usr/share/nginx/html
EXPOSE 80
