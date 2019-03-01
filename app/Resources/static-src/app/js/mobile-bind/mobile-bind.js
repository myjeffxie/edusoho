import SmsSender from 'app/common/widget/sms-sender';
import Cookies from 'js-cookie';

export default class MobileBind {
  constructor() {
    this.$smsCode = $('.js-sms-send');
    this.$form = $('#mobile-bind-form');
    this.initCheckCookie();
    this.initValidator();
    this.initMobileCodeSendBtn();
    this.initEvent();
  }

  initEvent() {
    $('#mobile-bind-modal').on('click', '#submit-btn', event => this._submit(event));
  }

  _submit() {
    if (this.validator && this.validator.form()) {
      this.$form.submit();
      $('.modal').modal('hide');
    }
  }

  initCheckCookie() {
    let key = this.$form.data('userId') + '-last-login-in';

    if (!Cookies.get(key) || Cookies.get(key) != new Date().getDate()) {
      $('#mobile-bind-modal').modal();
      Cookies.set(key, new Date().getDate());
    }
  }

  initValidator() {
    let self = this;

    this.validator = this.$form.validate({
      currentDom: '#submit-btn',
      ajax: true,
      rules: {
        password: {
          required: true,
          es_remote: {
            type: 'post'
          },
        },
        mobile: {
          required: true,
          phone: true,
          es_remote: {
            type: 'get',
            callback: (bool) => {
              if (bool) {
                self.$smsCode.removeAttr('disabled');
              } else {
                self.$smsCode.attr('disabled', true);
              }
            }
          },
        },
        sms_code: {
          required: true,
          unsigned_integer: true,
          es_remote: {
            type: 'get',
          },
        },
      },
      messages: {
        sms_code: {
          required: Translator.trans('site.captcha_code.required')
        }
      },
    });
  }

  initMobileCodeSendBtn() {
    let self = this;

    this.$smsCode.on('click', function () {
      new SmsSender({
        element: '.js-sms-send',
        url: self.$smsCode.data('url'),
        smsType: 'sms_bind',
      });
    });
  }

}