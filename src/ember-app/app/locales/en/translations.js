import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_2КартДоступLForm from './forms/i-i-s-prilozhenie-2-карт-доступ-l';
import IISPrilozhenie_2СправДолLForm from './forms/i-i-s-prilozhenie-2-справ-дол-l';
import IISPrilozhenie_2СправКласLForm from './forms/i-i-s-prilozhenie-2-справ-клас-l';
import IISPrilozhenie_2СправРодLForm from './forms/i-i-s-prilozhenie-2-справ-род-l';
import IISPrilozhenie_2СправСотрLForm from './forms/i-i-s-prilozhenie-2-справ-сотр-l';
import IISPrilozhenie_2СправУченLForm from './forms/i-i-s-prilozhenie-2-справ-учен-l';
import IISPrilozhenie_2КартДоступEForm from './forms/i-i-s-prilozhenie-2-карт-доступ-e';
import IISPrilozhenie_2СправДолEForm from './forms/i-i-s-prilozhenie-2-справ-дол-e';
import IISPrilozhenie_2СправКласEForm from './forms/i-i-s-prilozhenie-2-справ-клас-e';
import IISPrilozhenie_2СправРодEForm from './forms/i-i-s-prilozhenie-2-справ-род-e';
import IISPrilozhenie_2СправСотрEForm from './forms/i-i-s-prilozhenie-2-справ-сотр-e';
import IISPrilozhenie_2СправУченEForm from './forms/i-i-s-prilozhenie-2-справ-учен-e';
import IISPrilozhenie_2КартДоступModel from './models/i-i-s-prilozhenie-2-карт-доступ';
import IISPrilozhenie_2СправДолModel from './models/i-i-s-prilozhenie-2-справ-дол';
import IISPrilozhenie_2СправКласModel from './models/i-i-s-prilozhenie-2-справ-клас';
import IISPrilozhenie_2СправРодModel from './models/i-i-s-prilozhenie-2-справ-род';
import IISPrilozhenie_2СправСотрModel from './models/i-i-s-prilozhenie-2-справ-сотр';
import IISPrilozhenie_2СправУченModel from './models/i-i-s-prilozhenie-2-справ-учен';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-2-карт-доступ': IISPrilozhenie_2КартДоступModel,
    'i-i-s-prilozhenie-2-справ-дол': IISPrilozhenie_2СправДолModel,
    'i-i-s-prilozhenie-2-справ-клас': IISPrilozhenie_2СправКласModel,
    'i-i-s-prilozhenie-2-справ-род': IISPrilozhenie_2СправРодModel,
    'i-i-s-prilozhenie-2-справ-сотр': IISPrilozhenie_2СправСотрModel,
    'i-i-s-prilozhenie-2-справ-учен': IISPrilozhenie_2СправУченModel
  },

  'application-name': 'Prilozhenie_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_2',
          title: 'Prilozhenie_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        администратор: {
          caption: 'Администратор',
          title: 'Администратор',
          'i-i-s-prilozhenie-2-справ-клас-l': {
            caption: 'Справ клас',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-сотр-l': {
            caption: 'Справ сотр',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-учен-l': {
            caption: 'Справ учен',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-род-l': {
            caption: 'Справ род',
            title: ''
          },
          'i-i-s-prilozhenie-2-карт-доступ-l': {
            caption: 'Карт доступ',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-дол-l': {
            caption: 'Справ дол',
            title: ''
          }
        },
        ученик: {
          caption: 'Ученик',
          title: 'Ученик',
          'i-i-s-prilozhenie-2-справ-дол-l': {
            caption: 'СправДолL',
            title: 'Справ дол'
          },
          'i-i-s-prilozhenie-2-справ-род-l': {
            caption: 'СправРодL',
            title: 'Справ род'
          },
          'i-i-s-prilozhenie-2-справ-сотр-l': {
            caption: 'СправСотрL',
            title: 'Справ сотр'
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-prilozhenie-2-справ-дол-l': {
            caption: 'СправДолL',
            title: ''
          }
        },
        'prilozhenie-2': {
          caption: 'Prilozhenie_2',
          title: 'Prilozhenie_2',
          'i-i-s-prilozhenie-2-справ-клас-l': {
            caption: 'Справ клас',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-дол-l': {
            caption: 'Справ дол',
            title: ''
          },
          'i-i-s-prilozhenie-2-карт-доступ-l': {
            caption: 'Карт доступ',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-сотр-l': {
            caption: 'Справ сотр',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-учен-l': {
            caption: 'Справ учен',
            title: ''
          },
          'i-i-s-prilozhenie-2-справ-род-l': {
            caption: 'Справ род',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-2-карт-доступ-l': IISPrilozhenie_2КартДоступLForm,
    'i-i-s-prilozhenie-2-справ-дол-l': IISPrilozhenie_2СправДолLForm,
    'i-i-s-prilozhenie-2-справ-клас-l': IISPrilozhenie_2СправКласLForm,
    'i-i-s-prilozhenie-2-справ-род-l': IISPrilozhenie_2СправРодLForm,
    'i-i-s-prilozhenie-2-справ-сотр-l': IISPrilozhenie_2СправСотрLForm,
    'i-i-s-prilozhenie-2-справ-учен-l': IISPrilozhenie_2СправУченLForm,
    'i-i-s-prilozhenie-2-карт-доступ-e': IISPrilozhenie_2КартДоступEForm,
    'i-i-s-prilozhenie-2-справ-дол-e': IISPrilozhenie_2СправДолEForm,
    'i-i-s-prilozhenie-2-справ-клас-e': IISPrilozhenie_2СправКласEForm,
    'i-i-s-prilozhenie-2-справ-род-e': IISPrilozhenie_2СправРодEForm,
    'i-i-s-prilozhenie-2-справ-сотр-e': IISPrilozhenie_2СправСотрEForm,
    'i-i-s-prilozhenie-2-справ-учен-e': IISPrilozhenie_2СправУченEForm
  },

});

export default translations;
