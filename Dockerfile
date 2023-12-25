FROM node:14-alpine AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /react-app

# Cache and Install dependencies
COPY  ./package*.json /react-app
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]