# Themes
Add some content...

# How to create a theme
## Client Dependency
The client dependeny is used to manage and load the CSS and JavaScripts required by the pages, modules and contents. To load the CSS and JavaScripts require tag helpers are used. 

For example, this code

[!code[Main](../../src/Sites/Default/Themes/Skyline/Default.cshtml?range=15-15)]

loads the `/lib/font-awesome/css/font-awesome.css`CSS in head section of the pages used by **Default.cshtml** theme.

Similarly, JavaScripts can be loaded in head, body begin and body end sections. 

For example this code 
[!code[Main](../../src/Sites/Default/Themes/Skyline/Default.cshtml?range=15-15)]

loads the `/lib/jquery/dist/jquery.js` JavaScript in head section of the pages used by **Default.cshtml** theme.

The complete example of the **Default.cshtml** is shown below

[!code[Main](../../src/Sites/Default/Themes/Skyline/Default.cshtml?range=1-)]

## Other Components
In additions to  Menu, BreadCrumb, Language switcher