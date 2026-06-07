import fs from 'fs';
import path from 'path';

const script1_ProjectSwapper = `
<!-- project-swapper -->
<script>
  const projectList = [
    { title: "SpendWise", type: "Expense Tracker", img: "/SpendWise.png", link: "https://github.com/HelloWorld-Farhan/spendwise-expense-tracker" },
    { title: "WorkBit", type: "Task Management Platform", img: "/WorkBit.png", link: "https://github.com/HelloWorld-Farhan/task-manager-api" },
    { title: "DucatIndia", type: "Educational Courses Website", img: "/DucatIndia.png", link: "https://github.com/HelloWorld-Farhan/Educational_courses_Website" },
    { title: "ISLens", type: "AI-Powered Translator", img: "/ISLens.png", link: "https://github.com/HelloWorld-Farhan/ISLens" },
    { title: "FAMMED", type: "Agency Website", img: "/Fammed.png", link: "https://github.com/HelloWorld-Farhan/FAMMED-PROJECT" },
    { title: "ConvoSphere", type: "Social Platform", img: "/ConvoSphere.png", link: "https://github.com/HelloWorld-Farhan/Convo-Sphere" }
  ];

  const observer = new MutationObserver(() => {
    const anchors = document.querySelectorAll('a[href*="damas"], a[data-swapper-index="0"]');
    
    anchors.forEach(knownAnchor => {
      let grid = knownAnchor.closest('.framer-6rbvdk');
      if (!grid) grid = knownAnchor.parentElement.parentElement;

      if (grid) {
        const cards = Array.from(grid.querySelectorAll('a')).filter(a => 
          a.href.includes('damas') || 
          a.href.includes('najm') || 
          a.href.includes('kavi') || 
          a.href.includes('sham') || 
          a.href.includes('/work/') || 
          a.hasAttribute('data-swapper-index') || 
          a.href.includes('github.com/HelloWorld-Farhan')
        );

        cards.forEach((a, index) => {
          const data = projectList[index];
          if (!data) return; 

          if (!a.hasAttribute('data-swapper-index')) {
            a.setAttribute('data-swapper-index', index);
          }

          if (a.href !== data.link) {
            a.href = data.link;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
          }

          const h3 = a.querySelector('h3');
          if (h3 && h3.textContent !== data.title) {
            h3.textContent = data.title;
          }

          const p = a.querySelector('p');
          if (p && p.textContent !== data.type) {
            p.textContent = data.type;
          }

          const img = a.querySelector('img');
          if (img && !img.src.includes(data.img)) {
            img.src = data.img;
            img.srcset = ""; 
            img.sizes = "";
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
</script>
`;

