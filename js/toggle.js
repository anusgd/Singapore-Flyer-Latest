function toggleLanguage(element) {
    $('.language-option').removeClass('active'); // Remove active class from all options
    $(element).addClass('active'); // Add active class to the clicked option
}