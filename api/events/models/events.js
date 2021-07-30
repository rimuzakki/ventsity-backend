const slugify = require('slugify');
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        const randomCode = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
        const path = slugify(data.title, {lower: true});
        data.endUrl = `${path}--${randomCode}`;
        data.uniqueCode = randomCode;
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        const randomCode = data.uniqueCode !== null ? data.uniqueCode : Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
        const path = slugify(data.title, {lower: true});
        data.endUrl = `${path}--${randomCode}`;
        data.uniqueCode = randomCode;
      }
    },
  },
};
