FROM node:16 AS base
WORKDIR /app
EXPOSE 3000
ENV NODE_ENV=DEVELOPMENT

FROM base AS build
COPY package*.json ./
RUN npm install
COPY . . 
FROM base AS final
COPY --from=build /app ./
CMD ["npm", "start"]