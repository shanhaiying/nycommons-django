# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-08-13 21:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0007_auto_20160813_1158'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pathwaylistcontent',
            name='parent',
        ),
        migrations.DeleteModel(
            name='PathwayListContent',
        ),
    ]
