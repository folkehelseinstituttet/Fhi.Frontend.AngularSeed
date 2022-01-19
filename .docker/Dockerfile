FROM node:16.13.1 as angular-cli

RUN npm install --global npm@8.3.0 --save-exact &&\
    npm install --global @angular/cli@13.1.2 --save-exact &&\
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

RUN npm install bootstrap@5.1.3 --save-exact --package-lock-only &&\
    npm install @fortawesome/angular-fontawesome@0.10.0 --save-exact --package-lock-only &&\
    npm install @fortawesome/fontawesome-svg-core@1.2.36 --save-exact --package-lock-only &&\
    npm install @fortawesome/free-solid-svg-icons@5.15.4 --save-exact --package-lock-only &&\
    npm install @types/lodash-es@4.17.5 --save-exact --package-lock-only &&\
    npm install lodash-es@4.17.21 --save-exact --package-lock-only &&\
    npm install what-input@5.2.10 --save-exact --package-lock-only &&\
    npm install @folkehelseinstituttet/style@3.2.2 --save-exact --package-lock-only

FROM angular-seed-1 as angular-seed-2

RUN npm install @ng-bootstrap/ng-bootstrap@11.0.0 --save-exact --package-lock-only &&\
    npm install @angular/localize@13.1.2 --save-exact --package-lock-only


FROM angular-cli as angular-app

COPY package.json $ANGULAR/$PROJECT_FOLDER/
RUN chown -R app:app $ANGULAR/*
USER app

WORKDIR $ANGULAR/$PROJECT_FOLDER
RUN npm install

EXPOSE 4200

# Option "--poll" to make live reload work, more info here: https://github.com/moby/moby/issues/30105
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]
