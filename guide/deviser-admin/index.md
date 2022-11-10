# Deviser Admin
Deviser Admin is a core feature of Deviser Platform to build admin user interfaces with just few lines of code. Admin UIs are generated based on an UI model that can be built using fluent API. In addition to the Admin UI, web service (web APIs) are also generated for the UI. An UI model can be created either directly from an Entity Framework (EF) Core data context or from an implementation of admin service. EF Core Data context method is a basic approach where CRUD operations for an Admin UI can be built. On other hand, customized UI model can be built using an admin service. These two approaches are explained in the following sections.

## Database Context
In this approach, Deviser Admin uses an EF Core dabase context to build Admin UIs. The below diagram illustrates the datbase context approach.

<svg width="500" version="1.1" viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <metadata>
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <g transform="translate(-20.465 -25.275)">
  <rect x="96.164" y="61.428" width="41.746" height="29.045" fill="none" stroke="#000" stroke-width=".95512"/>
  <g transform="matrix(.57958 0 0 .55556 166.46 58.856)">
   <path d="m53 41v-12h-22v-10h7v-16h-16v16h7v10h-22v12h-7v16h16v-16h-7v-10h20v10h-7v16h16v-16h-7v-10h20v10h-7v16h16v-16zm-29-36h12v12h-12zm-10 50h-12v-12h12zm22 0h-12v-12h12zm22 0h-12v-12h12z"/>
  </g>
  <g id="API" transform="matrix(.4999 0 0 .4999 231.71 34.275)">
   <path d="m58 54a4 4 0 0 0-3.86 3h-3.14a1 1 0 0 1-1-1v-7h2.14a4 4 0 1 0 0-2h-2.14v-15h3a9 9 0 0 0 0-18h-2.06a8.977 8.977 0 0 0-14.18-6.3 14.982 14.982 0 0 0-26.45 6.34 8.993 8.993 0 0 0 0.69 17.96h3v13h-2.14a4 4 0 1 0 0 2h2.14v9a1 1 0 0 1-1 1h-3.14a4 4 0 1 0 0 2h3.14a3.009 3.009 0 0 0 3-3v-9h8a3.009 3.009 0 0 0 3-3v-12h4v22.14a4 4 0 1 0 2 0v-22.14h4v14a3.009 3.009 0 0 0 3 3h8v7a3.009 3.009 0 0 0 3 3h3.14a3.994 3.994 0 1 0 3.86-5zm-2-8a2 2 0 1 1-2 2 2.006 2.006 0 0 1 2-2zm-48 2a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2zm-2 12a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2zm19-16a1 1 0 0 1-1 1h-8v-13h9zm9 14a2 2 0 1 1-2-2 2.006 2.006 0 0 1 2 2zm14-11h-8a1 1 0 0 1-1-1v-14h9zm-37-17a7 7 0 0 1 0-14h0.12a7.018 7.018 0 0 1 6 3.61l1.76-0.97a9.086 9.086 0 0 0-6.55-4.54 13 13 0 0 1 25.64 1.97l1.99-0.14a14.907 14.907 0 0 0-2.07-6.58 7 7 0 0 1 10.24 9.04l1.74 0.97a9.005 9.005 0 0 0 1.07-3.36h2.06a7 7 0 1 1 0 14zm47 30a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2z"/>
   <path d="m8 23a3 3 0 0 1 3-3v-2a5 5 0 0 0 0 10h6v-2h-6a3 3 0 0 1-3-3z"/>
   <path d="m25.99 18.89a0.989 0.989 0 0 0-0.99-0.89h-4a0.989 0.989 0 0 0-0.99 0.89l-1 9 1.98 0.22 0.35-3.11h3.32l0.35 3.11 1.98-0.22zm-4.43 4.11 0.34-3h2.2l0.34 3z"/>
   <path d="m36 18h-6a1 1 0 0 0-1 1v9h2v-4h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-4v-2h4z"/>
   <path d="m43 20v6h2v2h-6v-2h2v-6h-2v-2h6v2z"/>
  </g>
  <g transform="matrix(.060484 0 0 .060484 33.795 60.523)">
   <path d="m448 88c0-49.344-87.848-88-200-88s-200 38.656-200 88c9e-3 2.686 0.277 5.365 0.8 8h-0.8v312c0 49.344 87.848 88 200 88s200-38.656 200-88v-312h-0.8c0.523-2.635 0.791-5.314 0.8-8zm-16 320c0 34.768-73.936 72-184 72s-184-37.232-184-72v-44.92c30.24 31.408 100.35 52.92 184 52.92s153.76-21.512 184-52.92zm0-80c0 34.768-73.936 72-184 72s-184-37.232-184-72v-44.92c30.24 31.408 100.35 52.92 184 52.92s153.76-21.512 184-52.92zm0-80c0 34.768-73.936 72-184 72s-184-37.232-184-72v-44.92c30.24 31.408 100.35 52.92 184 52.92s153.76-21.512 184-52.92zm0-80c0 34.768-73.936 72-184 72s-184-37.232-184-72v-44.92c30.24 31.408 100.35 52.92 184 52.92s153.76-21.512 184-52.92zm-184-8c-110.06 0-184-37.232-184-72s73.936-72 184-72 184 37.232 184 72-73.936 72-184 72z"/>
  </g>
  <g transform="matrix(.069606 0 0 .069606 232.7 92.114)">
   <path d="m455.5 40h-400c-30.603 0-55.5 24.897-55.5 55.5v320c0 30.603 24.897 55.5 55.5 55.5h400c30.603 0 55.5-24.897 55.5-55.5v-320c0-30.603-24.897-55.5-55.5-55.5zm40.5 375.5c0 22.332-18.168 40.5-40.5 40.5h-400c-22.332 0-40.5-18.168-40.5-40.5v-320c0-22.332 18.168-40.5 40.5-40.5h400c22.332 0 40.5 18.168 40.5 40.5z"/>
   <path d="m471.5 120h-432c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h432c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
   <path d="m55.5 95c1.97 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.32 2.2 5.3 2.2z"/>
   <path d="m119.5 95c1.97 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.32 2.2 5.3 2.2z"/>
   <path d="m87.5 95c1.98 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.32-2.2-5.3-2.2-1.97 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.33 2.2 5.3 2.2z"/>
  </g>
  <g fill="#000000" font-family="sans-serif" font-size="7.0556px">
   <text x="32.950771" y="103.98749" stroke-width=".265" style="line-height:1.25" xml:space="preserve"><tspan x="32.950771" y="103.98749" font-size="7.0556px" stroke-width=".265">Database</tspan></text>
   <g stroke-width=".26458" text-anchor="middle">
    <text x="116.69314" y="73.604309" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="116.69314" y="73.604309" text-align="center">EF Core</tspan><tspan x="116.69314" y="82.423759" text-align="center">DbContext</tspan></text>
    <text x="183.3107" y="104.70334" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="183.3107" y="104.70334" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">UI Model</tspan></text>
    <text x="248.21609" y="75.803276" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="248.21609" y="75.803276" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">REST API</tspan></text>
    <text x="249.8038" y="135.22382" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="249.8038" y="135.22382" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">Admin UI</tspan></text>
   </g>
  </g>
 </g>
 <g transform="matrix(.54966 0 0 .54966 29.527 37.983)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
  <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
  <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
 </g>
 <g transform="matrix(.73452 0 0 .54315 98.949 40.298)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
  <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
  <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
 </g>
 <g transform="matrix(.73452 0 0 .54315 159.57 18.516)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
  <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
  <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
 </g>
 <g transform="matrix(.73452 0 0 .54315 160.25 62.868)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
  <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
  <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
 </g>
