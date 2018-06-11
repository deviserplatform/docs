# Pages
Page is a basic building block of the Deviser Platform which contains modules and contents. To create a page go to **Admin -> Page Management** and add a page. Page always has three modes: View, Edit and Layout. To understand the concepts, [read more](../../concepts.md)
This section explains Edit mode of a page. 

## Edit page
Once the platform has been installed and configured with the database, login to the platform. After login, control bar appears on the top of the page as shown below.

<img src="../../assets/images/ViewMode.png">


The control bar has buttons to switch between three modes: View, Edit and Layout. Click Edit button to switch to edit mode. The edit mode of a page will be like this:

<img src="../../assets/images/EditMode.png">

In edit mode, users can add/remove contents/modules in a configured layout. Left pane of the page has all available content elements (content types) and modules. Center pane is also called stage of a page where users can drag-and-drop contents and modules into the stage. The stage always loads the configured layout. To configure layout, [read more] (layouts/index.md).

### Add Content/Module
To add a content/module, just pick a content or a module and drag-and-drop on any appropirate placeholder.

<video autoplay muted loop>
  <source src="../../assets/videos/Page_AddContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>


### Content/Module Permissions
User can set role based view/edit permissions for each module/content added in a page. By default, permissions are inherited from the page and those can be overridden by content/module permissions.

<img src="../../assets/images/ContentPermissions.png">

### Add/Update properties
Each module/content can have one or more properties. Value of a property can change the behaviour of a module/content in view mode. Properties can be updated by simply seleting module/content and changing value in property pane and saving it as shown below.

<video autoplay muted loop>
  <source src="../../assets/videos/Page_UpdateProperties.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

### Remove a content/module
Contents/modules can be removed by selecting a content/module, drag-and-drop on the trash can as shown below.

<video autoplay muted loop>
  <source src="../../assets/videos/Page_RemoveContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

### Edit content/module
Any contents or modules (if edit action is configured), can be edited by clicking the edit button of a content/module as shown below. The changes will be reflected in view mode.

<video autoplay muted loop>
  <source src="../../assets/videos/Page_EditContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>