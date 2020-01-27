function setCookie (name, value, path, expires) {
  value = escape(value)
  if (!expires) {
    var now = new Date()
    now.setMonth(now.getMonth() + 6)
    expires = now.toUTCString()
  }
  if (path) {
    path = ';Path=' + path
  }
  document.cookie = name + '=' + value + ';expires=' + expires + path
}

function getCookieValue (name) {
  var value = document.cookie
  var cookieStartsAt = value.indexOf(' ' + name + '=')
  if (cookieStartsAt === -1) {
    cookieStartsAt = value.indexOf(name + '=')
  }
  if (cookieStartsAt === -1) {
    value = ''
  } else {
    cookieStartsAt = value.indexOf('=', cookieStartsAt) + 1
    var cookieEndsAt = value.indexOf(';', cookieStartsAt)
    if (cookieEndsAt === -1) {
      cookieEndsAt = value.length
    }
    value = unescape(value.substring(cookieStartsAt, cookieEndsAt))
  }
  return value
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export { setCookie, getCookieValue, deleteAllCookies }