</svg>

Follow the steps to build Admin UIs with database context approach:

### Create Deviser Module
Create a deviser module project with database context as explained in this section.

### Implement IAdminConfigurator
Implement a class with the interface `IAdminConfigurator<MyDbContext>`. The `ConfigureAdmin()` method is used to build Admin UI model.

```cs
public class AdminConfigurator : IAdminConfigurator<BlogDbContext>
{
    public void ConfigureAdmin(IAdminBuilder adminBuilder)
    {
        adminBuilder.MapperConfiguration = BlogMapper.MapperConfiguration;

        adminBuilder.Register<DTO.Post>(modelBuilder =>
        {
            modelBuilder.GridBuilder.Title = "Posts";
            modelBuilder.FormBuilder.Title = "Post";

            modelBuilder.GridBuilder
                .AddField(p => p.Title)
                .AddField(p => p.Category)
                .AddField(p => p.Tags)
                .AddField(p => p.CreatedOn, option => option.Format = "dd.MM.yyyy")
                .AddField(p => p.CreatedBy, option => option.DisplayName = "Author");

            modelBuilder.FormBuilder
                .AddKeyField(p => p.Id)
                .AddField(p => p.Title)
                .AddField(s => s.Summary)
                .AddField(s => s.Thumbnail)
                .AddField(s => s.Content)
                .AddSelectField(s => s.Category, expr => expr.Name)
                .AddInlineMultiSelectField<DTO.Tag>(s => s.Tags, expr => expr.Name)
                .AddField(p => p.CreatedOn, option => option.Format = "dd.MM.yyyy");
            
            modelBuilder.FormBuilder
                .Property(p => p.Tags)
                .AddItemBy(t => t.Name);
            
            modelBuilder.AddChildConfig(s => s.Comments, (childForm) =>
            {
                childForm.FormBuilder
                .AddKeyField(c => c.Id)
                .AddField(c => c.UserName)
                .AddField(c => c.Comment)
                .AddField(c => c.CreatedOn)
                .AddField(c => c.IsApproved);
            });
        });

        adminBuilder.Register<DTO.Category>(modelBuilder =>
        {
            modelBuilder.GridBuilder
                .AddField(p => p.Name);

            modelBuilder.FormBuilder
                .AddKeyField(p => p.Id)
                .AddField(p => p.Name);
        });

        adminBuilder.Register<DTO.Tag>(modelBuilder =>
        {
            modelBuilder.GridBuilder
                .AddField(p => p.Name);

            modelBuilder.FormBuilder
                .AddKeyField(p => p.Id)
                .AddField(p => p.Name);
        });

    }
}
```

