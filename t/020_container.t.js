StartTest(function(t) {
    
    var async0 = t.beginAsync()
    
    use([ 'ExtX.Shotenjin.Container' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(ExtX.Shotenjin.Container, "'ExtX.Shotenjin.Container' is here")
        t.ok(Shotenjin.Template, "'Shotenjin.Template' is here")
        
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation")
        
        var cont = new ExtX.Shotenjin.Container({
            
            templateData : {
                name : 'name1',
                value : 'value1'
            },
            
            template : new Shotenjin.Template({
                /*tj
                    name1 : [% name %]
                    value1 : [% value %]
                tj*/
            })
        })
        
        t.ok(cont, "'ExtX.Shotenjin.Container' was successfully instantiated")
        

        //==================================================================================================================================================================================
        t.diag("Rendering")
        
        cont.render(Ext.getBody())
        
        t.ok(cont.rendered && cont.getEl().dom, 'Container was rendered')
        
        t.ok(/name1 : name1\s+value1 : value1/.test(cont.getEl().dom.innerHTML), 'Content of the container is correct')
        
        
        
        //==================================================================================================================================================================================
        t.diag("Instantiation from sources")
        
        var cont2 = new ExtX.Shotenjin.Container({
            
            templateData : {
                name : 'name2',
                value : 'value2'
            },
            
            template : {
                /*tj
                    name2 : [% name %]
                    value2 : [% value %]
                tj*/
            }
        })
        
        t.ok(cont2, "'ExtX.Shotenjin.Container' was successfully instantiated")
        

        //==================================================================================================================================================================================
        t.diag("Rendering")
        
        cont2.render(Ext.getBody())
        
        t.ok(cont2.rendered && cont2.getEl().dom, 'Container was rendered')
        
        t.ok(/name2 : name2\s+value2 : value2/.test(cont2.getEl().dom.innerHTML), 'Content of the container is correct')
        
        
        t.endAsync(async0)
        t.done()
    })
    
})