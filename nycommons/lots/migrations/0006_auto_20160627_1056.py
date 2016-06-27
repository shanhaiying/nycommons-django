# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-27 14:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lots', '0005_lot_priority'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lot',
            options={'ordering': ['name'], 'permissions': (('view_preview', 'Can view preview map'),)},
        ),
        migrations.AddField(
            model_name='lot',
            name='organizing',
            field=models.BooleanField(default=False),
        ),
    ]
