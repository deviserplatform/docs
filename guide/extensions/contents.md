# Contents
Contents in Deviser Platform are dynamic and users can create and configure any number of content types that can be used anywhere across the platform. This article explains process of creating and configuring content types.

## Content Types
Content type is schema of a content and it has the information about the fields, field types and properties.

### Create Content Type
To create a content type navigate to **Admin (click the Deviser logo on top left corner) -> Extensions -> Content Types** Type which opens management view of content types as shown below.

<video class="video-popup" autoplay muted loop>
  <source src="../../assets/videos/Content_OpenContentManagement.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>


1. Click **New** to create new content type
2. Enter the **Name**, **Label** and **Icon** for a content type
3. Make sure to activate the content type by checking **Is Active** check box
4. Chose the type of the content. For list (more one items) type, select **Is List** check box.
5. Select the **Properies** that could change the behaviour of the content type when added to a page. For example, **css_class**. 
6. Add required files in **Fields** section.

>[!NOTE]
>Name of the content type should be unique.

<img class="img-popup" src="../../assets/images/Content_ContentManagementEdit.png">

Here, content types can be created, updated and activated/deactivated. For each content type, one or more properties can be added as shown below. Creating and managing properties are explained in [properties](properties.md) section.


>[!NOTE]
>Here, name of the content type should exactly match with the template nams that will be explained in next section.

## Content Templates
Each content type has a content template which are located in `[ApplicationRoot]/Sites/Default/Themes/Skyline/ContentTypes/View` as shown below. 

<img class="img-popup" src="../../assets/images/Content_ContentTemplates.png">

Skyline is the default theme shipped with platform.

A content template is based on Razor view which is used to render content as the html. 

<!-- [!code[Main](../../src/Sites/Default/Themes/Skyline/ContentTypes/Edit/Slider.cshtml?range=1-1)]

In the edit template of slider content type is shown below.

[!code[Main](../../src/Sites/Default/Themes/Skyline/ContentTypes/Edit/Slider.cshtml?range=52-61)]

This slider edit template specifies **title**(text), **description**(multiline text), **imageUrl** and **imageAltText**(image) fields. `dev-image-manager` is an AngularJs component (directives) which is used to upload/select image to the content type.

In addition, the edit template provides possibilities to specify the preview template. The preview of a content type is used to display the content preview in edit mode of a page before editing a content. 

[!code[Main](../../src/Sites/Default/Themes/Skyline/ContentTypes/Edit/Slider.cshtml?range=2-17)]

The complete code of slider edit template is shown below.

[!code[Main](../../src/Sites/Default/Themes/Skyline/ContentTypes/Edit/Slider.cshtml?range=1-)] -->

<!-- ### View Template
The view template is based on Razor template which is used to render content as the html. The following example uses slider content and property values to render the slider based on <a href="http://idangero.us/swiper/" target="_blank">Swiper</a>.

[!code[Main](../../src/Sites/Default/Themes/Skyline/ContentTypes/View/Slider.cshtml?range=1-)] -->