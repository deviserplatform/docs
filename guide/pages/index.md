# Page
Page is a basic building block of the Deviser Platform where it can host a UI model of the [Deviser Admin](../deviser-admin/index.md) or view of the [Modules](../extensions/modules.md) and [Contents](../extensions/contents.md). A page can be clasified into three types:

1. Admin
2. Standard 
3. URL

## Admin Page
An admin page can host a UI model defined in a module. 
## Standard Page
A standard page can host contents and modules together. Page of this type has three modes:

- **View:** mode displays hosted contents and modules in a configured layout.
- **Edit:** mode shows the edit view of a page where page editor can add/remove contents/modules in a configured layout.
- **Layout:** mode aka **Layout Designer** which allows users to create custom layouts using layout types (placeholders) and assign it to the current page.

### Edit page
Once the platform is installed, login to as an administrator. After login, control bar appears on the top of the page as shown below.

<img class="img-popup" src="../../assets/images/ViewMode.png">


The control bar has buttons to switch between three modes: View, Edit and Layout. Click the **Edit** button to switch to edit mode. The edit mode of a page will be like this:

<img class="img-popup" src="../../assets/images/EditMode.png">

In the edit mode, users can add/remove/move contents/modules in a configured layout. Left pane of the page has all available content elements (content types) and modules. Center pane is also called stage of a page where users can drag-and-drop contents and modules into the stage. The stage always loads the configured layout. To configure layout, [read more](../extensions/layouts.md).

### Add Content/Module
To add a content/module, just pick a content or a module and drag-and-drop on any appropirate placeholder.

<video class="video-popup"  autoplay muted loop>
  <source src="../../assets/videos/Page_AddContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>


### Content/Module Permissions
User can set role based view/edit permissions for each module/content added in a page. By default, permissions are inherited from the page and those can be overridden by content/module permissions.

<img class="img-popup" src="../../assets/images/ContentPermissions.png">

### Add/Update properties
Each module/content can have one or more properties. Value of a property can change the behaviour of a module/content in view mode. Properties can be updated by simply seleting module/content and changing value in property pane and saving it as shown below.

<video class="video-popup"  autoplay muted loop>
  <source src="../../assets/videos/Page_UpdateProperties.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

### Remove a content/module
Contents/modules can be removed by selecting a content/module, drag-and-drop on the trash can as shown below.

<video class="video-popup"  autoplay muted loop>
  <source src="../../assets/videos/Page_RemoveContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

### Edit content/module
Any content or module (if edit action is configured), can be edited by clicking the edit button of a content/module as shown below. The changes will be reflected in view mode.

<video class="video-popup"  autoplay muted loop>
  <source src="../../assets/videos/Page_EditContent.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

## URL
A URL page simply redirects to a internal or external URL