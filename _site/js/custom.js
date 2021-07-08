// ************************
// Custom Stuff
// ************************

/**
 * Obfuscate the email address within an html element.
 * @param elementID: string representing the id of the element.
 * 
 * Obfuscate email address - https://stackoverflow.com/questions/23002711/how-to-show-email-addresses-on-the-website-to-avoid-spams
 */
const obfuscateEmailAddress = (elementId) => {
    let user = '&#119;&#116;&#117;&#102;&#116;&#115;&#046;&#049;';
    let domain = '&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;';
    let emailElement = document.getElementById(elementId);
    let emailAddress = user + '@' + domain;
    
    // Set the Human-Readable email address to the encoded version, as it will be translated by the browser.
    emailElement.innerHTML = emailAddress;
    
    // Reserve the plain-text version for clicks only.
    emailElement.addEventListener('click', () => {
      emailElement.setAttribute('href', 'mailto:' + emailElement.innerHTML);
    });
  }
  obfuscateEmailAddress('header-email');
  obfuscateEmailAddress('footer-email');
  
  /**
   * Obfuscate the phone number within an html element.
   * @param elementID: string representing the id of the element.
   */
  const obfuscatePhoneNumber = (elementID) => {
    const phone = '&#052;&#055;&#056;&#045;&#053;&#052;&#050;&#045;&#051;&#050;&#050;&#048;';
    let phoneElement = document.getElementById(elementID);
    phoneElement.innerHTML = phone;
  
    // Handle the click of the element.
    phoneElement.addEventListener('click', () => {
      phoneElement.setAttribute('href', 'tel:' + phoneElement.innerHTML);
    });
  }
  
  // Obfuscate teh phone number in the header and footer.
  obfuscatePhoneNumber('header-phone');
  obfuscatePhoneNumber('footer-phone');