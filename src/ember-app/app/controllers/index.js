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
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-сотр-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-учен-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-учен-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-учен-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-род-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-род-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-карт-доступ-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-дол-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-дол-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-prilozhenie-2-справ-дол-l.title'),
            icon: 'tasks',
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
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-род-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-род-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-2-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-prilozhenie-2-справ-сотр-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-prilozhenie-2-справ-дол-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-prilozhenie-2-справ-дол-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-prilozhenie-2-справ-дол-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})