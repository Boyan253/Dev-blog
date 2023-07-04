const contentful = require('contentful')

console.log('here');
var client = contentful.createClient({
    space: 'd2r7x1sflies',
    accessToken: 'arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw',
});

client.getEntries().then(function (entries) {
    console.log('here');
    entries.items.forEach(function (entry) {
        if (entry.fields.companyName) {
            console.log(entry.fields.logo.fields.file.url);
        }
    });
});