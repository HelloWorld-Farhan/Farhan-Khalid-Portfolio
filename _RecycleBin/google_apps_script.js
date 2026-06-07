function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var email = data.email;
    var project = data.project;

    // 1. Email to YOU (Farhan) with the client's form submission
    var myEmail = "farhankhalid17968@gmail.com";
    var subjectToMe = "New Project Inquiry from " + name;
    var bodyToMe = "You have received a new project inquiry from your website!\n\n" +
                   "Name: " + name + "\n" +
                   "Email: " + email + "\n\n" +
                   "Project Summary:\n" + project;
                   
    MailApp.sendEmail({
      to: myEmail,
      subject: subjectToMe,
      body: bodyToMe,
      replyTo: email
    });

    // 2. Automated "Thank You" Reply to the CLIENT
    // Note: You can customize this text heavily!
    var subjectToClient = "Thank you for reaching out, " + name + "!";
    var bodyToClient = "Hi " + name + ",\n\n" +
                       "Thank you for contacting me regarding your project! I have received your message and will review your project summary shortly.\n\n" +
                       "Here is a little more about my process and how we can work together:\n\n" +
                       "1. Initial Review: I will review your project details (" + project.substring(0, 50) + "...).\n" +
                       "2. Consultation: We will schedule a quick call to discuss your goals, requirements, and timeline.\n" +
                       "3. Proposal: I will send you a detailed proposal and quote for the work.\n\n" +
                       "In the meantime, feel free to reply to this email if you have any additional details to share.\n\n" +
                       "Best regards,\n" +
                       "Farhan Khalid\n" +
                       "Developer & Tech Consultant\n" +
                       "https://github.com/HelloWorld-Farhan";

    MailApp.sendEmail({
      to: email,
      subject: subjectToClient,
      body: bodyToClient
    });

    // Return a success response back to the website
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Emails sent successfully!" }))
                         .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}
