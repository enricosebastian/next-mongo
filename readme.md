The new Next.js (13) MongoDB example is integrated with Typescript. Unfortunately for me, I am not as familiar with the language yet. This repository was created for those using the standard Next.js framework with only JavaScript-related files.

This is based off of the [tutorial](https://www.youtube.com/watch?v=mOvW3iheF14&t=560s) by Hamed Bahram.

## Things to note
* This application using the vanilla MongoDB library. No Mongoose features and the like.
* This uses the sample data provided by MongoDB. Specifically, this is using the `sample_mflix` database with all of its collections.

## How to install locally
1. Git clone the repo
1. Go to local repo directory
1. Run the command `npm init` to install all the necessary packages and libraries
1. Create your own `.env.local` file in the outermost layer of the folder directory (`./next-mongo`)
1. In the newly-created `.env.local` file, make sure you have these environments:
```
MONGODB_URI="<db_uri_string>"
NODE_ENV="DEV"
```
6. Run `npm run dev`, which is the designated run script in a developer environment
1. Test

## How to deploy (using Vercel)
1. Link the repo to the Vercel app
1. Create environmental variables, `MONGODB_URI` and `NODE_ENV`
1. Enter their string values respectively (`NODE_ENV` is expected to have the value `PROD`)
1. Deploy the application

## Where to get `MONDODB_URI` and `MONGODB_DB`?
[To be written]
