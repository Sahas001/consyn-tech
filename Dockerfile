FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Create custom nginx config
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    \
    # Gzip compression \
    gzip on; \
    gzip_types text/plain text/css text/xml text/javascript \
               application/x-javascript application/xml+rss \
               application/javascript; \
    \
    # Cache static files \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 30d; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # SPA routing \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Copy website files
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
