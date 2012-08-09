#!/usr/bin/env python
# -*- coding: utf-8 -*-

site = {
    "name": "Neil's Blog",
    "url": "http://yaozhifeng.net",
    # "prefix": "blog",
}

source = 'content'
output = 'deploy'
static_output = 'deploy/static'
static_prefix = '/static/'

permalink = '{{date.year}}/{{filename}}.html'
perpage = 30
feedcount = 20
timezone = "+08:00"

author = 'Neil'  # choose a nickname
authors = {
    'Neil': {
        'name': 'Neil Yao',
        'email': 'yaozhifeng@gmail.com',
        'website': 'http://yaozhifeng.net',
    },
}


theme = 'default'
# theme variables are defined by theme creator
theme_variables = {
    'disqus': 'neil-blog',
    'analytics': 'UA-17763569-1',

    'navigation': [
        ('Blog', '/archive.html'),
        ('About', '/about.html'),
    ],
    'elsewhere': [
        ('GitHub', 'https://github.com/yaozhifeng'),
        ('Twitter', 'https://twitter.com/yaozhifeng'),
        ('Douban', 'http://www.douban.com/people/yaozhifeng/'),
    ],
}

# http://liquidluck.readthedocs.org/en/latest/config.html#readers
# readers = {}
# readers_variables = {}

# http://liquidluck.readthedocs.org/en/latest/config.html#writers
# writers = {}
writers_variables = {
    'archive_output': 'archive.html',
}


# template_variables = {}
# template_filters = {}
