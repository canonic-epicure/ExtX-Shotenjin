Name
====

ExtX.Shotenjin - Some clever yet compact description


SYNOPSIS
========

        var container = new ExtX.Shotenjin.Container({
        
            template : {
                /*tj
                
                    Hello [% world %]
                
                tj*/
            },
            
            templateData : {
                world   : 'World!'
            }
        })
        
        

If you are reading this file as README from github, you may want to open [this link](http://samuraijack.github.com/ExtX-Shotenjin) instead. 


INSTALLATION
============

From `npm`:
    
    > [sudo] npm install extx-shotenjin

Tarballs are available for downloading at: <http://search.npmjs.org/#/extx-shotenjin>


SETUP
=====

In NodeJS:

    require('task-joose-nodejs')
    require('extx-shotenjin')
    
    
In browsers (assuming you've completed the 3.1 item from this [document](http://joose.github.com/Joose/doc/html/Joose/Manual/Installation.html)):

    <script type="text/javascript" src="/jsan/Task/Joose/Core.js"></script>
    <script type="text/javascript" src="/jsan/Task/ExtX/Shotenjin/Core.js"></script>



DESCRIPTION
===========

`ExtX.Shotenjin` is a role for ExtJS container subclass, which uses the [Shotenjin](http://samuraijack.github.com/Shotenjin/) template for rendering.

This package also contains the `ExtX.Shotenjin.Container` and `ExtX.Shotenjin.Panel` classes which are subclasses of according ExtJS components
and implements `ExtX.Shotenjin` role.



ATTRIBUTES
==========

### template

> `Shotenjin.Template template`

> Template to render. Can be provided as `Shotenjin.Template` instance or as the sources (see synopsys)


### templateData

> `Object templateData`

> Object which will be passed to `render` method of the template.


### templateClass

> `Class templateClass`

> Template class to use when instantiating the template from sources. Defaults to `Shotenjin.Template`.


METHODS
=======

### refresh

> `refresh(stash)`

> This method will update the content of the component using the new data, passed as `stash` argument.



GETTING HELP
============

This extension is supported via github issues tracker: <http://github.com/SamuraiJack/ExtX-Shotenjin/issues>

For general Joose questions you can also visit [#joose](http://webchat.freenode.net/?randomnick=1&channels=joose&prompt=1) 
on irc.freenode.org or mailing list at: <http://groups.google.com/group/joose-js>
 


SEE ALSO
========

Shotenjin template engine: [Shotenjin](http://samuraijack.github.com/Shotenjin/)

Web page of this module: <http://github.com/SamuraiJack/ExtX-Shotenjin/>

General documentation for Joose: <http://joose.github.com/Joose>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at <http://github.com/SamuraiJack/ExtX-Shotenjin/issues>



AUTHORS
=======

Nickolay Platonov <nplatonov@cpan.org>





COPYRIGHT AND LICENSE
=====================

This software is Copyright (c) 2011 by Nickolay Platonov.

This is free software, licensed under:

  The GNU Lesser General Public License, Version 3, June 2007