>[!NOTE]
>A deviser module can have only one implementation of `IAdminConfigurator`, but it can have one or more admin pages. Each admin page is registered by a class type (usually a DTO) and it should be unique in a `IAdminConfigurator` implementation.

`IAdminBuilder.Register<TModel>()` method registers a admin page for the model `TModel`. `ModelBuilder` API on this method has `GridBuilder` and `FormBuilder` API to build Grid and Form respectively. In addition, parent-child relationship can be built using `ModelBuilder.AddChildConfig()` method.

>[!NOTE]
>A KeyField is must for an admin page. It can be either declared in `GridBuilder` or `FormBuilder`.

### Configure Mapping using AutoMapper
Create a IMapper using Automapper. For example:

```cs
public class BlogMapper
{
    public static MapperConfiguration MapperConfiguration;
    public static IMapper Mapper;
    static BlogMapper()
    {
        MapperConfiguration = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Post, DTO.Post>().ReverseMap();
            cfg.CreateMap<Tag, DTO.Tag>().ReverseMap();
            cfg.CreateMap<Comments, DTO.Comments>().ReverseMap();
            cfg.CreateMap<Category, DTO.Category>().ReverseMap();
        });
        Mapper = MapperConfiguration.CreateMapper();
    }
}
```

>[!NOTE]
>**Why mapping is required?**
> Exposing all fields (in particular audit and secure fields) from data layer to UI layer or Web API layer is not secure as well not a best practice. Therefore, mapping from data models to DTOs (Data Transfer Objects) allows to hide audit/secure fields. In addition, this approach decouples the data layer and UI layer. 

### Create AdminController
Finally, create a `AdminController` class inherits `AdminController<TAdminConfigurator>`, `TAdminConfigurator` is the class that has been created in previous step.
`TAdminConfigurator` should implement `IAdminConfigurator` interface.

```cs
[Module("DemoAdminBlog")]
public class AdminController : AdminController<AdminConfigurator>
{
    public AdminController(IServiceProvider serviceProvider)
        : base(serviceProvider)
    {

    }
}
```

