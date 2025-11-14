# stage 1 : builder 
FROM node:20-alpine AS builder
LABEL maintainer="next-shop-team"

# working directory
WORKDIR /app

# copy package.json and package-lock.json
# if dependencies in package.json don't change, this layer will be cached
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# build the application
RUN npm run build

# stage 2 : runnner
FROM node:20-alpine AS runner

# working directory
WORKDIR /app

# production environment setup
ENV NODE_ENV=production

# copy only necessary files from builder stage
COPY --from=builder /app/.next/standalone ./

# port number
EXPOSE 3000

# start the application
CMD ["node", "server.js"]
