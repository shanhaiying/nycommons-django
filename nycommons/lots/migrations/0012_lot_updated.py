# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-08-18 21:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lots', '0011_auto_20160814_1426'),
    ]

    operations = [
        migrations.AddField(
            model_name='lot',
            name='updated',
            field=models.DateTimeField(auto_now=True, help_text=b'When this lot was last updated', null=True, verbose_name='date updated'),
        ),
    ]
