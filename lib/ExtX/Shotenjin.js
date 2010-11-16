Role('ExtX.Shotenjin', {
    
    /*VERSION,*/
    
    use : 'Shotenjin.Joosed.Template',
    
    requires : [ 'getContentTarget' ],
    
    
    has : {
        templateClass       : Joose.I.FutureClass('Shotenjin.Joosed.Template'),
        templateSources     : null,
        templateData        : null,
        
        template            : {
            lazy : function () {
                var sources = this.templateSources
                
                if (typeof sources == 'object') sources = sources.sources
                
                return new this.templateClass({
                    sources : sources
                })
            }
        }
    },

    
    methods : {
        
        refresh : function (stash) {
            if (!this.rendered) return
            
            this.getContentTarget().update(this.getTemplate().render(stash))
        }
    },
    
    
    after : {
        
        onRender : function () {
            this.getContentTarget().update(this.getTemplate().render(this.templateData))
        }
        
    }
    
})
