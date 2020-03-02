# -*- coding: utf-8 -*-
{
    'name': 'Pos Discount All',
    'summary': """Make discount for all product in list""",
    'version': '12.0.1.0',
    'description': """Allow user make discount for all product in list item....""",
    'author': 'Toai Nguyen',
    'company': 'OdooTek',
    'website': 'https://odootek.com',
    'category': 'Point of Sale',
    'depends': ['base', 'point_of_sale'],
    'license': 'AGPL-3',
    'data': [
        'views/assets.xml',
    ],
    'demo': [],
    'qweb': [
        'static/src/xml/pos_discount_all_template.xml',
    ],
    'installable': True,
    'auto_install': False,

}
