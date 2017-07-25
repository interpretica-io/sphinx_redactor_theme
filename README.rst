=====================
Sphinx Redactor Theme
=====================

`Sphinx <https://http://www.sphinx-doc.org/en/stable/index.html>`_ theme based on `jast <https://github.com/carloratm/jast>`_.

.. image:: docs/_static/redactor_theme.png
   :alt: Image of theme

Installation
============

To install this theme, run:

.. code-block:: bash

   pip install sphinx_redactor_theme

Usage
=====

To use this theme, add to your docs ``conf.py``:

.. code-block:: python

   import sphinx_redactor_theme
   html_theme = 'sphinx_redactor_theme'
   html_theme_path = [sphinx_redactor_theme.get_html_theme_path()]

Contribute
==========

- `Issue Tracker <https://github.com/testthedocs/sphinx_redactor_theme/issues/>`_
- `Source Code <https://github.com/testthedocs/sphinx_redactor_theme/>`_

License
=======

The project is licensed under the MIT License.
