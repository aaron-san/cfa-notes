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

## Deployment

??????? (Unsuccessful with Netlify and Vercel)
Make sure directory structure is standard and research again

``bash
npm i -g vercel
vercel

```
Select "Continue with GitHub"

```

- express => web framework for create server and writing routes
- mongoose => ODM for connecting to and sending queries to a mongo database
- method-override => allows us to swap the method of a request based on a URL query
- ejs => our templating engine
- dotenv => will allow us to use a `.env` file to define environmental variables we can access via the `process.env` object
- morgan => logs details about requests to our server, mainly to help us debug
