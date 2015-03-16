/*
		Track clicks op externe/email/tel/download-links
*/
$('a[href^="mailto:"]').on('click', function () {
	var email = $(this).attr('href').replace('mailto:', '');
	_gaq.push(['_trackEvent', 'External', 'E-mail', email]);
});
$('a[href^="tel:"]').on('click', function () {
	var phonenumber = $(this).attr('href').replace('tel:', '');
	_gaq.push(['_trackEvent', 'External', 'Phonenumber', phonenumber]);
});

/* Add ':external'-selector to jQuery */
$.expr[':'].external = function (obj) {
	return !obj.href.match(/^mailto:/) && !obj.href.match(/^tel:/) && (obj.hostname !== document.location.hostname);
};
$('a:external').on('click', function () {
	_gaq.push(['_trackEvent', 'External', 'Link', $(this).attr('href')]);
});

$('.download a').on('click', function () {
	_gaq.push(['_trackEvent', 'File', 'Download', $(this).attr('href')]);
});




/* --------------------------------------------------------------------------------------------- */

/*
		Track clicks op externe/email/tel/download-links
*/
$('a[href^="mailto:"]').on('click', function () {
	var email = $(this).attr('href').replace('mailto:', '');
	ga('send', 'event', 'External', 'E-mail', email);
});
$('a[href^="tel:"]').on('click', function () {
	var phonenumber = $(this).attr('href').replace('tel:', '');
	ga('send', 'event', 'External', 'Phonenumber', phonenumber);
});

/* Add ':external'-selector to jQuery */
$.expr[':'].external = function (obj) {
	return !obj.href.match(/^mailto:/) && !obj.href.match(/^tel:/) && (obj.hostname !== document.location.hostname);
};
$('a:external').on('click', function () {
	ga('send', 'event', 'External', 'Link', $(this).attr('href'));
});

$('.download a').on('click', function () {
	ga('send', 'event', 'File', 'Download', $(this).attr('href'));
});
