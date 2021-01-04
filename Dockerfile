FROM node:12 AS build
WORKDIR /app
COPY . ./
RUN npm ci && npm run build

FROM nginx:mainline-alpine
COPY --from=build ./app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]