## Admin Services
This approach allows to build more customized admin UI from an existing .NET API. Following illustration shows the admin service.

<svg width="500" version="1.1" viewBox="0 0 190 120" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <metadata>
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <g transform="translate(-67.185 .85586)">
  <g transform="translate(-20.465 -25.275)">
   <rect x="96.164" y="61.428" width="41.746" height="29.045" fill="none" stroke="#000" stroke-width=".95512"/>
   <g transform="matrix(.57958 0 0 .55556 166.46 58.856)">
    <path d="m53 41v-12h-22v-10h7v-16h-16v16h7v10h-22v12h-7v16h16v-16h-7v-10h20v10h-7v16h16v-16h-7v-10h20v10h-7v16h16v-16zm-29-36h12v12h-12zm-10 50h-12v-12h12zm22 0h-12v-12h12zm22 0h-12v-12h12z"/>
   </g>
   <g id="API" transform="matrix(.4999 0 0 .4999 231.71 34.275)">
    <path d="m58 54a4 4 0 0 0-3.86 3h-3.14a1 1 0 0 1-1-1v-7h2.14a4 4 0 1 0 0-2h-2.14v-15h3a9 9 0 0 0 0-18h-2.06a8.977 8.977 0 0 0-14.18-6.3 14.982 14.982 0 0 0-26.45 6.34 8.993 8.993 0 0 0 0.69 17.96h3v13h-2.14a4 4 0 1 0 0 2h2.14v9a1 1 0 0 1-1 1h-3.14a4 4 0 1 0 0 2h3.14a3.009 3.009 0 0 0 3-3v-9h8a3.009 3.009 0 0 0 3-3v-12h4v22.14a4 4 0 1 0 2 0v-22.14h4v14a3.009 3.009 0 0 0 3 3h8v7a3.009 3.009 0 0 0 3 3h3.14a3.994 3.994 0 1 0 3.86-5zm-2-8a2 2 0 1 1-2 2 2.006 2.006 0 0 1 2-2zm-48 2a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2zm-2 12a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2zm19-16a1 1 0 0 1-1 1h-8v-13h9zm9 14a2 2 0 1 1-2-2 2.006 2.006 0 0 1 2 2zm14-11h-8a1 1 0 0 1-1-1v-14h9zm-37-17a7 7 0 0 1 0-14h0.12a7.018 7.018 0 0 1 6 3.61l1.76-0.97a9.086 9.086 0 0 0-6.55-4.54 13 13 0 0 1 25.64 1.97l1.99-0.14a14.907 14.907 0 0 0-2.07-6.58 7 7 0 0 1 10.24 9.04l1.74 0.97a9.005 9.005 0 0 0 1.07-3.36h2.06a7 7 0 1 1 0 14zm47 30a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2z"/>
    <path d="m8 23a3 3 0 0 1 3-3v-2a5 5 0 0 0 0 10h6v-2h-6a3 3 0 0 1-3-3z"/>
    <path d="m25.99 18.89a0.989 0.989 0 0 0-0.99-0.89h-4a0.989 0.989 0 0 0-0.99 0.89l-1 9 1.98 0.22 0.35-3.11h3.32l0.35 3.11 1.98-0.22zm-4.43 4.11 0.34-3h2.2l0.34 3z"/>
    <path d="m36 18h-6a1 1 0 0 0-1 1v9h2v-4h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-4v-2h4z"/>
    <path d="m43 20v6h2v2h-6v-2h2v-6h-2v-2h6v2z"/>
   </g>
   <g transform="matrix(.069606 0 0 .069606 232.7 92.114)">
    <path d="m455.5 40h-400c-30.603 0-55.5 24.897-55.5 55.5v320c0 30.603 24.897 55.5 55.5 55.5h400c30.603 0 55.5-24.897 55.5-55.5v-320c0-30.603-24.897-55.5-55.5-55.5zm40.5 375.5c0 22.332-18.168 40.5-40.5 40.5h-400c-22.332 0-40.5-18.168-40.5-40.5v-320c0-22.332 18.168-40.5 40.5-40.5h400c22.332 0 40.5 18.168 40.5 40.5z"/>
    <path d="m471.5 120h-432c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h432c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
    <path d="m55.5 95c1.97 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.32 2.2 5.3 2.2z"/>
    <path d="m119.5 95c1.97 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.32 2.2 5.3 2.2z"/>
    <path d="m87.5 95c1.98 0 3.91-0.8 5.3-2.2 1.4-1.39 2.2-3.32 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.32-2.2-5.3-2.2-1.97 0-3.91 0.8-5.3 2.2-1.4 1.39-2.2 3.329-2.2 5.3 0 1.979 0.8 3.91 2.2 5.3 1.39 1.4 3.33 2.2 5.3 2.2z"/>
   </g>
   <g fill="#000000" font-family="sans-serif" font-size="7.0556px" stroke-width=".26458" text-anchor="middle">
    <text x="116.69314" y="73.604309" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="116.69314" y="73.604309" text-align="center">Admin</tspan><tspan x="116.69314" y="82.423759" text-align="center">Services</tspan></text>
    <text x="183.3107" y="104.70334" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="183.3107" y="104.70334" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">UI Model</tspan></text>
    <text x="248.21609" y="75.803276" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="248.21609" y="75.803276" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">REST API</tspan></text>
    <text x="249.8038" y="135.22382" text-align="center" style="line-height:1.25" xml:space="preserve"><tspan x="249.8038" y="135.22382" font-size="7.0556px" stroke-width=".26458" text-align="center" text-anchor="middle">Admin UI</tspan></text>
   </g>
  </g>
  <g transform="matrix(.73452 0 0 .54315 98.949 40.298)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
   <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
   <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
  </g>
  <g transform="matrix(.73452 0 0 .54315 159.57 18.516)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
   <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
   <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
  </g>
  <g transform="matrix(.73452 0 0 .54315 160.25 62.868)" stroke="#000" stroke-miterlimit="3.9" stroke-width=".486">
   <path transform="matrix(1.0583 0 0 1.011 -1.1442 -32.522)" d="m62.032 51.441-8.6239 4.979v-9.958z"/>
   <rect x="32.075" y="18.685" width="23.3" height="2.1182"/>
  </g>
 </g>
