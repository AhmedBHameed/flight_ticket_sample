import {Request, Response} from 'express';
import {readFileSync} from 'fs';
import hbs from 'handlebars';
import { resolve } from 'path';
import puppeteer from 'puppeteer';

const generateTicketController = async (req: Request, res: Response) => {
  // Prepare the PDF Generation schema.
  const generation = {
    html: 'template.html',
    renderAnnotations: false,
  };

  try {
    // Read the HTML template from disk.
    const template = readFileSync('views/template.hbs', {encoding: 'utf-8'});
    const html = hbs.compile(template);

    // Pack the data in a multipart request.

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(
      html({
        title: 'Testing',
      }),
      {waitUntil: 'networkidle0'}
    );

    const buffer = await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: {
        left: '15px',
        top: '15px',
        right: '15px',
        bottom: '15px',
      },
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', buffer.byteLength);
    res.setHeader('Content-Description', 'File Transfer');
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.end(buffer);
  } catch (error) {
    res.send(error);
  }
};

export default generateTicketController;
