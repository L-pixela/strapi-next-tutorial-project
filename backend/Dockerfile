# Multi-stage Dockerfile for Strapi Backend

# Stage 1: Dependencies
FROM node:20-alpine AS dependencies

# Install dependencies only when needed
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable Corepack for Yarn 4
RUN corepack enable

# Copy package files
COPY package.json yarn.lock* .yarnrc.yml* ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Stage 2: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Enable Corepack for Yarn 4
RUN corepack enable

# Copy dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/.yarn ./.yarn
COPY --from=dependencies /app/.yarnrc.yml* ./

# Copy application files
COPY . .

# Build Strapi admin panel
ENV NODE_ENV=production
RUN yarn build

# Stage 3: Runner
FROM node:20-alpine AS runner

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Enable Corepack for Yarn 4
RUN corepack enable

# Set to production environment
ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 strapi

# Copy necessary files from builder
COPY --from=builder --chown=strapi:nodejs /app/package.json ./package.json
COPY --from=builder --chown=strapi:nodejs /app/yarn.lock* ./
COPY --from=builder --chown=strapi:nodejs /app/.yarnrc.yml* ./
COPY --from=builder --chown=strapi:nodejs /app/.yarn ./.yarn
COPY --from=builder --chown=strapi:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=strapi:nodejs /app/dist ./dist
COPY --from=builder --chown=strapi:nodejs /app/public ./public
COPY --from=builder --chown=strapi:nodejs /app/config ./config
COPY --from=builder --chown=strapi:nodejs /app/database ./database
COPY --from=builder --chown=strapi:nodejs /app/src ./src

# Create necessary directories with proper permissions
RUN mkdir -p /app/.tmp /app/public/uploads && \
    chown -R strapi:nodejs /app

# Switch to non-root user
USER strapi

# Expose Strapi port
EXPOSE 1337

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start Strapi in development mode
CMD ["yarn", "develop"]