</svg>


### Create Deviser Module
Create a deviser module project as explained in the module section.

### Implement IAdminConfigurator
Implement a class with interface `IAdminConfigurator`. This interface has method `ConfigureAdmin()` which is used to build an UI model.

Interface `IAdminBuilder` have following methods to build customized UI: 
1. `IAdminBuilder.Register<TModel, TAdminService>()` method registers a admin page for the model `TModel` which has a **grid** and a **form**. The admin page can be customized by a class `TAdminService` which implements interface `IAdminService<TModel>`. This class has methods to perform CRUD operations on the specified UI model.
2. `IAdminBuilder.RegisterGrid<TModel, TAdminGridService>()` registers a admin page for model `TModel` which has **only grid**. The grid can be customized by class `TAdminGridService` which implements interface `IAdminGridService<TModel>`. This class has methods to perform operations on the grid.
3. `IAdminBuilder.RegisterForm<TModel, TAdminFormService>()` registers a admin page for model `TModel` which has **only form**. This form can be customized by class `TAdminFormService` which implements the interface `IAdminFormService<TModel>`.
4. `IAdminBuilder.RegisterTreeAndForm<TModel, TAdminGridService>()` registers a admin page for model `TModel` which has a **tree** and a **form**. Both the tree and form can be customized by class `TAdminTreeService` which implements the interface `IAdminFormService<TModel>`

The Deviser Admin provides following interfaces to build an admin service: 
- `IAdminService<TModel>` is used to build an admin UI with customized CRUD. It includes: 
    - A grid view to list all records
    - A Form to create a new record and to edit an existing record
- `IAdminGridService<TModel>` is used to build an admin UI where only a grid view is required.
- `IAdminFormService<TModel>` is used to build an admin UI only with a Form
- `IAdminTreeService<TModel>` is used to build an admin UI with customized CRUD. It includes:
    - A tree view to list all records in a tree view 
    - A form to create a new record and to edit an existing record.

