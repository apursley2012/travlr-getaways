/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /demo-forms.js                                                        *
 * Purpose: Provides accessible client-side validation and local-only          *
 *          confirmation for the static demonstration forms without            *
 *          transmitting visitor information.                                  *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const DEMO_FORM_SELECTOR = "[data-demo-form]";

/**
 * Reports native validation failures beside the owning field and through the form's live status region. The browser remains the source of truth for constraint validity.
 */
function showValidationMessage(field) {
  const errorId = `${field.id}-error`;
  const error = document.getElementById(errorId);

  if (!error) {
    return;
  }

  if (field.validity.valid) {
    field.removeAttribute("aria-invalid");
    error.textContent = "";
    return;
  }

  field.setAttribute("aria-invalid", "true");
  error.textContent = field.validationMessage;
}

document.querySelectorAll(DEMO_FORM_SELECTOR).forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  // Without JavaScript the submit button remains disabled, preventing a fallback
  // GET request from placing visitor names, email addresses or messages in the URL.
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = false;
  }
  const fields = form.querySelectorAll("input, select, textarea");

  fields.forEach((field) => {
    field.addEventListener("invalid", () => showValidationMessage(field));

    const refreshValidation = () => {
      // A prior success or error summary no longer describes the edited form.
      if (status) {
        status.textContent = "";
      }

      showValidationMessage(field);
    };

    field.addEventListener("input", refreshValidation);
    field.addEventListener("change", refreshValidation);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    fields.forEach(showValidationMessage);

    if (!form.checkValidity()) {
      if (!status) {
        return;
      }
      status.textContent = "Please correct the highlighted fields before continuing.";
      form.querySelector(":invalid")?.focus();
      return;
    }

    if (!status) {
      return;
    }

    status.textContent =
      "Demo complete. Your information was validated in this browser and was not sent or stored.";
  });
});
