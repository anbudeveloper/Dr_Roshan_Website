;(() => {
  'use strict'

  // ===== EmailJS configuration =====
  // Create a free account at https://www.emailjs.com, then replace these
  // three values with your Public Key, Service ID and Template ID.
  // See README.md for the full setup steps and required template variables.
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'

  // Email configuration
  const FORM_SUBMISSION_EMAIL = 'drroshansdentalcaretrichy@gmail.com'
  const SENDER_EMAIL = 'gobright.growth@gmail.com'

  // Analytics configuration
  const ANALYTICS_ENABLED = true
  const ANALYTICS_ENDPOINT = './analytics/track.php' // Optional: track forms on your server

  const TREATMENT_OPTIONS = [
    'Dental Implants',
    'Root Canal Treatment',
    'Invisible Aligners',
    'Smile Designing',
    'Kids Dentistry',
    'Zirconia & Ceramic Teeth',
  ]

  const TREATMENT_LINKS = [
    { label: 'Dental Implants', slug: 'dental-implants' },
    { label: 'Root Canal Treatment', slug: 'root-canal' },
    { label: 'Invisible Aligners', slug: 'invisible-aligners' },
    { label: 'Smile Designing', slug: 'smile-designing' },
    { label: 'Kids Dentistry', slug: 'kids-dentistry' },
    { label: 'Zirconia & Ceramic Teeth', slug: 'zirconia-ceramic-teeth' },
  ]

  const CALENDAR_ICON_30 =
    '<svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v3M17 2v3M3.5 9h17M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 9h2v2h-2v-2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"/></svg>'

  function checkIcon(size) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" fill="none" stroke="#16a34a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/></svg>`
  }

  // ===================== Form Analytics =====================
  function trackFormSubmission(formData) {
    if (!ANALYTICS_ENABLED) return

    const analyticsData = {
      timestamp: new Date().toISOString(),
      formType: formData.form_type,
      userAgent: navigator.userAgent,
      pageUrl: window.location.href,
      ...formData,
    }

    // Log to console for debugging
    console.log('📊 Form Submission Tracked:', analyticsData)

    // Send to server (optional) - with proper path handling
    if (ANALYTICS_ENDPOINT) {
      const currentPath = window.location.pathname
      const isInSubdir = currentPath.includes('/blog/') || currentPath.includes('/treatments/')
      const analyticsUrl = isInSubdir ? '../analytics/track.php' : './analytics/track.php'

      fetch(analyticsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(analyticsData),
      }).catch(err => console.error('Analytics tracking failed:', err))
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // EmailJS initialization no longer needed - using PHP email sending

    initMobileNav()
    initBookingModal()
    initConsultationModal()
    upgradeFormControls()
    initAppointmentForms()
    initContactForm()
    initHeroCarousel()
    initTestimonialsCarousel()
    initFAQAccordion()
    initGalleryFilters()
  })

  // ===================== Mobile nav drawer =====================
  function initMobileNav() {
    const drawer = document.querySelector('.mob-drawer')
    const menuBtn = document.querySelector('.mob-menu-btn')
    const closeBtn = drawer ? drawer.querySelector('.mob-drawer__close') : null
    if (!drawer || !menuBtn) return

    let backdrop = null

    function collapseItem(item) {
      const toggle = item.querySelector(':scope > button.mob-drawer__link')
      const children = item.querySelector(':scope > .mob-drawer__children')
      if (toggle) {
        toggle.classList.remove('mob-drawer__link--active')
        const chevron = toggle.querySelector('span')
        if (chevron) chevron.style.transform = 'none'
      }
      if (children) children.remove()
    }

    function openMenu() {
      drawer.classList.add('mob-drawer--open')
      drawer.setAttribute('aria-hidden', 'false')
      backdrop = document.createElement('button')
      backdrop.type = 'button'
      backdrop.className = 'fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden'
      backdrop.setAttribute('aria-label', 'Close menu')
      backdrop.addEventListener('click', closeMenu)
      document.body.appendChild(backdrop)
    }

    function closeMenu() {
      drawer.classList.remove('mob-drawer--open')
      drawer.setAttribute('aria-hidden', 'true')
      drawer.querySelectorAll('.mob-drawer__nav-item').forEach(collapseItem)
      if (backdrop) {
        backdrop.remove()
        backdrop = null
      }
    }

    menuBtn.addEventListener('click', openMenu)
    if (closeBtn) closeBtn.addEventListener('click', closeMenu)

    drawer.querySelectorAll('.mob-drawer__nav-item').forEach((item) => {
      const toggle = item.querySelector(':scope > button.mob-drawer__link')
      if (!toggle) return

      toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.contains('mob-drawer__link--active')

        drawer.querySelectorAll('.mob-drawer__nav-item').forEach((other) => {
          if (other !== item) collapseItem(other)
        })

        if (isOpen) {
          collapseItem(item)
          return
        }

        toggle.classList.add('mob-drawer__link--active')
        const chevron = toggle.querySelector('span')
        if (chevron) chevron.style.transform = 'rotate(180deg)'

        const submenu = document.createElement('div')
        submenu.className = 'mob-drawer__children'
        TREATMENT_LINKS.forEach(({ label, slug }) => {
          const a = document.createElement('a')
          a.className = 'mob-drawer__child'
          a.href = `/treatments/${slug}.html`
          a.textContent = label
          submenu.appendChild(a)
        })
        item.appendChild(submenu)
      })
    })

    // Any link in the drawer (top-level or submenu) closes it.
    drawer.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeMenu()
    })
  }

  // ===================== Booking modal =====================
  function initBookingModal() {
    const wrap = document.createElement('div')
    wrap.innerHTML = `
      <div class="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" style="display:none;">
        <button class="booking-modal__backdrop" type="button" aria-label="Close booking form"></button>
        <form class="booking-modal__panel animate-rise">
          <button class="booking-modal__close" type="button" aria-label="Close booking form">&times;</button>
          <div class="booking-modal__head">
            <span>${CALENDAR_ICON_30}</span>
            <div>
              <p class="eyebrow">Quick Booking</p>
              <h2 id="booking-modal-title">Book Your Appointment</h2>
            </div>
          </div>
          <div class="booking-modal__fields">
            <label>
              <span>Your Name</span>
              <input type="text" placeholder="Enter your name" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'" required>
            </label>
            <label>
              <span>Phone Number</span>
              <input type="tel" placeholder="Enter phone number" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'" required>
            </label>
            <label>
              <span>Select Treatment</span>
              <select name="treatment" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s; cursor: pointer; -webkit-appearance: none; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg fill=\"%23071b57\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>'); background-repeat: no-repeat; background-position: right 8px center; background-size: 20px; padding-right: 36px;" onchange="this.style.borderColor = '#ff2638'" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'"><option value="">Choose a treatment...</option>${treatmentOptionsMarkup('')}</select>
            </label>
            <label>
              <span>Preferred Date</span>
              <input type="date" name="date" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s; cursor: pointer;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'">
            </label>
            <button class="primary-btn" type="submit">Book Appointment</button>
          </div>
        </form>
      </div>`

    const modal = wrap.firstElementChild
    document.body.appendChild(modal)

    const form = modal.querySelector('.booking-modal__panel')
    const fieldsEl = modal.querySelector('.booking-modal__fields')
    const backdrop = modal.querySelector('.booking-modal__backdrop')
    const closeBtn = modal.querySelector('.booking-modal__close')
    const originalFieldsHTML = fieldsEl.innerHTML

    function open() {
      fieldsEl.innerHTML = originalFieldsHTML
      modal.style.display = 'grid'
    }

    function close() {
      modal.style.display = 'none'
      fieldsEl.innerHTML = originalFieldsHTML
    }

    backdrop.addEventListener('click', close)
    closeBtn.addEventListener('click', close)

    wireAppointmentForm(form, fieldsEl, {
      dark: false,
      successTitle: 'Appointment Request Sent!',
      successText: "We'll call you back shortly to confirm.",
      errorText: 'Something went wrong. Please try again.',
      successDelay: 3000,
      errorDelay: 4000,
      afterSuccess: close,
    })

    document.querySelectorAll('.nav-grad-btn.nav-book-mobile-hide, .mob-drawer__book, button.primary-btn[type="button"]').forEach((btn) => {
      btn.addEventListener('click', open)
    })
  }

  function initConsultationModal() {
    const wrap = document.createElement('div')
    wrap.innerHTML = `
      <div class="booking-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title" style="display:none;">
        <button class="booking-modal__backdrop" type="button" aria-label="Close consultation form"></button>
        <form class="booking-modal__panel animate-rise">
          <button class="booking-modal__close" type="button" aria-label="Close consultation form">&times;</button>
          <div class="booking-modal__head">
            <span>${CALENDAR_ICON_30}</span>
            <div>
              <p class="eyebrow">Free Consultation</p>
              <h2 id="consultation-modal-title">Book Your Free Consultation</h2>
            </div>
          </div>
          <div class="booking-modal__fields">
            <label>
              <span>Your Name</span>
              <input type="text" placeholder="Enter your name" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'" required>
            </label>
            <label>
              <span>Phone Number</span>
              <input type="tel" placeholder="Enter phone number" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'" required>
            </label>
            <label>
              <span>Email Address</span>
              <input type="email" placeholder="Enter your email" style="width: 100%; padding: 12px 16px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; border-radius: 8px; font-size: 14px; transition: all 0.3s;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'" required>
            </label>
            <label>
              <span>Your Message</span>
              <textarea placeholder="Tell us about your dental concerns..." style="width: 100%; min-height: 100px; padding: 12px 16px; border-radius: 8px; border: 1px solid #e5edf8; background: #f8faff; color: #07133f; font-family: inherit; font-size: 14px; transition: all 0.3s; resize: vertical;" onfocus="this.style.borderColor = '#ff2638'; this.style.boxShadow = '0 0 0 3px rgba(255, 38, 56, 0.1)'" onblur="this.style.borderColor = '#e5edf8'; this.style.boxShadow = 'none'"></textarea>
            </label>
            <button class="primary-btn" type="submit">Request Consultation</button>
          </div>
        </form>
      </div>`

    const modal = wrap.firstElementChild
    document.body.appendChild(modal)

    const form = modal.querySelector('.booking-modal__panel')
    const fieldsEl = modal.querySelector('.booking-modal__fields')
    const backdrop = modal.querySelector('.booking-modal__backdrop')
    const closeBtn = modal.querySelector('.booking-modal__close')
    const originalFieldsHTML = fieldsEl.innerHTML

    function open() {
      fieldsEl.innerHTML = originalFieldsHTML
      modal.style.display = 'grid'
    }

    function close() {
      modal.style.display = 'none'
      fieldsEl.innerHTML = originalFieldsHTML
    }

    backdrop.addEventListener('click', close)
    closeBtn.addEventListener('click', close)

    wireConsultationForm(form, fieldsEl, {
      dark: false,
      successTitle: 'Consultation Request Sent!',
      successText: 'We will contact you within 24 hours.',
      errorText: 'Something went wrong. Please try again.',
      successDelay: 3000,
      errorDelay: 4000,
      afterSuccess: close,
    })

    document.querySelectorAll('button.consultation-btn, button[data-action="book-consultation"]').forEach((btn) => {
      btn.addEventListener('click', open)
    })
  }

  function treatmentOptionsMarkup(selected) {
    let html = `<option value=""${selected ? '' : ' selected'}>Select Treatment</option>`
    TREATMENT_OPTIONS.forEach((opt) => {
      html += `<option value="${opt}"${opt === selected ? ' selected' : ''}>${opt}</option>`
    })
    return html
  }

  // ===================== Replace custom dropdown/date controls =====================
  // The compiled stylesheet already themes plain <select> and <input type="date">
  // (custom arrow, color-scheme, calendar icon) for both the light and dark
  // (.ab-hero__form-fields) form variants, so no extra CSS is needed here.
  function upgradeFormControls() {
    document.querySelectorAll('button[aria-haspopup="listbox"]').forEach((btn) => {
      const wrapper = btn.closest('.relative.w-full')
      if (!wrapper) return

      const span = btn.querySelector('span')
      const currentLabel = span ? span.textContent.trim() : ''
      const form = wrapper.closest('form')
      const reference = form ? form.querySelector('input[type="tel"]') : null

      const select = document.createElement('select')
      select.name = 'treatment'
      if (reference && reference.className) select.className = reference.className
      select.innerHTML = treatmentOptionsMarkup(TREATMENT_OPTIONS.includes(currentLabel) ? currentLabel : '')

      wrapper.replaceWith(select)
    })

    document.querySelectorAll('.relative.w-full > button[type="button"]:not([aria-haspopup])').forEach((btn) => {
      const wrapper = btn.closest('.relative.w-full')
      if (!wrapper) return

      const form = wrapper.closest('form')
      const reference = form ? form.querySelector('input[type="tel"]') : null

      const input = document.createElement('input')
      input.type = 'date'
      input.name = 'date'
      if (reference && reference.className) input.className = reference.className

      wrapper.replaceWith(input)
    })
  }

  // ===================== Email Sending via PHP Backend =====================
  function sendEmail(params) {
    // Detect if we're in a subdirectory (blog/ or treatments/)
    const currentPath = window.location.pathname
    const isInSubdir = currentPath.includes('/blog/') || currentPath.includes('/treatments/')
    const emailEndpoint = isInSubdir ? '../send-email.php' : './send-email.php'

    return fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }).then(response => {
      if (!response.ok) throw new Error('Email submission failed')
      return response.json()
    }).then(data => {
      if (!data.success) throw new Error(data.error || 'Email submission failed')
      return data
    })
  }

  function buildSuccessMarkup({ dark, successTitle, successText }) {
    const titleColor = dark ? '#ffffff' : '#07133f'
    const textColor = dark ? 'rgba(255,255,255,0.75)' : '#5a6a8a'
    return `<div style="text-align:center;padding:32px 0;">
      <div style="width:52px;height:52px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">${checkIcon(26)}</div>
      <p style="font-weight:900;font-size:17px;margin:0;color:${titleColor};">${successTitle}</p>
      <p style="font-size:13px;margin-top:6px;color:${textColor};">${successText}</p>
    </div>`
  }

  // Generic handler for the appointment-style forms (name, phone, treatment
  // select, date). `fieldsEl` is the element whose contents are swapped for
  // the success message and later restored from the markup captured here.
  function wireAppointmentForm(form, fieldsEl, opts) {
    const originalFieldsHTML = fieldsEl.innerHTML

    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const submitBtn = fieldsEl.querySelector('button[type="submit"]')
      if (!submitBtn) return

      const nameInput = fieldsEl.querySelector('input[type="text"]')
      const phoneInput = fieldsEl.querySelector('input[type="tel"]')
      const treatmentSelect = fieldsEl.querySelector('select')
      const dateInput = fieldsEl.querySelector('input[type="date"]')

      const existingError = fieldsEl.querySelector('.app-form-error')
      if (existingError) existingError.remove()

      const originalBtnHTML = submitBtn.innerHTML
      submitBtn.disabled = true
      submitBtn.textContent = 'Sending…'

      try {
        const formData = {
          form_type: 'appointment',
          name: nameInput ? nameInput.value : '',
          phone: phoneInput ? phoneInput.value : '',
          email: '',
          treatment: (treatmentSelect && treatmentSelect.value) || 'Not specified',
          date: (dateInput && dateInput.value) || 'Not specified',
          message: '',
          to_email: FORM_SUBMISSION_EMAIL,
          from_email: SENDER_EMAIL,
        }

        trackFormSubmission(formData)
        await sendEmail(formData)

        fieldsEl.innerHTML = buildSuccessMarkup(opts)

        setTimeout(() => {
          if (opts.afterSuccess) opts.afterSuccess()
          else fieldsEl.innerHTML = originalFieldsHTML
        }, opts.successDelay)
      } catch {
        submitBtn.disabled = false
        submitBtn.innerHTML = originalBtnHTML

        const errorEl = document.createElement('p')
        errorEl.className = 'app-form-error'
        errorEl.style.cssText = `margin:8px 0 0;font-size:13px;font-weight:600;text-align:center;color:${opts.dark ? '#fca5a5' : '#ef4444'};`
        errorEl.textContent = opts.errorText
        submitBtn.insertAdjacentElement('beforebegin', errorEl)

        setTimeout(() => errorEl.remove(), opts.errorDelay)
      }
    })
  }

  function wireConsultationForm(form, fieldsEl, opts) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const submitBtn = fieldsEl.querySelector('button[type="submit"]')
      if (!submitBtn) return

      const nameInput = fieldsEl.querySelector('input[type="text"]')
      const phoneInput = fieldsEl.querySelector('input[type="tel"]')
      const emailInput = fieldsEl.querySelector('input[type="email"]')
      const messageTextarea = fieldsEl.querySelector('textarea')

      const existingError = fieldsEl.querySelector('.app-form-error')
      if (existingError) existingError.remove()

      const originalBtnHTML = submitBtn.innerHTML
      submitBtn.disabled = true
      submitBtn.textContent = 'Sending…'

      try {
        const formData = {
          form_type: 'consultation',
          name: nameInput ? nameInput.value : '',
          phone: phoneInput ? phoneInput.value : '',
          email: emailInput ? emailInput.value : '',
          treatment: 'General Consultation',
          date: '',
          message: messageTextarea ? messageTextarea.value : '',
          to_email: FORM_SUBMISSION_EMAIL,
          from_email: SENDER_EMAIL,
        }

        trackFormSubmission(formData)
        await sendEmail(formData)

        const successMarkup = buildSuccessMarkup(opts)
        const originalHTML = fieldsEl.innerHTML
        fieldsEl.innerHTML = successMarkup

        setTimeout(() => {
          if (opts.afterSuccess) opts.afterSuccess()
          else fieldsEl.innerHTML = originalHTML
        }, opts.successDelay)
      } catch {
        submitBtn.disabled = false
        submitBtn.innerHTML = originalBtnHTML

        const errorEl = document.createElement('p')
        errorEl.className = 'app-form-error'
        errorEl.style.cssText = `margin:8px 0 0;font-size:13px;font-weight:600;text-align:center;color:${opts.dark ? '#fca5a5' : '#ef4444'};`
        errorEl.textContent = opts.errorText
        submitBtn.insertAdjacentElement('beforebegin', errorEl)

        setTimeout(() => errorEl.remove(), opts.errorDelay)
      }
    })
  }

  function initAppointmentForms() {
    // About / Blog / Gallery / Treatments index / Treatment detail hero forms
    document.querySelectorAll('.ab-hero__form').forEach((form) => {
      const fieldsEl = form.querySelector('.ab-hero__form-fields')
      if (!fieldsEl) return
      wireAppointmentForm(form, fieldsEl, {
        dark: true,
        successTitle: 'Request Received!',
        successText: "We'll call you back shortly to confirm.",
        errorText: 'Something went wrong. Please try again.',
        successDelay: 4000,
        errorDelay: 4000,
      })
    })

    // Home page "Book Your Appointment" section
    const apptForm = document.querySelector('#appointment form')
    if (apptForm && apptForm.children[1]) {
      wireAppointmentForm(apptForm, apptForm.children[1], {
        dark: false,
        successTitle: 'Appointment Request Sent!',
        successText: "We'll call you back shortly to confirm your booking.",
        errorText: 'Something went wrong. Please try again or call us directly.',
        successDelay: 4000,
        errorDelay: 4000,
      })
    }

    // Treatment detail page "Book an Appointment" CTA
    document.querySelectorAll('form').forEach((form) => {
      const heading = form.querySelector(':scope > h3')
      if (heading && heading.textContent.trim() === 'Book an Appointment' && form.children[1]) {
        wireAppointmentForm(form, form.children[1], {
          dark: false,
          successTitle: 'Request Received!',
          successText: "We'll call you back shortly to confirm your appointment.",
          errorText: 'Something went wrong. Please try again.',
          successDelay: 4000,
          errorDelay: 4000,
        })
      }
    })
  }

  // ===================== Contact page form =====================
  function initContactForm() {
    const ctForm = document.querySelector('.ct-form')
    const form = ctForm ? ctForm.querySelector('form') : null
    if (!form) return

    const originalHTML = form.innerHTML

    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const submitBtn = form.querySelector('button[type="submit"]')
      if (!submitBtn) return

      const nameInput = form.querySelector('input[type="text"]')
      const phoneInput = form.querySelector('input[type="tel"]')
      const emailInput = form.querySelector('input[type="email"]')
      const treatmentSelect = form.querySelector('select')
      const messageInput = form.querySelector('textarea')

      const existingError = form.querySelector('.app-form-error')
      if (existingError) existingError.remove()

      const originalBtnHTML = submitBtn.innerHTML
      const icon = submitBtn.querySelector('svg')
      submitBtn.disabled = true
      submitBtn.innerHTML = (icon ? icon.outerHTML + ' ' : '') + 'Sending…'

      try {
        const formData = {
          form_type: 'contact',
          name: nameInput ? nameInput.value : '',
          phone: phoneInput ? phoneInput.value : '',
          email: emailInput ? emailInput.value : '',
          treatment: (treatmentSelect && treatmentSelect.value) || 'Not specified',
          date: 'Not specified',
          message: messageInput ? messageInput.value : '',
          to_email: FORM_SUBMISSION_EMAIL,
          from_email: SENDER_EMAIL,
        }

        trackFormSubmission(formData)
        await sendEmail(formData)

        form.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:48px 0;text-align:center;">
          <div style="width:56px;height:56px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;">${checkIcon(28)}</div>
          <p style="font-weight:900;font-size:17px;margin:0;color:#07133f;">Message Sent!</p>
          <p style="font-size:14px;margin:0;color:#5a6a8a;">We'll get back to you as soon as possible.</p>
        </div>`

        setTimeout(() => { form.innerHTML = originalHTML }, 5000)
      } catch {
        submitBtn.disabled = false
        submitBtn.innerHTML = originalBtnHTML

        const errorEl = document.createElement('p')
        errorEl.className = 'app-form-error text-sm font-semibold text-red-500 mb-3'
        errorEl.textContent = 'Something went wrong. Please try again or call us directly.'
        submitBtn.insertAdjacentElement('beforebegin', errorEl)

        setTimeout(() => errorEl.remove(), 4000)
      }
    })
  }

  // ===================== Home hero banner carousel =====================
  function initHeroCarousel() {
    const track = document.querySelector('.hero-carousel__track')
    if (!track) return

    const total = track.children.length
    const dots = document.querySelectorAll('.hero-carousel__dots button')
    const prevBtn = document.querySelector('.hero-carousel__arrow--prev')
    const nextBtn = document.querySelector('.hero-carousel__arrow--next')
    let active = 0

    function render() {
      track.style.transform = `translateX(-${active * 100}%)`
      dots.forEach((dot, i) => { dot.className = i === active ? 'active' : '' })
    }

    function goTo(index) {
      active = ((index % total) + total) % total
      render()
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(active - 1))
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(active + 1))
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)))

    setInterval(() => goTo(active + 1), 4800)
  }

  // ===================== Home testimonials carousel =====================
  function initTestimonialsCarousel() {
    const track = document.querySelector('.review-track')
    if (!track) return

    const total = track.children.length
    const dots = document.querySelectorAll('.slider-dots button')
    let active = 0

    function render() {
      track.style.transform = `translateX(-${active * 100}%)`
      dots.forEach((dot, i) => { dot.className = i === active ? 'active' : '' })
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => { active = i; render() }))

    setInterval(() => {
      active = (active + 1) % total
      render()
    }, 3800)
  }

  // ===================== Treatment detail FAQ accordion =====================
  function initFAQAccordion() {
    const heading = Array.from(document.querySelectorAll('h2')).find((h) => h.textContent.trim() === 'Frequently Asked Questions')
    const container = heading && heading.parentElement ? heading.parentElement.querySelector('.flex.flex-col.gap-4') : null
    if (!container) return

    const items = Array.from(container.children)

    function setItemState(item, open) {
      const button = item.querySelector(':scope > button')
      const chevron = button ? button.querySelector('span') : null
      const panel = item.querySelector(':scope > div')
      if (button) button.setAttribute('aria-expanded', String(open))
      if (chevron) chevron.style.transform = open ? 'rotate(180deg)' : 'none'
      if (panel) panel.style.maxHeight = open ? '200px' : '0px'
    }

    items.forEach((item, index) => {
      const button = item.querySelector(':scope > button')
      if (!button) return

      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true'
        items.forEach((other, i) => setItemState(other, i === index ? !isOpen : false))
      })
    })
  }

  // ===================== Gallery filter tabs =====================
  function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gl-filter-btn')
    if (!filterButtons.length) return

    const filterIds = ['all', 'clinic', 'treatment', 'technology', 'team', 'transformations', 'patients']
    const sections = document.querySelectorAll('[data-gallery-cat]')

    function applyFilter(active) {
      sections.forEach((section) => {
        const cat = section.dataset.galleryCat
        let show
        if (active === 'all') show = true
        else if (cat === 'patients') show = active === 'patients' || active === 'team'
        else show = active === cat
        section.style.display = show ? '' : 'none'
      })
    }

    filterButtons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        applyFilter(filterIds[i])
      })
    })
  }
})()
