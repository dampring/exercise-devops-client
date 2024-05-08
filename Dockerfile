# Stage 1: Build React app
FROM node:14.21.3-bullseye as build-stage

# Set environment variables
ARG DEBIAN_FRONTEND=noninteractive
ARG PORT="80" 
ENV REACT_APP_API_URL="http://localhost:5000"
ENV SKIP_PREFLIGHT_CHECK=${SKIP_PREFLIGHT_CHECK:-true}
ENV PORT=${PORT}

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies and build the app
RUN rm .env && npm install && npm run build

# Stage 2: Serve static files using Nginx
FROM nginx:alpine

# Copy build files from the build stage to Nginx web server directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE $PORT

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
