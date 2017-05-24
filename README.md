reCAPTCHA checker
===

Checks the token included in the form when using "invisible reCCAPTCHA" as defined in [reCAPTCHA documentation](https://developers.google.com/recaptcha/)

USE
==

```javascript
    var checkCaptcha = require('recaptcha-check')('your-private-token-here')

    checkCaptcha('token-from-form', 'user-remote-ip').then(function success(){
        console.log('success token is valid!')
    }, 
    function error(){
        console.log('error :(')
    })
```

get yoour private token from the [reCAPTCHA admin](https://www.google.com/recaptcha/admin)