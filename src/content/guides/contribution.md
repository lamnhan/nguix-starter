## Contribution

The contribution guideline.

### 👍 List of contributors

- [Lam Nhan](https://lamnhan.com): Creator of this library and many more

### 🐛 Test contribution

There are currently no UNIT nor E2E test setup whatsoever.

### 💻 Library contribution

The library source code located at `projects/starter`.

There are two scripts for working with the library:

- `npm run build:lib`: build the library
- `npm run deploy:lib`: deploy the library to NPM

#### ⭐ Add a [`components`](/components)

To add a new `component`, first open a proposal first at: [issues](https://github.com/lamnhan/nguix-starter/labels/COMPONENT). With the label of `COMPONENT` and  titled: `New component: [name]`.

A new component proposal must describe its purpose and properties. It is recommended to include a UI design.

When a new component is approved, I will create the initial code at `projects/starter/src/lib/components/[name]`.

To create a component, see [HeaderComponent](https://github.com/lamnhan/nguix-starter/tree/main/projects/starter/src/lib/components/header) for example:
- Run, `ng g c components/[name] --skip-import --project starter`
- Add, `[name].module.ts`
- Imports & exports in `starter.module.ts`
- Exports in `public-api.ts`

A component must follow these rules:
- Has its own module named: `Nguix...ComponentModule`
- The selector: `<nguix-...></nguix-...>`
- Top level template element (if available) must has a class of: `host`
- Style is contained in `:host {}` or `.host {}`
- Must support template inputs and I18N
- Fully responsive: 320-[480]-576-768-992-1200-1400 (other breakpoints may needed)
- Code comment for @Input, @Output and @Inject (@lamnhan/ngx-useful sevices)
- `@ignore` for the rest.

#### ⭐ Add a [`pages`](/pages)

To add a new `page`, first open a proposal first at: [issues](https://github.com/lamnhan/nguix-starter/labels/PAGE). With the label of `PAGE` and  titled: `New page: [name]`.

A new page proposal must describe its purpose and properties. It is recommended to include a UI design.

When a new page is approved, I will create the initial code at `projects/starter/src/lib/pages/[name]`.

To create a page, see [OopsPage](https://github.com/lamnhan/nguix-starter/tree/main/projects/starter/src/lib/pages/oops) for example:
- Run, `ng g c pages/[name] --skip-import --project starter`
- Rename `...Component` -> `...Page` 
- Add, `[name]-routing.module.ts` and `[name].module.ts`
- Exports in `public-api.ts`

A page must follow these rules:
- Has its own module named: `Nguix...PageModule`
- The selector: `<nguix-...-page></nguix-...-page>`
- Top level template element (if available) must has a class of: `host`
- Style is contained in `:host {}` or `.host {}`
- Must support template inputs and I18N
- Fully responsive (992px may be maximum)
- Code comment for data inputs and @Inject
- `@ignore` for the rest.

#### ⭐ Add a [`splashscreens`](/splashscreens)

To add a new `splashcreen`, first open a proposal first at: [issues](https://github.com/lamnhan/nguix-starter/labels/SPLASHSCREEN). With the label of `SPLASHSCREEN` and  titled: `New splashcreen: [name]`.

A new splashscreen proposal is recommended to include a UI design.

When a new splashscreen is approved, I will create the initial code at `projects/starter/src/splashscreens/[name]` and `src/content/splashscreens/[name].html`.

To create a splashscreen, see [Heartbeat](https://github.com/lamnhan/nguix-starter/tree/main/projects/starter/src/splashscreens/heartbeat) and [heartbeat.html](https://github.com/lamnhan/nguix-starter/tree/main/src/content/splashscreens/heartbeat.html) for example:
- Create `[name]/index.scss`
- Create `[name]/index.js`
- Create `src/content/splashscreens/[name].html`

A splashscreen must follow these rules:
- All assets and template must be minimum and seft contains
- Assets and template must be minimzed

#### ⭐ Add a [`templates`](/templates)

A template is a ready to use app, it contains components, pages and splashcreens.

To add a new `template`, first open a proposal first at: [issues](https://github.com/lamnhan/nguix-starter/labels/TEMPLATE). With the label of `TEMPLATE` and  titled: `New template: [name]`.

A new template proposal must describe its purpose and properties. It is recommended to include a UI design.

When a new template is approved, I will create the initial repo at `https://github.com/themolacms/starter-[name]`.

It a standard Angular application which functionality comes from [@lamnhan/ngx-useful](https://ngx-useful.lamnhan.com) and UI/UX comes [@lamnhan/nguix-starter](https://nguix-starter.lamnhan.com)

### 📖 Documentation contribution

The documentation home page source is located at `src/`.

There are two scripts for working with the app:

- `npm run build:app`: build the app
- `npm run deploy:app`: deploy the app to Github Pages

#### ⭐ Add a [`guides`](/guides) article

Guide articles source located at `src/content/guides`.

To create a new guide article, see [introduction.md](https://github.com/lamnhan/nguix-starter/tree/main/src/content/guides/introduction.md) for example:
- Create `[name].md` file
- Add a menu entry (`.guideMenu`) in `data.service.ts`

#### ⭐ Add a [`components`](/components) article

Component articles source located at `src/app/pages/component/[name]`.

To create a new component article, see [header](https://github.com/lamnhan/nguix-starter/tree/main/src/app/pages/component/header) for example:
- Run, 'ng g m pages/component/[name] --route component/[name] --module app.module'
- Place the routing rule in its group in `app-routing.module.ts`
- Edit file: module, component and template
- Add Ayedocs rule in `.ayedocsrc.js`
- Add a menu entry (`.componentMenu`) in `data.service.ts`

#### ⭐ Add a [`pages`](/pages) article

Page articles source located at `src/app/pages/page/[name]`.

To create a new page article, see [oops](https://github.com/lamnhan/nguix-starter/tree/main/src/app/pages/page/oops) for example:
- Run, 'ng g m pages/page/[name] --route page/[name] --module app.module'
- Place the routing rule in its group in `app-routing.module.ts`
- Add a routing rule to the library page module (for preview and template).
- Edit file: module, component and template
- Add Ayedocs rule in `.ayedocsrc.js`
- Add a menu entry (`.pageMenu`) in `data.service.ts`

#### ⭐ Add a [`splashscreens`](/splashscreens) article

Splashscreen articles source located at `src/app/pages/splashscreen/[name]`.

To create a new splashscreen article, see [heartbeat](https://github.com/lamnhan/nguix-starter/tree/main/src/app/pages/splashscreen/heartbeat) for example:
- Run, 'ng g m pages/splashscreen/[name] --route splashscreen/[name] --module app.module'
- Place the routing rule in its group in `app-routing.module.ts`
- Edit file: module, component and template
- Add a menu entry (`.splashscreenMenu`) in `data.service.ts`

#### ⭐ Add a [`templates`](/templates) article

To create a new splashscreen article:
- Add a menu entry (`.splashscreenMenu`) in `data.service.ts`
- Add a template item `.templateItems`
