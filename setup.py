# -*- coding: utf-8 -*-
from setuptools import setup
from sphinx_redactor_theme import __version__


setup(
    name='sphinx_redactor_theme',
    version='0.0.2.dev0',
    url='https://github.com/testthedocs/sphinx_redactor_theme',
    license='MIT',
    author='TestTheDocs Community',
    author_email='info@testthedocs.org',
    description='Sphinx theme for redactor docs.',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['sphinx_redactor_theme'],
    package_data={
        'sphinx_redactor_theme': [
            'theme.conf',
            '*.html',
            'static/css/*.css',
            'static/js/*.js',
            'static/font/*.*'
        ]
    },
    entry_points={
        'sphinx.html_themes': [
            'sphinx_redactor_theme = sphinx_redactor_theme',
        ]
    },
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
