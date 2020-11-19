/**
 * Created by msantans on 21/07/2020.
 */

({

    init : function (component, event, helper) {

        component.set( 'v.personalRange', 'Month' );
        component.set( 'v.teamRange', 'Month' );

    },

    showListOptionPersonal : function (component, event, helper) {

        let personalList = component.find( 'personalOptionList' );
        $A.util.toggleClass( personalList, 'slds-hide' );


    },

    checkSelectedPersonal : function (component, event, helper) {

        let personalList = component.find( 'personalOptionList' );
        let weekly = component.find( 'pSelectWeek' );
        let monthly = component.find( 'pSelectMonth' );

        $A.util.toggleClass( personalList, 'slds-hide' );
        $A.util.toggleClass( weekly, 'disable' );
        $A.util.toggleClass( monthly, 'disable');

        if( $A.util.hasClass( monthly, 'disable') ) {
            component.set( 'v.personalRange', 'Month' );
            component.set( 'v.isPersonalMonthly', true );
        } else {
            component.set( 'v.personalRange', 'Week' );
            component.set( 'v.isPersonalMonthly', false );
        }

    }

});