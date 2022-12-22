import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: req.body.email,
      from: process.env.NEXT_PUBLIC_SENDGRID_SENDER,
      subject: 'Hiretable Services',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Hiretable Landing</title>
        <meta name="description" content="Hiretable Landing">
        <meta name="author" content="Phuoc">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.firstName} ${req.body.lastName}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Price:</p>
              <p>${req.body.price}</p>
              <p>Locations:</p>
              <p>${req.body.locationCount}</p>
              <p>Phone Number:</p>
              <p>${req.body.phone}</p>
              <p>Yelp URL:</p>
              <p>${req.body.url}</p>
              </div>
              </div>
      </body>
      </html>`
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