```cs
public class AdminConfigurator : IAdminConfigurator
{
    public void ConfigureAdmin(IAdminBuilder adminBuilder)
    {
        adminBuilder.Register<Employee, EmployeeAdminService>(modelBuilder =>
        {
            modelBuilder.GridBuilder.Title = "Employee";
            modelBuilder.FormBuilder.Title = "Employee Details";

            modelBuilder.GridBuilder
                .AddField(c => c.Name)
                .AddField(c => c.Designation)
                .AddField(c => c.Email)
                .AddField(c => c.Nationality)
                .AddField(c => c.IsActive, option =>
                {
                    option.DisplayName = "Is Active";
                    option.IsTrue = "Active";
                    option.IsFalse = "In Active";
                });

            modelBuilder.GridBuilder.DisplayFieldAs(c => c.IsActive, LabelType.Badge, c => c.IsActiveBadgeClass);

            modelBuilder.FormBuilder
                .AddKeyField(c => c.Id)
                .AddField(c => c.Name, option => { option.EnableIn = FormMode.Create; })
                .AddField(c => c.Designation)
                .AddField(c => c.Email, option => option.ValidationType = ValidationType.Email)
                .AddField(c => c.IsActive)
                .AddSelectField(c => c.Nationality);

            modelBuilder.FormBuilder.Property(c => c.Nationality).HasLookup(sp => sp.GetService<EmployeeAdminService>().GetCountries(),
                ke => ke.Code,
                de => de.Name);
        });

        adminBuilder.RegisterGrid<Customer, CustomerAdminGridService>(builder =>
        {
            builder.Title = "Customers";

            builder
                .AddKeyField(c => c.Id)
                .AddField(c => c.OrderId)
                .AddField(c => c.Name)
                .AddField(c => c.Email)
                .AddField(c => c.OrderDate)
                .AddField(c => c.OrderStatus)
                .AddField(c => c.ShipDate)
                .AddField(c => c.ShipCountry);

            builder.Property(c => c.ShipCountry).HasLookup(sp => sp.GetService<EmployeeAdminService>().GetCountries(),
                ke => ke.Code,
                de => de.Name);

            builder.Property(c => c.OrderStatus).HasLookup(sp => OrderStatus.OrderStatuses,
                ke => ke.Id,
                de => de.Name);

            builder.DisplayFieldAs(c => c.OrderStatus, LabelType.Badge, c => c.OrderStatusClass);

            builder.AddRowAction("MarkAsDelivered", "Mark As Delivered",
                (provider, item) => provider.GetService<CustomerAdminGridService>().MarkDelivered(item));

            builder.HideEditButton();
        });

        adminBuilder.RegisterForm<Guest, EventFormService>(builder =>
        {
            builder
                    .AddFieldSet("General", fieldBuilder =>
                    {
                        fieldBuilder
                            .AddKeyField(c => c.Id)
                            .AddField(p => p.Name)
                            .AddSelectField(p => p.Gender)
                            .AddField(p => p.Email, option => option.ValidationType = ValidationType.Email);
                    })

                    .AddFieldSet("Dietary requirements", fieldBuilder =>
                    {
                        fieldBuilder
                            .AddField(p => p.IsTakePartInDinner)
                            .AddSelectField(p => p.FoodType);
                    });

            builder.Property(f => f.FoodType)
                .ShowOn(f => f.IsTakePartInDinner)
                .ValidateOn(f => f.IsTakePartInDinner);

            builder.Property(f => f.Gender).HasLookup(
                sp => Gender.Genders,
                ke => ke.Id,
                de => de.Name);

            builder.Property(f => f.FoodType).HasLookup(
                sp => FoodType.FoodTypes,
                ke => ke.Id,
                de => de.Name);
        });

        adminBuilder.RegisterTreeAndForm<Folder, FolderAdminService>(builder =>
        {
            builder.TreeBuilder.Title = "File Manager";
            builder.FormBuilder.Title = "File Manager";
            builder.TreeBuilder.ConfigureTree(p => p.Id,
                p => p.Name,
                p => p.Parent,
                p => p.SubFolders,
                p => p.SortOrder);

            var formBuilder = builder.FormBuilder;
            var adminId = Guid.Parse("5308b86c-a2fc-4220-8ba2-47e7bec1938d");
            var urlId = Guid.Parse("bfefa535-7af1-4ddc-82c0-c906c948367a");
            var standardId = Guid.Parse("4c06dcfd-214f-45af-8404-ff84b412ab01");

            formBuilder
                    .AddFieldSet("General", fieldBuilder =>
                    {
                        fieldBuilder
                            .AddField(p => p.Name);
                    })

                    .AddFieldSet("Permissions", fieldBuilder =>
                    {
                        fieldBuilder.AddCheckBoxMatrix(p => p.PagePermissions,
                            p => p.RoleId,
                            p => p.PermissionId,
                            p => p.Id,
                            p => p.FolderId, typeof(Role), typeof(Permission),
                            option => option.IsRequired = false);
                    });

            formBuilder.Property(f => f.PagePermissions).HasMatrixLookup<Role, Permission, Guid>(
                sp => sp.GetService<IRoleRepository>().GetRoles(),
                ke => ke.Id,
                de => de.Name,
                sp => sp.GetService<IPermissionRepository>().GetPagePermissions(),
                ke => ke.Id,
                de => de.Name);
        });
    }
}
```

