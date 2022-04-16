// const fs = require('fs');
// const axios = require('axios');
// const FormData = require('form-data');
// const hbs = require('handlebars');

//   const html = hbs.compile(template);

// // Prepare the PDF Generation schema.
// const generation = {
//   baseUrl: 'https://www.google.com',
//   verificationId: 'ABC123',
//   email: 'ahmedbazy@gmail.com',
// };

// // Read the HTML template from disk.
// const template = fs.readFileSync('./views/template.html', { encoding: 'utf8' });

// const renderHtml = html({
//     baseUrl: 'https://www.google.com',
//     verificationId: 'ABC123',
//     email: 'ahmedbazy@gmail.com',
//   })

// // Pack the data in a multipart request.
// const body = new FormData();
// body.append('template.html', renderHtml, { filename: 'template.html' });
// body.append('generation', JSON.stringify(generation));

// (async () => {
// 	// Send the request to Processor.
// 	const response = await axios.post('http://localhost:5000/process', body, {
// 		headers: body.getHeaders(),
// 		responseType: 'stream',
// 	});
// 	// Save the result to a file on disk.
// 	await response.data.pipe(fs.createWriteStream('invoice.pdf'));
// })();