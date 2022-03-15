FROM nginx:latest

# remove log symlinks
#RUN rm /var/log/nginx/access.log /var/log/nginx/error.log

###############################################################################
#                                    DATA
###############################################################################

### add dummy HTML file

COPY dist /usr/share/nginx/html

### add config
COPY nginx_default.conf /etc/nginx/conf.d/default.conf

###############################################################################
#                                    START
###############################################################################
#ADD ./start.sh /usr/local/bin/start.sh
#RUN chmod +x /usr/local/bin/start.sh
#CMD [ "/usr/local/bin/start.sh" ]
