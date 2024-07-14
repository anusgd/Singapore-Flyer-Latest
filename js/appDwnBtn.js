function openPlayStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent contains 'Android' to determine if it's a mobile device
    if (/android/i.test(userAgent)) {
        var playStoreUrl = 'market://details?id=com.instagram.android';
        window.location.href = playStoreUrl;
    } else {
        // For laptops and desktops, stay on the current page (or redirect as needed)
        var websiteUrl = 'https://play.google.com/store/apps/details?id=com.ldr.enterprise.sgflyer'; // Replace with your website URL
        window.location.href = websiteUrl;
    }
}
