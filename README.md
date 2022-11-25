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

## Optional: jettison Docker

If you don't want to use Docker in your project, delete the file `./docker-compose.yml` and run `npm install`
