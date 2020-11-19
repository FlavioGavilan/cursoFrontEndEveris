/**
 * Created by msantans on 15/07/2020.
 */

({
    openTab : function(component, event, helper) {
        alert('clicou')
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            pageReference: {
                "type": "standard__component",
                "attributes": {
                    "componentName": "MyPromo"
                },
                "state": {
                    "myAttr": "attrValue"
                }
            },
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
            }).then(function(tabInfo) {
                console.log("The recordId for this tab is: " + tabInfo.recordId);
            });
        }).catch(function(error) {
            console.log(error);
        });
    }
})