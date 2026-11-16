/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /booking.js                                                           *
 * Purpose: Owns browser-only booking form behavior for the static demo,       *
 *          including room preselection and date constraints.                  *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 * Third-party: FreeWebsiteTemplates.com; rights retained.                     *
 *******************************************************************************
*/                                                                              

/**
 * Returns today's date in YYYY-MM-DD format using the visitor's local timezone. Adjusting by the timezone offset prevents UTC conversion from shifting the minimum date shown by the HTML date input. @returns {string} The local date formatted for an HTML date input.
 */
function getLocalMinimumDate() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

  return today.toISOString().split('T')[0];
}

/**
 * Applies a valid room query-string value to the existing room select. Unknown room values are ignored exactly as they were in the original script.
 */
function preselectRoomFromQuery() {
  const selectedRoom = new URLSearchParams(window.location.search).get('room');
  const roomSelect = document.querySelector('#room');

  if (!roomSelect) {
    throw new Error('Booking room selector was not found.');
  }

  if (selectedRoom && Array.from(roomSelect.options).some((option) => option.value === selectedRoom)) {
    roomSelect.value = selectedRoom;
  }
}

/**
 * Configures the minimum booking dates and keeps check-out consistent with check-in. Existing invalid check-out values are cleared after check-in changes.
 */
function configureBookingDates() {
  const minimumDate = getLocalMinimumDate();
  const checkInInput = document.querySelector('#check-in');
  const checkOutInput = document.querySelector('#check-out');

  if (!checkInInput || !checkOutInput) {
    throw new Error('Booking date controls were not found.');
  }

  checkInInput.min = minimumDate;
  checkOutInput.min = minimumDate;

  const validateDateRange = () => {
    const hasInvalidRange =
      checkInInput.value &&
      checkOutInput.value &&
      checkOutInput.value <= checkInInput.value;

    checkOutInput.setCustomValidity(
      hasInvalidRange ? 'Check-out must be after the check-in date.' : ''
    );
  };

  checkInInput.addEventListener('change', () => {
    checkOutInput.min = checkInInput.value || minimumDate;
    validateDateRange();
  });

  checkOutInput.addEventListener('change', validateDateRange);
}

// Initialize booking behavior after the deferred script loads the page controls.
preselectRoomFromQuery();
configureBookingDates();
