const app_id = "33OpwxLFrlpIGDluvvUiu";

function loginWithDeriv() {
  const redirect = window.location.origin + "/dashboard.html";

  const url =
    "https://oauth.deriv.com/oauth2/authorize?app_id=" +
    app_id +
    "&redirect_uri=" +
    encodeURIComponent(redirect);

  window.location.href = url;
}
