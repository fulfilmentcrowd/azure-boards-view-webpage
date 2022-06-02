# View Wepage - A custom work item control for Azure Boards

### Usage

This control allows a webpage to be viewed within a window on a workitem form.  The URL to the webpage can be dynamically altered to contain values taken from the associated workitem. This control is ideal for showing small widgets hosted on external websites, though can be used for opening any static url also.

Within the options for the control are these selections:

URL: Mandatory field containing the URL to the website that will be opened. Within the url any dynamic values can be set within braces, e.g.: `https://mywebsite.com/workitemwidget/{field1}`

Field1: This optional dropdown control allows selection of all custom fields associated with this workitem. The value of the selected field will be used to replace `{field1}` in the dynamic url with the actual value of the field. Eg, if we select `ID` in this field, then for workitem 1234 the value `1234` will be used to change the url from `https://mywebsite.com/mywidget?workitemid={field1}` to `https://mywebsite.com/mywidget?workitemid=1234`

Field2/Field3: These work in exactly the same way as Field1, and replace `{field2}` and `{field3}` values in the url field with dynamic values.