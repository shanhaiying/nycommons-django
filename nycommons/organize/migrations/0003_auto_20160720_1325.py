# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-20 17:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organize', '0002_watcher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organizer',
            name='email',
            field=models.EmailField(max_length=254, null=True, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='watcher',
            name='email',
            field=models.EmailField(max_length=254, null=True, verbose_name='email'),
        ),
    ]
