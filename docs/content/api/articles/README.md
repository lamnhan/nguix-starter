<section id="head" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

# @lamnhan/nguix-starter

**My starter Angular UI kit.**

</section>

<section id="tocx" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Basic usage](#basic-usage)
- [Modules](#modules)
- [Components](#components)
- [Services](#services)
- [Pipes](#pipes)
- [Detail API reference](https://nguix-starter.lamnhan.com/content/reference)


</section>

<section id="main">

## Getting started

Homepage: [https://nguix-starter.lamnhan.com](https://nguix-starter.lamnhan.com)

### Installation

Install theming, [@unistylus/core](https://unistylus.lamnhan.com):

```sh
npm i @unistylus/{core,bootstrap}
```

Install data models, [@lamnhan/schemata](https://schemata.lamnhan.com):

```sh
npm i @lamnhan/{schemata,ngx-schemata}
```

Install utilities, [@lamnhan/ngx-useful](https://ngx-useful.lamnhan.com):

```sh
npm i @lamnhan/ngx-useful
```

Install NGUIX library, [@lamnhan/nguix-starter](https://nguix-starter.lamnhan.com):

```sh
npm i @lamnhan/nguix-starter
```

### Basic usage

Use a component:

```ts
// import the module --> app.module.ts
import { NguixHeaderComponentModule } from "@lamnhan/nguix-starter";
```

```html
<!--  use the component ~~> app.component.html -->

<nguix-header></nguix-header>
```

Use a page:

```ts
// define a route --> app-routing.module.ts
const routes: Routes = [
  {
    path: "**",
    loadChildren: () =>
      import("@lamnhan/nguix-starter").then((m) => m.NguixOopsPageModule),
  },
];
```

See [guides](https://nguix-starter.lamnhan.com/guides) for more articles. Also see the list of [components](https://nguix-starter.lamnhan.com/components), [pages](https://nguix-starter.lamnhan.com/pages), [splashscreens](https://nguix-starter.lamnhan.com/splashscreens).

Also, visit the [homepage](https://nguix-starter.lamnhan.com).

</section>

<section id="modules" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

<h2><a name="modules"><p>Modules</p>
</a></h2>

| Class                                                                                                             | Description |
| ----------------------------------------------------------------------------------------------------------------- | ----------- |
| [NguixStarterI18nModule](https://nguix-starter.lamnhan.com/content/reference/classes/nguixstarteri18nmodule.html) |             |
| [NguixStarterModule](https://nguix-starter.lamnhan.com/content/reference/classes/nguixstartermodule.html)         |             |

</section>

<section id="components" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

<h2><a name="components"><p>Components</p>
</a></h2>

| Class                                                                                                                   | Description |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| [AccountComponent](https://nguix-starter.lamnhan.com/content/reference/classes/accountcomponent.html)                   |             |
| [AvatarComponent](https://nguix-starter.lamnhan.com/content/reference/classes/avatarcomponent.html)                     |             |
| [AvatarEditorComponent](https://nguix-starter.lamnhan.com/content/reference/classes/avatareditorcomponent.html)         |             |
| [ContentComponent](https://nguix-starter.lamnhan.com/content/reference/classes/contentcomponent.html)                   |             |
| [CoverComponent](https://nguix-starter.lamnhan.com/content/reference/classes/covercomponent.html)                       |             |
| [CoverEditorComponent](https://nguix-starter.lamnhan.com/content/reference/classes/covereditorcomponent.html)           |             |
| [FooterComponent](https://nguix-starter.lamnhan.com/content/reference/classes/footercomponent.html)                     |             |
| [Header2ndComponent](https://nguix-starter.lamnhan.com/content/reference/classes/header2ndcomponent.html)               |             |
| [HeaderComponent](https://nguix-starter.lamnhan.com/content/reference/classes/headercomponent.html)                     |             |
| [IconComponent](https://nguix-starter.lamnhan.com/content/reference/classes/iconcomponent.html)                         |             |
| [ImageCropperComponent](https://nguix-starter.lamnhan.com/content/reference/classes/imagecroppercomponent.html)         |             |
| [LoginComponent](https://nguix-starter.lamnhan.com/content/reference/classes/logincomponent.html)                       |             |
| [NavIndicatorComponent](https://nguix-starter.lamnhan.com/content/reference/classes/navindicatorcomponent.html)         |             |
| [NetworkIndicatorComponent](https://nguix-starter.lamnhan.com/content/reference/classes/networkindicatorcomponent.html) |             |
| [OopsComponent](https://nguix-starter.lamnhan.com/content/reference/classes/oopscomponent.html)                         |             |
| [PostComponent](https://nguix-starter.lamnhan.com/content/reference/classes/postcomponent.html)                         |             |
| [PostsComponent](https://nguix-starter.lamnhan.com/content/reference/classes/postscomponent.html)                       |             |
| [PwaBoxComponent](https://nguix-starter.lamnhan.com/content/reference/classes/pwaboxcomponent.html)                     |             |
| [PwaReminderComponent](https://nguix-starter.lamnhan.com/content/reference/classes/pwaremindercomponent.html)           |             |
| [RegisterComponent](https://nguix-starter.lamnhan.com/content/reference/classes/registercomponent.html)                 |             |
| [ShareComponent](https://nguix-starter.lamnhan.com/content/reference/classes/sharecomponent.html)                       |             |
| [SkeletonVideoComponent](https://nguix-starter.lamnhan.com/content/reference/classes/skeletonvideocomponent.html)       |             |
| [SkeletonVideosComponent](https://nguix-starter.lamnhan.com/content/reference/classes/skeletonvideoscomponent.html)     |             |
| [SpinnerComponent](https://nguix-starter.lamnhan.com/content/reference/classes/spinnercomponent.html)                   |             |
| [TabsComponent](https://nguix-starter.lamnhan.com/content/reference/classes/tabscomponent.html)                         |             |
| [TextEditorComponent](https://nguix-starter.lamnhan.com/content/reference/classes/texteditorcomponent.html)             |             |
| [VideoComponent](https://nguix-starter.lamnhan.com/content/reference/classes/videocomponent.html)                       |             |
| [VideoPlayerComponent](https://nguix-starter.lamnhan.com/content/reference/classes/videoplayercomponent.html)           |             |
| [VideosComponent](https://nguix-starter.lamnhan.com/content/reference/classes/videoscomponent.html)                     |             |

</section>

<section id="services" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

<h2><a name="services"><p>Services</p>
</a></h2>

</section>

<section id="pipes" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

<h2><a name="pipes"><p>Pipes</p>
</a></h2>

</section>

<section id="license" data-note="AUTO-GENERATED CONTENT, DO NOT EDIT DIRECTLY!">

## License

**@lamnhan/nguix-starter** is released under the [MIT](https://github.com/lamnhan/nguix-starter/blob/master/LICENSE) license.

</section>
