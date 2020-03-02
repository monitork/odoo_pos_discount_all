odoo.define('pos_discount_all.popups', function (require) {
    "use strict";
    let gui = require('point_of_sale.gui');
    let PopupWidget = require('point_of_sale.popups');

    let DiscountPopupWidget = PopupWidget.extend({
        template: 'DiscountPopupWidget',
        show: function (options) {
            options = options || {};
            this._super(options);

            this.renderElement();
            this.$('input,textarea').focus();
        },
        click_confirm: function () {
            var value = this.$('input,textarea').val();
            this.gui.close_popup();
            if (this.options.confirm) {
                this.options.confirm.call(this, value);
            }
        },
    });
    gui.define_popup({name: 'discountall', widget: DiscountPopupWidget});
});