document.addEventListener('DOMContentLoaded', function () {
    var modalButton = document.getElementById('modalButton');

    var myModal = new bootstrap.Modal(document.getElementById('myModalappdwn'));

    document.getElementById('myModalappdwn').addEventListener('show.bs.modal', function () {
        modalButton.classList.add('d-none');
    });

    document.getElementById('myModalappdwn').addEventListener('hidden.bs.modal', function () {
        modalButton.classList.remove('d-none');
    });
});

function openPlayStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent contains 'Android' to determine if it's a mobile device
    if (/android/i.test(userAgent)) {
        var playStoreUrl = 'market://details?id=com.example.app'; // Replace with your app's package name
        window.location.href = playStoreUrl;
    } else {
        var websiteUrl = 'https://play.google.com/store/apps/details?id=com.ldr.enterprise.sgflyer'; // Replace with your website URL
        window.location.href = websiteUrl;
    }
}