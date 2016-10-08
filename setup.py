# -*- coding: utf-8 -*-
from setuptools import setup
from jast import __version__


setup(
    name='jast',
    version=__version__,
    url='https://github.com/carloratm/jast/',
    license='MIT',
    author='Carlo Ascani',
    author_email='carlo.ratm@gmail.com',
    description='Just another theme for Sphinx.',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['jast'],
    package_data={'jast': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/font/*.*'
    ]},
    include_package_data=True,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: BSD License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
