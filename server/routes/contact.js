const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message cannot be empty'),
    // These are optional based on the form, but if they are present, we could validate
    body('company').optional(),
    body('country').optional(),
    body('phone').optional(),
    body('service').optional()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, company, country, phone, service } = req.body;

    try {
      // Create a transporter using nodemailer
      // The transport object will use SMTP, standard approach.
      let transporter = nodemailer.createTransport({
        service: 'gmail', // Change to your email provider
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
      });

      // Email message options
      let mailOptions = {
        from: `"${name}" <${email}>`, // sender address
        to: process.env.EMAIL_USER, // list of receivers
        subject: `New Contact Request from ${name} - ${company || 'Individual'}`, // Subject line
        text: `
          Name: ${name}
          Email: ${email}
          Company: ${company || 'N/A'}
          Country: ${country || 'N/A'}
          Phone: ${phone || 'N/A'}
          Service Interested In: ${service || 'N/A'}

          Message:
          ${message}
        `,
        html: `
          <h3>New Contact Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Country:</strong> ${country || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service Interested In:</strong> ${service || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Send mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  }
);

module.exports = router;
