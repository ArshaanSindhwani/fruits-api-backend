const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`Simple API listening on port ${port}`);
})