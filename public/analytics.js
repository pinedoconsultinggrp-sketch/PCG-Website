/* ──────────────────────────────────────────────────────────────────────────
   Pinedo Consulting Group — analytics and Google Ads conversion tracking.

   REPLACE THE THREE VALUES BELOW. Nothing fires until you do, so the site is
   safe to deploy as-is.

     GA4_ID     Google Analytics 4 measurement ID.  Analytics > Admin >
                Data streams > your web stream. Looks like G-ABC1234567.

     ADS_ID     Google Ads conversion ID.  Ads > Goals > Conversions >
                your action > Tag setup. Looks like AW-123456789.

     ADS_LABEL  The conversion label from that same screen. A short random
                string like AbC-D_efGhIjKlMnO.

   The conversion fires automatically on /thank-you and /gracias, which only
   load after a real form submission. Nothing else needs editing.
   ────────────────────────────────────────────────────────────────────────── */

var GA4_ID    = "G-XXXXXXXXXX";
var ADS_ID    = "AW-XXXXXXXXX";
var ADS_LABEL = "XXXXXXXXXXXXXXXXXXXX";

(function () {
  var configured = function (v) { return v && v.indexOf("XXX") === -1; };
  if (!configured(GA4_ID) && !configured(ADS_ID)) return;   // nothing set up yet

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());

  var first = configured(GA4_ID) ? GA4_ID : ADS_ID;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(first);
  document.head.appendChild(s);

  if (configured(GA4_ID)) gtag("config", GA4_ID);
  if (configured(ADS_ID)) gtag("config", ADS_ID);

  // The thank-you pages are reached only by submitting the contact form,
  // which makes them a trustworthy conversion signal.
  var path = location.pathname.replace(/\/$/, "");
  var isThanks = path === "/thank-you" || path === "/gracias";

  if (isThanks && configured(ADS_ID) && configured(ADS_LABEL)) {
    gtag("event", "conversion", { send_to: ADS_ID + "/" + ADS_LABEL });
  }
  if (isThanks && configured(GA4_ID)) {
    gtag("event", "generate_lead", {
      language: path === "/gracias" ? "es" : "en",
      form: path === "/gracias" ? "contact-es" : "contact"
    });
  }
})();