### Create AdminController
Finally, create a class `AdminController` inherits from class `AdminController<TAdminConfigurator>`, `TAdminConfigurator` is the class that has been created in the previous step. The class `TAdminConfigurator` should implement `IAdminConfigurator` interface.

```cs
[Module("DemoAdmin")]
public class AdminController : AdminController<AdminConfigurator>
{
    public AdminController(IServiceProvider serviceProvider)
        : base(serviceProvider)
    {

    }
}
```

## Grid
`GridBuilder` API under `ModelBuilder` API is used to build an admin grid. The admin grid can be customized API methods. 

### Fields
In a grid, fields can be added by `AddField()` method. Similarly, key field can be added by `AddKeyField()` method. Both methods accept a lambda expression to select a field.

> [!div class="tabbedCodeSnippets" data-resources="OutlookServices.Calendar"]
> ```cs
> modelBuilder.GridBuilder.AddField(c => c.Name)
> modelBuilder.AddKeyField(c => c.Id)
> ```

### LookUp
A grid field may have a select or multi-select field. Adding a lookup for select or multi-select filed is required to display the values. Lookup can be added either in a `GridBuilder API` or a `FormBuilder API` in a admin page.

> [!div class="tabbedCodeSnippets" data-resources="OutlookServices.Calendar"]
> ```cs
> modelBuilder.FormBuilder.Property(c => c.Nationality).HasLookup(sp => sp.GetService<EmployeeAdminService>().GetCountries(),
>                    ke => ke.Code,
>                    de => de.Name);
> ```

Above method specifies field `Nationality` has a lookup that can be provided by `EmployeeAdminService.GetCountries()` method. In addition, key and display fields of the lookup are specified as Code and Name respectively.

>[!NOTE]
>In case of database context approach, lookups are automatically identified by `TDatabaseContext`. No need to define it explicitly

### Field Customization
Appearance of a field in a grid can be customized by `DisplayFieldAs()` method. For example, a filed can be displayed as badge or an icon.

> [!div class="tabbedCodeSnippets" data-resources="OutlookServices.Calendar"]
> ```cs
> modelBuilder.GridBuilder.DisplayFieldAs(c => c.IsActive, LabelType.Badge, c => c.IsActiveBadgeClass);
> ```


### Grid Customization
Grid behaviors can be customized further. For example, Edit Button of a grid ha be hidden by `GridBuilder.HideEditButton()` method. In addition, one or more row actions can be added to a grid using `builder.AddRowAction()` method. 

> [!div class="tabbedCodeSnippets" data-resources="OutlookServices.Calendar"]
> ```cs
> modelBuilder.GridBuilder.AddRowAction("MarkAsDelivered", "Mark As Delivered",
>                    (provider, item) => provider.GetService<CustomerAdminGridService>().MarkDelivered(item));
> ```

## Form
Deviser admin provides a `FormBuilder` API to build an admin form. An admin form can be built for an admin grid or fit can be build independent of an admin grid i.e standalone admin form.

