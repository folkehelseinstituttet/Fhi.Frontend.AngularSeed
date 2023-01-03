# Fhi.Frontend.AngularSeed

Use Docker to create a new FHI Angular client with dependencies included (CSS, icons, etc)

## Clone and remove origin

1. Clone repo: `git clone https://github.com/folkehelseinstituttet/Fhi.Frontend.AngularSeed.git [your project name]`
2. Move to folder `[your project name]`, delete the folder `.git` and initialize a new git repo for your project (unless you already have a repo and cloned into a subfolder).

## Build new angular app from seed

1. Edit the project variables in `./.env`

   ```bash
   PROJECT_NAME=[your project web client name]
   PROJECT_FOLDER=[your project web client folder name]
   SEED_TYPE=[possible values are 1 or 2]
   ```

   >_Seed type 1: a basic seed with dependency @folkehelseinstituttet/style and a page template included_  
   >_Seed type 2: an extended seed with more dependencies and demo code included_  

2. Build docker image and start container  
   `docker-compose -f docker-compose.seed.yml up -d`

3. Copy code from docker container to the project folder  
   `docker cp [PROJECT_FOLDER]:/home/angular/[PROJECT_FOLDER] ./[PROJECT_FOLDER]/`

4. Remove container  
   `docker-compose -f docker-compose.seed.yml down`

## Start the new angular app

1. Delete the folder `./.docker`
2. Delete the files
   - `./docker-compose.seed.yml`
   - `./README.md` (or edit it to suit your project)
3. Build docker image and start container  
  `docker-compose up`

## Optional: stop using Docker

If you don't want to use Docker in your project, delete the file `./docker-compose.yml` and run `npm install`

---

## Coding style guide

When the new app is ready and the real job writing frontend code for the new product begins, we recommend using [Angular coding style guide](https://angular.io/guide/styleguide).

### Folder and file structure

[https://angular.io/guide/styleguide#overall-structural-guidelines](https://angular.io/guide/styleguide#overall-structural-guidelines)

```sh
src/
   app/
      core/
      shared/
         shared.module.ts
      views/
         forsiden/
            forsiden.module.ts
         login/
            login.module.ts
         shared/
            services/
```

#### The Core module

To keep the app module light, use the core module for components and other resources that are used once in an Angular application.

#### The Shared module

The shared module is made up of components and other resources that is reused in all other modules.
> NB! Only the top level shared folder contains a shared module.

#### Folders named "shared"

Multiple shared folders at different levels in the folder structure are allowed. The shared resources in any shared folder should only be imported in other files at the same level or deeper. In other words; place all shared folders as deep as possible in the file structure.

#### Lazy loaded features

A folder named `views` (this is a custom naming convention) contains all of the [lazy loaded folders](https://angular.io/guide/styleguide#lazy-loaded-folders).
Each lazy loaded folder (or feature) contains a routing component, its child components, and their related assets and modules.
The `views`-folder also contain a `shared`-folder for resources used by all lazy loaded features.

### Typescript aliases for better import statements

We use typescript aliases to create better import statements in the application. Easier to read, easier to move files and folders.
