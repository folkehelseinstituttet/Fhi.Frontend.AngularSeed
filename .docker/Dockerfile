FROM node:16.13.1

RUN npm install --global npm@8.3.0 --save-exact &&\
    npm install --global @angular/cli@13.1.2 --save-exact &&\
    useradd --user-group --create-home --shell /bin/false app

ARG PROJECT_FOLDER
ENV ANGULAR=/home/angular

COPY package.json $ANGULAR/$PROJECT_FOLDER/
RUN chown -R app:app $ANGULAR/*

USER app
WORKDIR $ANGULAR/$PROJECT_FOLDER
RUN npm install

EXPOSE 4200

# Option "--poll" to make live reload work, more info here: https://github.com/moby/moby/issues/30105
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]