## Fields
In a form, fields can be added in a new line by `AddField(e => e.FieldName)` method. Similarly, the method `AddInlineField(e => e.FieldName)` is used to add a filed in the same line. A key field can be added by `AddKeyField(e => e.Id)` method. All those methods accept a lambda expression to select a field.

For example, following code snipet will added a key field Id and a text field name. 
```cs
modelBuilder.FormBuilder
    .AddKeyField(c => c.Id)
    .AddField(c => c.Name)
```

>[!NOTE]
>**Key Field**
> A key field is mandatory for an admin model and it can be either specified in a `GridBuilder` or in a `FormBuilder` API.

Similarly, a single select  filed can be added using `AddSelectField()` and a multiple select filed can be added using `AddMultiSelectField()` methods. For each single or multiple select field a lookup must be specified using `.Property(f=>f.fieldName).HasLookup()` method.

Admin form supports following field types:

| Field Type | Methods | Property Types | Option
| --- | --- | --- | ---
| Text | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | None
| Number | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `int`, `float`, `double`, `long` and `decimal` | None
| Static Text | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `bool` | `option.FieldType = FieldType.Static`
| CheckBox | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `bool` | None
| Email | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.EmailAddress`
| Password | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.Password`
| Phone | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.Phone`
| TextArea | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.TextArea`
| RichText | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.RichText`
| Date | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `DateTime` | None
| Select | `AddSelectField(e => e.FieldName)` <br /> `AddInlineSelectField(e => e.FieldName)` | Custom type `T` | None
| MultiSelect | `AddMultiSelectField(e => e.FieldName)` <br /> `AddInlineMultiSelectField(e => e.FieldName)` | `ICollection<T>` | None
| RadioButton | `AddSelectField(e => e.FieldName)` <br /> `AddInlineSelectField(e => e.FieldName)` | Custom type `T` | `option => option.FieldType = FieldType.RadioButton`
| Image | `AddField(e => e.FieldName)` <br /> `AddInlineField(e => e.FieldName)` | `string` | `option.FieldType = FieldType.Image`
| CheckBox Matrix | `AddCheckBoxMatrix(e => e.FieldName, e => e.RowKey, e => e.ColumnKey, e => e.matrixKey, e => e.ContextKey, typeof(TRow), typeof(TColumn))` | `ICollection<TRowColumn>` | None

## Lookup
Select and Multiselect fileds require a lookup configuration. For example select filed `Nationality` requires a `HasLookup()` method as shown below.

```cs
modelBuilder.FormBuilder
    .AddKeyField(c => c.Id)    
    .AddSelectField(c => c.Nationality);

    modelBuilder.FormBuilder.Property(c => c.Nationality).HasLookup(sp => sp.GetService<EmployeeAdminService>().GetCountries(),
        ke => ke.Code,
        de => de.Name);
```

`HasLookup()` method accepts three parameters. First parameter expression expects the list of objects of type `TProperty`, second parameter expression is a key selector for the lookup and the third parameter expression is the display filed for the lookup.

## Field Grouping
Fields can be grouped by using `formBuilder.AddFieldSet()` method.

```cs
formBuilder
    .AddFieldSet("General", fieldBuilder =>
    {
        fieldBuilder
            .AddField(f => f.SiteName)
            .AddField(f => f.SiteDescription, option => option.FieldType = FieldType.TextArea)
            .AddField(f => f.SiteAdminEmail, option => option.FieldType = FieldType.EmailAddress)
            .AddField(f => f.SiteRoot)
            .AddField(f => f.SiteHeaderTags)
            .AddSelectField(f => f.SiteLanguage);

    });
```

## Field Options
- Description
- DisplayName
- LabelOption
- Format (DateTime)
- IsRequired
- MaxLength
- ShowIn - Show/Hide Fields in both create and update or create only or update only
- EnableIn - Enable/Disable in both create and update or create only or update only
- ShowOn
## Validation
- Basic Validation
- Condition Validation (ValidateOn)
## LookUp – LookUp can be defined either in Grid/Form
- Basic lookup
- CheckBoxMatrix / MatrixLookUp

## Tree
### Display Property
### Parent
### Child
### Sort Property



