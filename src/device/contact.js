define("device",function(module) {
    var lightapp = this;
    //定义 contact 空间，clouda.device.contact 支持退化
    var it = module.contact = {};
    
    /**
     * @object contact
     * @memberof clouda.device
     * @instance
     * @namespace clouda.device.contact
     */
    
    var create = new delegateClass("device","contact","create");
    var find =new delegateClass("device","contact","find");
    
    module.CONTACT_COLUMN={
        ID:"id",
        DISPLAYNAME:"displayName",
        NICKNAME:"nickname",
        PHONE:"phoneNumbers",
        EMAIL:"emails",
        ADDRESS:"addresses",
        ORGANIZATION:"organizations",
        BIRTHDAY:"birthday",
        PHOTO:"photos",
        CATEGORY:"categories",
        IM:"ims",
        URL:"urls",
        NOTE:"note",
  
    };
    /*
     * Returns an array of Contacts matching the search criteria.
     *
     * @function find
     * @memberof clouda.device.contact
     * @instance
     *
     * @param fields that should be searched
     * @param {{}} options
     * @param {Function} options.onsuccess
     * @param {Function} options.onfail
     * @param {string} options.filter
     * @param {boolean} options.multiple
     * @return null
     */
    it.find = function(fields,options){
        installPlugin("device", function(device) {
           
            device.contact.find(fields,function(contact_array){
                if ( Array.isArray(contact_array) ){
                    options.onsuccess.apply(this,arguments);
                }else{
                    lightapp.error(ErrCode.CONTACT_FIND_ERR,ErrCode.UNKNOW_CALLBACK,options);
                }
            },function(nativeErr){
                lightapp.error(ErrCode.CONTACT_FIND_ERR,nativeErr,options);
            },options);
        });
        
        
    };
    
    
    it.insert = function(fields, options) {
        installPlugin("device", function(device) {
            var person = device.contact.create();

            for (var i in fields) {
                person[i] = fields[i];
            }
            person.save(function() {
                options.onsuccess.apply(this, arguments);
            }, function(errno) {
                lightapp.error(ErrCode.CONTACT_FIND_ERR, errno, options);
            });
        });
    }; 

    
    it.update = function(id,fields,options){
        installPlugin("device", function(device) {
           var myoptions = {"multiple":false,"filter":id};
            device.contact.find([module.CONTACT_COLUMN.ID],function(contacts){
                if (contacts && contacts[0]){
                    for (var i in fields){
                        contacts[0][i] = fields[i];
                    }
                    contacts[0].save(function(){
                        options.onsuccess.apply(this,arguments);
                    },function(errno){
                        lightapp.error(ErrCode.CONTACT_FIND_ERR,errno,options);
                    });
                }else{
                    lightapp.error(ErrCode.CONTACT_FIND_ERR,ErrCode.UNKNOW_CALLBACK,options);
                }
            },function(nativeErr){
                lightapp.error(ErrCode.CONTACT_FIND_ERR,nativeErr,options);
            },myoptions);
        });
    };
    
    it.remove = function(id,options){
        installPlugin("device", function(device) {
           var myoptions = {"multiple":false,"filter":id};
            device.contact.find([module.CONTACT_COLUMN.ID],function(contacts){
                if (contacts && contacts[0]){
                    contacts[0].remove(function(){
                        options.onsuccess.apply(this,arguments);
                    },function(errno){
                        lightapp.error(ErrCode.CONTACT_FIND_ERR,errno,options);
                    });
                }else{
                    lightapp.error(ErrCode.CONTACT_FIND_ERR,ErrCode.UNKNOW_CALLBACK,options);
                }
            },function(nativeErr){
                lightapp.error(ErrCode.CONTACT_FIND_ERR,nativeErr,options);
            },myoptions);
        });
    };
    it.count = function(options){
        lightapp.error(ErrCode.NOT_FINISH,ErrCode.NOT_FINISH,options);
    };
    it.getCursor = function(cursorOffset,options){
        lightapp.error(ErrCode.NOT_FINISH,ErrCode.NOT_FINISH,options);
    };
});