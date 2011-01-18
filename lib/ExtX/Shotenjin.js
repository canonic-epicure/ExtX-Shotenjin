Role('ExtX.Shotenjin', {
    
    /*VERSION,*/
    
    use : 'Shotenjin.Template',
    
    requires : [ 'getContentTarget' ],
    
    
    has : {
        templateClass       : Joose.I.FutureClass('Shotenjin.Template'),
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
    
    
    override : {
        BUILD : function (attrs) {
            
            if (attrs.template != null) {
                
                attrs.templateSources = attrs.template
                
                delete attrs.template
            }
            
            return attrs
        }
    },

    
    methods : {
        
        refresh : function (stash) {
            this.templateData = stash
            
            if (!this.rendered) return
            
            this.getContentTarget().update(this.getTemplate().render(stash))
        }
    },
    
    
    before : {
        
        initComponent : function () {
            var template    = this.template
            
            if (!this.hasOwnProperty('template') && template)
                if (Joose.O.isInstance(template)) 
                    this.template = template
                else
                    this.templateSources = template
        }
    },
    
    
    after : {
        
        onRender : function () {
            this.getContentTarget().update(this.getTemplate().render(this.templateData))
        }
        
    }
    
})
