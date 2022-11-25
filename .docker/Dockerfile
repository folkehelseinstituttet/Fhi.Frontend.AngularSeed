FROM node:16.18.1 as angular-cli

RUN npm install --global npm@8.19.2 --save-exact &&\
    npm install --global @angular/cli@14.2.10 --save-exact &&\
    useradd --user-group --create-home --shell /bin/false app

ARG PROJECT_FOLDER
ENV ANGULAR=/home/angular


FROM angular-cli as angular-seed-1

ARG PROJECT_NAME
ARG SEED_TYPE

WORKDIR $ANGULAR

RUN mkdir $PROJECT_FOLDER && chown -R app:app $ANGULAR/*
USER app

RUN ng new $PROJECT_NAME --directory=$PROJECT_FOLDER --routing --style=scss --skip-install --skip-git

WORKDIR $ANGULAR/$PROJECT_FOLDER

RUN rm ./src/favicon.ico &&\
    rm ./src/assets/.gitkeep &&\
    rm ./src/app/app.component.scss &&\
    rm ./src/app/app.component.spec.ts

COPY angular-seed-$SEED_TYPE/src ./src/
COPY .editorconfig ./
COPY Dockerfile ./

RUN npm install bootstrap@5.2.0 --save-exact --package-lock-only &&\
    npm install @folkehelseinstituttet/style@3.11.0 --save-exact --package-lock-only &&\
    npm install @types/lodash-es@4.17.6 --save-exact --package-lock-only &&\
    npm install lodash-es@4.17.21 --save-exact --package-lock-only

FROM angular-seed-1 as angular-seed-2

RUN npm install @angular/localize@14.2.12 --save-exact --package-lock-only &&\
    npm install @ng-bootstrap/ng-bootstrap@13.1.1 --save-exact --package-lock-only &&\
    npm install @popperjs/core@^2.11.5 --save-exact --package-lock-only &&\
    npm install @ng-select/ng-select@9.0.2 --save-exact --package-lock-only


FROM angular-cli as angular-app

COPY package.json $ANGULAR/$PROJECT_FOLDER/
RUN chown -R app:app $ANGULAR/*
USER app

WORKDIR $ANGULAR/$PROJECT_FOLDER
RUN npm install

EXPOSE 4200

# Option "--poll" to make live reload work, more info here: https://github.com/moby/moby/issues/30105
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]
