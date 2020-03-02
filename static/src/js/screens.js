odoo.define('pos_discount_all.screens', function (require) {
    "use strict";
    var screens = require('point_of_sale.screens');
    var DiscountAllButton = screens.ActionButtonWidget.extend({
        template: 'DiscountALLButton',
        button_click: function () {
            let self = this;
            this.gui.show_popup('discountall', {
                'title': _t('Discount All (%)'),
                'value': 0,
                'confirm': function (val) {
                    val = Math.round(Math.max(0, Math.min(100, val)));
                    self.confirm_discount(val);
                },
            },)
        },
        confirm_discount: function (number) {
            console.log(number);
            if (number > 100 || number < 0) {
                this.gui.show_popup('error', {
                    title: _t("Error discount"),
                    body: _t("The discount only in arrange 0 to 100. Please try again."),
                });
                return;
            }
            var order = this.pos.get_order();
            var lines = order.get_orderlines();
            var i = 0;
            var discount = number / 100.0;
            console.log('discount', discount);
            if (discount > 0) {
                while (i < lines.length) {
                    var line = lines[i];
                    line.set_discount(discount);
                    // var product = line.get_product();
                    //Xoá
                    // order.remove_orderline(line);
                    // Thêm lại
                    // console.log('price_discount',price_discount);
                    // order.add_product(product, {
                    //     price: price_discount,
                    //     extras: {
                    //         price_manually_set: true,
                    //     },
                    // });
                    i++;
                }
            }
        }
    });
    screens.define_action_button({
        'name': 'discountall',
        'widget': DiscountAllButton,
        // 'condition': function () {
        // Để đk -> không hiện button
        //     return this.pos.pricelists.length > 1;
        // },
    });
    return {
        DiscountButton: DiscountAllButton,
    }
})
;