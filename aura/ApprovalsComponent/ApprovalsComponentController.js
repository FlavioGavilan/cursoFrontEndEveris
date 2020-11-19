/**
 * Created by msantans on 16/07/2020.
 */

({

    decline : function (component,event) {

        let declineSection = component.find( 'declineSection' );
        let declineIcon = component.find( 'declineIcon' );

        $A.util.toggleClass( declineSection, 'slds-is-open' );
        $A.util.toggleClass( declineIcon, 'i-arrow-rotate' );

    },

    approved : function (component,event) {

        let approvedSection = component.find( 'approvedSection' );
        let approvedIcon = component.find( 'approvedIcon' );

        $A.util.toggleClass( approvedSection, 'slds-is-open' );
        $A.util.toggleClass( approvedIcon, 'i-arrow-rotate' );

    },

    modalHandler : function(component, event) {

        if( component.get( 'v.isModalOpen' ) === true ) {
            component.set( 'v.isModalOpen', false )
        } else {
            component.set( 'v.isModalOpen', true )
        }

    }

});