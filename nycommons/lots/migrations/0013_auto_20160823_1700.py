# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-08-23 21:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lots', '0012_lot_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lot',
            name='remote',
            field=models.BooleanField(default=False, help_text='Is this from a remote site?'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='remote_locked',
            field=models.BooleanField(default=False, help_text='When refreshing from the remote site, can we update this one?'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='remote_pk',
            field=models.PositiveIntegerField(blank=True, help_text='What is the id of this on the remote site?', null=True),
        ),
        migrations.AlterField(
            model_name='lot',
            name='remote_site',
            field=models.CharField(blank=True, help_text='Which remote site is this from?', max_length=50, null=True),
        ),
    ]