<aura:application extends="force:slds">

    <ltng:require styles="{!$Resource.brand_color}" />

    <div class="slds-p-around_medium">
        <h1 class="application">Curso front-end</h1>
        <div class="slds-m-top_medium">
            <div class="slds-m-vertical_small">
                <c:aula01></c:aula01>
            </div>
            <div class="slds-m-vertical_small">
                <c:aula02></c:aula02>
            </div>
            <div class="slds-m-vertical_small">
                <c:aula03></c:aula03>
            </div>
        </div>
    </div>
</aura:application>