import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.администратор.caption'),
          title: i18n.t('forms.application.sitemap.администратор.title'),
          children: [{
            link: 'i-i-s-prilozhenie-2-справ-клас-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-клас-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-клас-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-дол-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-дол-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-дол-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-карт-доступ-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-сотр-l.title'),
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-учен-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-учен-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-учен-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-род-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-род-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ученик.caption'),
          title: i18n.t('forms.application.sitemap.ученик.title'),
          children: [{
            link: 'i-i-s-prilozhenie-2-справ-дол-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-дол-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-дол-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-род-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-род-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-сотр-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})