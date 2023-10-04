# cfa-notes

## Setup Git

```bash
echo "# cfa-notes" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/aaron-san/cfa-notes.git
git push -u origin main
```

heroku login
heroku open --app cfa-notes (open app in browser)
heroku logs --tail --app cfa-notes

## Deployment

### 👇 Create a Heroku account

1. Register and add payment information 💳
2. Link to Github repository
3. If you have dotenv variables in your app, make sure dotenv is a dependency in the _packages.json_ file, ⚠️ **_not_** a dev-dependency. In the Heroku project dashboard, go to **Setting** tab. Select **Config Vars**. Add config variables as key-value pairs (e.g., PORT=3000 in .env file ➡️ KEY: PORT, VALUE: 3000 in Heroku Config Vars).
4. Add Procfile to project root directory. A Procfile is a file with no extension and should contain `web:npm start`

- express => web framework for create server and writing routes
- mongoose => ODM for connecting to and sending queries to a mongo database
- method-override => allows us to swap the method of a request based on a URL query
- ejs => our templating engine
- dotenv => will allow us to use a `.env` file to define environmental variables we can access via the `process.env` object
- morgan => logs details about requests to our server, mainly to help us debug

# Remove node_modules

npx rimraf node_modules
rimraf node_modules (after npm i -g rimraf)

# 👇️ clean npm cache

npm cache clean --force

# 👇️ install packages

npm install
