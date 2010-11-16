StartTest(function(t) {
    
    var async0 = t.beginAsync()
    
    use('ExtX.Shotenjin', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(ExtX.Shotenjin, "ExtX.Shotenjin is here")
        
        t.endAsync(async0)
        
        t.done()
    })
})    
