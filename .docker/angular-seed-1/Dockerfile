FROM node:16.13.1

RUN npm install --global npm@8.3.0 --save-exact &&\
    npm install --global @angular/cli@13.1.2 --save-exact &&\
    useradd --user-group --create-home --shell /bin/false app

ARG PROJECT_NAME
ARG PROJECT_FOLDER
ARG SEED_TYPE
ENV ANGULAR=/home/angular

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