const script2_FormValidation = `
<!-- custom-form-validation -->
<script>
  const style = document.createElement('style');
  style.innerHTML = \`
    .custom-form-success {
      background-color: #e6f6eb;
      color: #0b8030;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border: 1px solid #c3ebd2;
      animation: fadeIn 0.3s ease;
    }
    .custom-form-error {
      background-color: #feeced;
      color: #cc1b23;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border: 1px solid #fad2d4;
      animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  \`;
  document.head.appendChild(style);

  function setReactValue(element, value) {
    if (!element) return;
    const isTextArea = element.tagName === 'TEXTAREA';
    const prototype = isTextArea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
    if(prototype && Object.getOwnPropertyDescriptor(prototype, "value")) {
        const nativeSetter = Object.getOwnPropertyDescriptor(prototype, "value").set;
        nativeSetter.call(element, value);
        element.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
        element.value = value;
    }
  }

  document.addEventListener('submit', function(e) {
    const form = e.target.closest('form');
    if (form && (form.getAttribute('data-framer-component-type') === 'FormContainer' || form.querySelector('input[type="email"]'))) {
      
      e.preventDefault();
      e.stopPropagation(); 
      
      const submitBtnContainer = form.querySelector('button[type="submit"], input[type="submit"]')?.closest('.framer-1c5hxk7-container') || form.querySelector('button[type="submit"], input[type="submit"]')?.parentElement || form;
      
      function showMessage(msg, isError = false) {
        const existing = form.querySelectorAll('.custom-form-success, .custom-form-error');
        existing.forEach(el => el.remove());
        
        const msgDiv = document.createElement('div');
        msgDiv.className = isError ? 'custom-form-error' : 'custom-form-success';
        msgDiv.innerText = msg;
        
        if (submitBtnContainer && submitBtnContainer !== form) {
          submitBtnContainer.parentNode.insertBefore(msgDiv, submitBtnContainer);
        } else {
          form.appendChild(msgDiv);
        }
        
        if (!isError) {
          setTimeout(() => {
            if (msgDiv.parentNode) msgDiv.remove();
          }, 6000);
        }
      }

      const nameInput = form.querySelector('input[name="Name"], input[placeholder*="name" i]');
      const emailInput = form.querySelector('input[type="email"], input[name="Email"], input[placeholder*="email" i]');
      const projectInput = form.querySelector('textarea');
      
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.toLowerCase().trim() : '';
      const project = projectInput ? projectInput.value.trim() : '';

      const nameRegex = /^[a-zA-Z\\s]{3,}$/;
      if (!nameRegex.test(name)) {
        showMessage('Please enter a valid name (at least 3 characters, no numbers).', true);
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      const invalidDomains = ['@mail.com', '@gmal.com', '@gamil.com', '@gmail.co', '@yahoo.co'];
      const hasTypo = invalidDomains.some(domain => email.endsWith(domain));

      if (!emailRegex.test(email) || hasTypo) {
        showMessage('Please enter a valid, fully-formed email address (e.g., yourname@gmail.com).', true);
        return;
      }

      if (project.length < 20) {
        showMessage('Please provide a more detailed project summary (minimum 20 characters).', true);
        return;
      }

      const existing = form.querySelectorAll('.custom-form-success, .custom-form-error');
      existing.forEach(el => el.remove());

      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydoWQXQEh-7_S_xB0lkkHYxwc08AY9N73gOos_n6N5ck2dhbar_smF8RelBXwH1RWK/exec'; 
      
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]') || form.querySelector('button');
      if (submitBtn) {
        submitBtn.style.opacity = '0.5';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.transition = 'opacity 0.3s ease';
      }
      
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, project: project })
      })
      .then(() => {
        showMessage('Thank you! Your message has been sent successfully. Check your email for a confirmation!');
        setReactValue(nameInput, '');
        setReactValue(emailInput, '');
        setReactValue(projectInput, '');
        form.reset();
      })
      .catch(error => {
        showMessage('There was an error sending your message. Please try again later.', true);
        console.error('Error:', error);
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
        }
      });
    }
  }, true);
</script>
`;

const script3_LinkFixer = `
<!-- mailto-fix -->
<script>
  document.addEventListener('click', function(e) {
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    
    if (target && target.hasAttribute('href')) {
      const href = target.getAttribute('href');
      
      // 1. Handle mailto links (Copy to clipboard)
      if (href.startsWith('mailto:')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        const email = href.replace('mailto:', '');
        
        navigator.clipboard.writeText(email).then(() => {
          const originalText = target.innerText;
          target.innerText = 'Copied to clipboard! 📋';
          target.style.color = '#0b8030';
          target.style.transition = 'all 0.3s ease';
          
          setTimeout(() => {
            target.innerText = originalText;
            target.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Could not copy text: ', err);
          window.location.href = href;
        });
        return;
      }
      
      // 2. Handle GitHub links (Bypass Framer router entirely)
      if (href.includes('github.com')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        window.open(href, '_blank', 'noopener,noreferrer');
        return;
      }
    }
  }, true);
</script>
`;

function removeOldScript(content, startTag, endTag) {
    while (content.includes(startTag)) {
        const startIndex = content.indexOf(startTag);
        const endIndex = content.indexOf(endTag, startIndex) + endTag.length;
        content = content.slice(0, startIndex) + content.slice(endIndex);
    }
    return content;
}

function processHtmlFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        content = removeOldScript(content, '<!-- project-swapper -->', '</script>');
        content = removeOldScript(content, '<!-- custom-form-validation -->', '</script>');
        content = removeOldScript(content, '<!-- mailto-fix -->', '</script>');

        const allScripts = '\\n' + script1_ProjectSwapper + '\\n' + script2_FormValidation + '\\n' + script3_LinkFixer + '\\n';
        
        if (content.includes('</body>')) {
            content = content.replace('</body>', allScripts + '</body>');
        } else {
            content += allScripts;
        }

        if (content !== original) {
            fs.writeFileSync(filePath, content);
            console.log('Injected into: ' + filePath);
        }
    } catch (err) {
        console.log('Skipping ' + filePath + ' due to error: ' + err.message);
    }
}

function walkDir(dir) {
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            if (file === 'node_modules' || file === '.git' || file === '.vite') continue;
            
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (file.endsWith('.html')) {
                processHtmlFile(filePath);
            }
        }
    } catch (err) {
        // Ignore directory read errors
    }
}

console.log('Starting universal injection...');
walkDir('.');
console.log('Injection complete!');
