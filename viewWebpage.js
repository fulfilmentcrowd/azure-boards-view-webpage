
async function openUrl (workItemServices) {

    workItemServices.WorkItemFormService.getService().then(async function (service) {
        var url = VSS.getConfiguration().witInputs.Url;
        
        var field1Name = VSS.getConfiguration().witInputs.Field1;
        await service.getFieldValues([VSS.getConfiguration().witInputs.Field1]).then(function (value) {
            var field1Value = value[field1Name];
            url = url.replace('{field1}', field1Value);
        });

        var field2Name = VSS.getConfiguration().witInputs.Field2;
        await service.getFieldValues([VSS.getConfiguration().witInputs.Field2]).then(function (value) {
            var field2Value = value[field2Name];
            url = url.replace('{field2}', field2Value);
        });

        var field3Name = VSS.getConfiguration().witInputs.Field3;
        await service.getFieldValues([VSS.getConfiguration().witInputs.Field3]).then(function (value) {
            var field3Value = value[field3Name];
            url = url.replace('{field3}', field3Value);
        });

        return url;

    }).then((url) => {

        var controlHeight = Number(VSS.getConfiguration().witInputs.ControlHeight);
        if (controlHeight == undefined) {
            controlHeight = 500;
        }
        VSS.resize(null, controlHeight);

        window.location.href = url;
    });
};

VSS.require(["TFS/WorkItemTracking/Services"], function(workItemServices) {
    VSS.register(VSS.getContribution().id, () => {
        return {
            onLoaded: () => {
                openUrl(workItemServices);
            },
            onSaved: () => {
                openUrl(workItemServices);
            },
            onRefreshed: () => {
                openUrl(workItemServices);
            }
        }
    });
    VSS.notifyLoadSucceeded();
});

